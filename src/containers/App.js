import '../App.css';
import Acces from '../Components/Acces';
import AllFiles from '../Components/AllFiles';
import Navbar from '../Components/Navbar';
import Productive from '../Components/Productive';

function App() {
  return (
    <div className='container mx-auto mt-10 md:mt-20  text-white border-2 border-red-800 bgMain '>
      <Navbar />
      <AllFiles />
      <Acces />
      <Productive />
    </div>
  );
}

export default App;
