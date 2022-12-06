import './App.css';
import Admin from './pages/Admin';
import Public from './pages/Public';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() 
{
  return (
    <div className="App">
      <header className="App-header">
        <h1>Könyváruház</h1>
      </header>
      {/* ide kerüljön a navigáció és az article tag */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <footer>
      <p>Weinberger Péter</p>
    </footer>
    </div>
  );
}

export default App;
