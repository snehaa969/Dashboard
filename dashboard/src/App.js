import { AllRoutes } from './routes/AllRoutes';
import { Header, Footer} from './components';
import './App.css';

function App() {
  return (
    <div className='bg-gray-100 min-h-screen flex flex-col'>
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
