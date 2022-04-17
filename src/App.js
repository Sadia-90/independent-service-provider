
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Footer from './Pages/header/Footer/Footer';
import Header from './Pages/header/Header/Header';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        {/* <Route path="/" element={}></Route>
        <Route path="/" element={}></Route>
        <Route path="/" element={}></Route> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
