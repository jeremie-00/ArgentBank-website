import logoHeader from '@assets/img/argentBankLogo.webp';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/reducers/loginReducer';
import { clearUserProfil } from '../redux/reducers/userReducer';
import { exitEditName } from '../redux/reducers/editReducer';

export default function Header() {

    const isLoggedIn = useSelector((state) => state.login.isLoggedIn)
    const name = useSelector((state) => state.user.userName)

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
        dispatch(clearUserProfil())
        dispatch(exitEditName())
    }

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
            {!isLoggedIn ? (
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
                        {name}
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