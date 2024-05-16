import Nav from "./components/common/Nav";
import Change from "./Change";
import Footer from "./components/common/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className=" min-h-screen w-screen relative  left-0 right-0 ">
      <Nav />
      <div className="absolute top-[80px] left-0 right-0 ">
          <Change/>
          <Footer/>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
