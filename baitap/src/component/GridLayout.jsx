import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

export default function GridLayout() {
    return (
        <div className='container'>
        <div className='header'><Header/></div>
        <div className='menu'>
          <Navbar/>
        </div>
        <div class="content"> <Content/> </div>
        <div class="footer">
          <Footer/>
        </div>
      </div>
    )
}