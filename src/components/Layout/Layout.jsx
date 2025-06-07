// src/components/Layout.jsx
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import { Outlet } from 'react-router-dom'; // Esse Outlet vai mostrar o conteúdo da página atual

const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet /> {/* Aqui será renderizada a rota atual, como Home, Produtos etc. */}
      </main>
     <Footer />
    </>
  );
};

export default Layout;
