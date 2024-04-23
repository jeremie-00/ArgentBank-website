import logoHeader from '@assets/img/argentBankLogo.webp';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLogout } from '../redux/reducers/userSlice';

export default function Header() {

    const {isLoggedIn, userName} = useSelector((state) => state.user)
    

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(setLogout())
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
                        {userName}
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