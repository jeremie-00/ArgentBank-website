import logoHeader from '@assets/img/argentBankLogo.webp';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLogout} from '../redux/reducers/userSlice';
import { setResetToken } from '../redux/reducers/authSlice';

export default function Header() {

    const { userName } = useSelector((state) => state.user)
    const { isLoggedIn }= useSelector((state) => state.auth)
    
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(setResetToken())
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