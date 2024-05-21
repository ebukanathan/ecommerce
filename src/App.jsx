import Home from "./Pages/Home/Home.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Context from "./assets/Context/Cartcontext.jsx";
import CartPage from "./Pages/Cart/CartPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Searchpage from "./Pages/Search/Searchpage.jsx";
// import Productcard from "./components/Nav/Productcard/Productcard.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Context>
          <Nav />
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/search/:type" element={<Searchpage />} />
          </Routes>
          <Searchpage />
        </Context>
      </BrowserRouter>
    </div>
  );
}

export default App;
