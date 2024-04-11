import logoHeader from '@assets/img/argentBankLogo.webp';
import { Link } from 'react-router-dom';

export default function Header() {

    return <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
            <img
                className="main-nav-logo-image"
                src={logoHeader}
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
            <Link className='main-nav-item' to="/sign-in">
                <i className="fa fa-user-circle"></i>
                {' '}
                Sign In
            </Link>
        </div>
    </nav>
}