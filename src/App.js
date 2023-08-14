import './App.css';
import Blogs from './components/Blogs';
import Pagenavigate from './components/Pagenavigate';

function App() {
  return (
    <div className="App">
      <h1 className=' border shadow-xl text-2xl font-extrabold py-3'>IT BLOGS</h1>
      <Blogs/>
      <Pagenavigate/>
    </div>
  );
}

export default App;
