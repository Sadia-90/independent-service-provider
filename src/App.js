
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Footer from './Pages/header/Footer/Footer';
import Header from './Pages/header/Header/Header';
import Home from './Pages/Home/Home/Home';
import Notfound from './Pages/NotFound/Notfound';
import Login from './Pages/Login/Login'
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Register from './Pages/Register/Register';
//  import RequireAuth from './Pages/RequireAuth/RequireAuth'


function App() {
  return (
    <>
      <Header></Header>


      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="/Register" element={<Register></Register>}></Route>
        <Route path='/blog' element={<Blog />} />
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>

        <Route path='*' element={<Notfound />} />
        {/* <Route path="/" element={}></Route>
        <Route path="/" element={}></Route>
        <Route path="/" element={}></Route> */}

      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
