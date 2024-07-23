import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Route ,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
function App() {
  return (
    <div className="App">
          <div className='bg-slate-900 w-[100vw] h-[10vh]'>
          <NavBar></NavBar>
          </div>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
          </Routes>
    </div>
  );
}

export default App;
