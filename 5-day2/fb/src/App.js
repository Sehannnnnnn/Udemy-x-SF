import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Auth from './routes/Auth';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth isLoggedIn={false}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
