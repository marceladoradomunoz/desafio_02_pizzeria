import "../src/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './assets/componets/Footer';
import NavBar from './assets/componets/NavBar';

import Register from './assets/componets/Register';
import Login from './assets/componets/Login'
function App() {
  return (
    <>
        <NavBar></NavBar>
        {/* <Home></Home> */}
        {/* <Register/> */}
        <Login/>
        <Footer></Footer>
    </>
  )
}
export default App;