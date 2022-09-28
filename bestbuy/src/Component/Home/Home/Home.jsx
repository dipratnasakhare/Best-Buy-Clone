import Navbar from '../Navbar/Navbar/Navbar';
import Footer from '../Footer/Footer'
import Product from '../Product/Product'
import Textnav from '../Navbar/Navtext/Textnav';
function Home() {
  return (
    <div className="home" >
        <Navbar/>
        <Textnav/>
        
     
    
      <Product/>
     
        <Footer/>

    </div>
  );
}

export default Home;
