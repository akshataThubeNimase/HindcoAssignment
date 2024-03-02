import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
import Other from "./Pages/Other";
import Products from "./Pages/Products";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
          <Header></Header>
         
    <Routes>
      <Route path="/HindcoAssignment" element={<Home/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/other" element={<Other/>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
