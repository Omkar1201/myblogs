import { createContext, useEffect, useState } from "react";
export const AppContext = createContext();
export default function AppContextProvider({ children }) {
    const baseurl = 'https://codehelp-apis.vercel.app/api/get-blogs';
    const [blog, setblog] = useState([])
    const [page,setpage]=useState(1)
    const [spinner,setspinner]=useState(false);
    const [totalpage,settotalpage]=useState(null);
    async function fetchpage(page) {
        try {
            setspinner(true);
            const url=`${baseurl}?page=${page}`
            const response = await fetch(url);
            const data = await response.json();
            setpage(data.page) 
            setblog(data.posts);
            settotalpage(data.totalPages)
            setspinner(false)
        }
        catch (error) {
            console.log("not found");
        }

    }
    function handlepage(page)
    {
        setpage(page)
        fetchpage(page);

    }

    const values = {
        blog,
        fetchpage,
        totalpage,
        handlepage,
        page,spinner
    }
    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

