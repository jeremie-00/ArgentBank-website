import Account from '@components/account'
import { userProfiles } from '../redux/actions/userProfile';
import { login } from '../redux/reducers/loginReducer';
import { userProfile } from '../redux/reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';


export default function User() {

    const accountData = [
        {
            title: "Argent Bank Checking (x8349)",
            amount: "$2,082.79",
            description: "Available Balance",
        },
        {
            title: "Argent Bank Savings (x6712)",
            amount: "$10,928.42",
            description: "Available Balance",
        },
        {
            title: "Argent Bank Credit Card (x8349)",
            amount: "$184.30",
            description: "Current Balance",
        }
    ]

    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.token)
    const userData = () => {
        dispatch(userProfiles({ token: token }))
            .then((response) => {

                dispatch(login(response.payload.body.userName))
                dispatch(userProfile(response.payload))
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération du profil utilisateur :", error.message);
            });
    };
    userData()

    const name = useSelector((state) => state.user.userName)

    return <main className="main bg-dark">
        <div className="header">
            <h1>Welcome back<br />{name}</h1>
            <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>

        {accountData.map((account, index) => (
            <Account
                key={index}
                title={account.title}
                amount={account.amount}
                description={account.description}
            />
        ))}
    </main>
}