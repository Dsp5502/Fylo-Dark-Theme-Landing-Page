import '../App.css';
import Acces from '../Components/Acces';
import AllFiles from '../Components/AllFiles';
import Email from '../Components/Email';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Productive from '../Components/Productive';
import Testimonials from '../Components/Testimonials';

function App() {
  return (
    <div className='container mx-auto mt-10 md:mt-20  text-white  bgMain '>
      <Navbar />
      <AllFiles />
      <Acces />
      <Productive />
      <Testimonials />
      <Email />
      <Footer />
    </div>
  );
}

export default App;
