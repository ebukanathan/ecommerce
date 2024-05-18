import Allproduct from "./components/Nav/Allproduct/Allproduct.jsx";
import Cartcard from "./components/Nav/Cartcard/Cartcard.jsx";
import Categories from "./components/Nav/Categories/Categories.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Context from "./assets/Context/Cartcontext.jsx";
import CartPage from "./Pages/Cart/CartPage.jsx";
// import Productcard from "./components/Nav/Productcard/Productcard.jsx";

function App() {
  return (
    <div>
      <Context>
        <Nav />
        <Categories />
        {/* <Productcard /> */}
        <Allproduct />
        <CartPage />
      </Context>
    </div>
  );
}

export default App;
