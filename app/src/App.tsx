import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllRoutes from './routes';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App;
