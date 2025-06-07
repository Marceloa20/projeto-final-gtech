import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./Pages/HomePage";
import ProductListingPage from "./Pages/ProductListingPage";
import ProductViewPage from "./Pages/ProductViewPage";

const App = () => {
  return ( 
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}/>
            <Route path="/visualizarProduto" element={<ProductViewPage />}/>
            <Route path="/listaProdutos" element={<ProductListingPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
   );
}
 
export default App;