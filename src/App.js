import './App.css';
import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { ProductPage } from './components/ProductPage';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Search } from './components/Search';
import { Profile } from './components/Profile';
import { Cart } from './components/Cart';
import { ProductDescription } from './components/ProductDescription';

export const AppContext = createContext();

function App() {
  const client = new QueryClient();

  const [searchItem, setSearchItem] = useState("");
  
  return (
    <div className="App">
      <AppContext.Provider value={{searchItem, setSearchItem}}>
      <QueryClientProvider client={client}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/e-com" element={<Home/>} />
            <Route path="/all-products">
              <Route path=':prodkey' element={<ProductDescription/>} />
              <Route index element={<ProductPage/>} />
              </Route>
            <Route path="/search" element={<Search/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </Router>
      </QueryClientProvider>
      </AppContext.Provider>



      

    </div>
  );
}

export default App;
