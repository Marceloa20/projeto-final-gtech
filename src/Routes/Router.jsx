import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import ProductViewPage from './pages/ProductViewPage.jsx';
import ProductListingPage from './pages/ProductListingPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Layout fixo
    children: [
      { index: true, element: <HomePage /> },
      { path: 'produtos', element: <ProductListingPage /> },
      { path: 'produto/:id', element: <ProductViewPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
