import logoHeader from '@assets/img/argentBankLogo.webp';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/reducers/loginReducer';
import { clearToken } from '../redux/reducers/authReducer';
import { clearUserProfil } from '../redux/reducers/userReducer';

export default function Header() {

    const isLogin = useSelector((state) => state.login.isLoggedIn)
    const dispatch = useDispatch()
    console.log(isLogin)
    const handleLogout = () => {
        dispatch(logout())
        dispatch(clearToken())
        dispatch(clearUserProfil())
    };

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
            {!isLogin ? (
                <Link className='main-nav-item' to="/sign-in">
                    <i className="fa fa-user-circle"></i>
                    {' '}
                    Sign In
                </Link>
            ) : (
                <>
                    <Link className='main-nav-item' to="/">
                        <i className="fa fa-user-circle"></i>
                        {' '}
                        nom
                    </Link>
                    <Link className='main-nav-item' to="/" onClick={handleLogout}>
                        <i className="fa fa-sign-out"></i>
                        {' '}
                        Sign Out
                    </Link>
                </>
            )}

        </div>
    </nav>
}