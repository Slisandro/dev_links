import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
