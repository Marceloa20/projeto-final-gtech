import { Link } from "react-router-dom";
import logotipo from '../Logo/logo-header.svg'
import '../Logo/Logo.css'

const Logo = () => {
    return ( 
        <Link to="/">
            <div className="p-d-flex p-ai-center">
                <img src={logotipo} alt="Logo Digital Store" className="logo" />
            </div>
        </Link>
     );
}
 
export default Logo;
