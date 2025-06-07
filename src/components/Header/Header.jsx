import Logo from "../Logo/Logo";
import "../Header/Header.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import carrinho from "../Header/mini-cart.svg";
import { TabMenu } from "primereact/tabmenu";

const Header = () => {
  // const items = [
  //   { label: "Home" },
  //   { label: "Produtos" },
  //   { label: "Categorias" },
  //   { label: "Meus Pedidos" },
  // ];

  return (
    <section className="flex justify-content-center ">
      <header className="containerHeader pt-5">
        <div className="grid align-items-center justify-content-center gap-6 mb-3 pb-3">
          <div className="col-12 md:col-3">
            <Logo />
          </div>
          <div className="col-12 md:col-4">
            <InputText
              placeholder="Pesquisar produto..."
              className="inputSearch w-full"
            />
          </div>
          <div className="flex align-items-center gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="linkHeader"
            >
              Cadastre-se
            </a>
            <Button label="Entrar" className="btnHeader" />
            <img
              src={carrinho}
              alt="Carrinho de compras"
              className="carHeader"
            />
          </div>
        </div>
        <nav className="menu-container">
          <ul className="flex flex-row gap-5 list-none m-0 p-0 justify-content-center md:justify-content-start flex-wrap">
            <li>
              <a href="#" className="no-underline linksHeader">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="no-underline linksHeader">
                Produtos
              </a>
            </li>
            <li>
              <a href="#" className="no-underline linksHeader">
                Categorias
              </a>
            </li>
            <li>
              <a href="#" className="no-underline linksHeader">
                Meus Pedidos
              </a>
            </li>
          </ul>
        </nav>

        {/* <div className="card menu-container">
            <TabMenu model={items} />
        </div> */}
      </header>
    </section>
  );
};

export default Header;
