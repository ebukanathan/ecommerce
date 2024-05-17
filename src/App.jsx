import Allproduct from "./components/Nav/Allproduct/Allproduct.jsx";
import Cartcard from "./components/Nav/Cartcard/Cartcard.jsx";
import Categories from "./components/Nav/Categories/Categories.jsx";
import Nav from "./components/Nav/Nav.jsx";
// import Productcard from "./components/Nav/Productcard/Productcard.jsx";

function App() {
  return (
    <div>
      <Nav />
      <Categories />
      {/* <Productcard /> */}
      <Allproduct />
    </div>
  );
}

export default App;
