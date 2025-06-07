import "../Footer/Footer.css";
import Instagram from "../Footer/instagram.svg";
import Facebook from "../Footer/facebook.svg";
import Twitter from "../Footer/twitter.svg";
import LogoFooter from "../Footer/logo-footer.svg";

const Footer = () => {
  return (
    <section className="footerSection py-5 px-3 mx-auto">
      <footer className="grid justify-content-center gap-4 mx-auto">
        <div className="col-12 md:col-4">
          <img
            src={LogoFooter}
            alt="Logo Digital Store"
            className="logoFooter mb-3"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nobis
            iusto? Eius impedit, hic, alias omnis placeat quidem veniam
            inventore doloremque quo velit fugit id quis nemo minus, aperiam
            cumque.
          </p>
          <div className="icons flex gap-5 mt-6">
            <img src={Facebook} alt="ícone Facebook" />
            <img src={Instagram} alt="ícone Instagram" />
            <img src={Twitter} alt="ícone Twitter" />
          </div>
        </div>
        <div className="col-12 md:col-2">
          <h5>Informação</h5>
          <ul>
            <li>
              <a href="#">Sobre Drip Store</a>
            </li>
            <li>
              <a href="#">Segurança</a>
            </li>
            <li>
              <a href="#">Wishlist</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Trabalhe Conosco</a>
            </li>
            <li>
              <a href="#">Meus Pedidos</a>
            </li>
          </ul>
        </div>
        <div className="col-12 md:col-2">
          <h5>Categorias</h5>
          <ul>
            <li>
              <a href="#">Camisetas</a>
            </li>
            <li>
              <a href="#">Calças</a>
            </li>
            <li>
              <a href="#">Bonés</a>
            </li>
            <li>
              <a href="#">Headphones</a>
            </li>
            <li>
              <a href="#">Tênis</a>
            </li>
          </ul>
        </div>
        <div className="col-12 md:col-3">
          <h5>Contato</h5>
          <ul>
            <li>
                Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE -
                60150-161
            </li>
            <li>
              <a href="#">(85) 3051-3411</a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="text-center mt-5">
        <p className="copyright">
          © 2025 Digital College. Todos os direitos reservados.
        </p>
      </div>
    </section>
  );
};

export default Footer;
