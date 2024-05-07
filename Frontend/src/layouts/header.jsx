import logoHeader from '@assets/img/argentBankLogo.webp';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setResetUser } from '../redux/reducers/userSlice';
import { setResetToken } from '../redux/reducers/authSlice';

import Spinner from '@components/spinner';

export default function Header() {

    const { userName, isLoadingUser } = useSelector((state) => state.user)
    const { isLoggedIn } = useSelector((state) => state.auth)

    const dispatch = useDispatch()

    const handleLogout = () => {
        localStorage.removeItem("token")
        dispatch(setResetToken())
        dispatch(setResetUser())
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
        < div className='main-nav-items'>
            {!isLoggedIn ? (
                <NavLink className='main-nav-item' to="/sign-in">
                    <i className="fa fa-user-circle"></i>
                    {' '}
                    Sign In
                </NavLink>
            ) : (
                <>
                    <Link className='main-nav-item' to="/user">
                        <i className="fa fa-user-circle"></i>
                        {' '}
                        {isLoadingUser ? <Spinner sizeCategory="small" /> : <> {userName} </>}
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