import '../App.css';
import Acces from '../Components/Acces';
import AllFiles from '../Components/AllFiles';
import Navbar from '../Components/Navbar';

function App() {
  return (
    <div className='container mx-auto mt-10 md:mt-20  text-white border-2 border-red-800 bgMain '>
      <Navbar />
      <AllFiles />
      <Acces />
    </div>
  );
}

export default App;
