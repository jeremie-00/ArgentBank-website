import Account from '@components/account'

import { useDispatch, useSelector } from 'react-redux';

import { userProfiles } from '../redux/actions/userProfile';
import { login } from '../redux/reducers/loginReducer';
import { userProfile, updateUserName } from '../redux/reducers/userReducer';
import { editName, exitEditName } from '../redux/reducers/editReducer';
import { useEffect } from 'react';
import { editUserName } from '../redux/actions/editUserName';


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
    const { firstName, lastName, userName } = useSelector((state) => state.user)
    const edit = useSelector((state) => state.edit.editName)
    const token = useSelector((state) => state.auth.token)
    

    useEffect(() => {
        dispatch(userProfiles({ token: token }))
            .then((response) => {
                dispatch(login(response.payload.body.userName))
                dispatch(userProfile(response.payload))
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération du profil utilisateur :", error.message)
            });
    }, [dispatch, token])

    const handleEditName = () => {
        dispatch(editName())
    }
    const handleExitEdit = () => {
        dispatch(exitEditName())
    }
    const handleUpdateUserName = (e) => {
        e.preventDefault()
        const newUserName = e.target[0].value
        dispatch(updateUserName(newUserName))
        dispatch(editUserName({ token: token, newName: newUserName }))
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération du profil utilisateur :", error.message)
            });
    }

    return <main className="main bg-dark">
        <div className="header">


            {edit ? (
                <>
                    <h2>Edit User Info</h2>
                    <form onSubmit={handleUpdateUserName}>
                        <label htmlFor="userName">User Name</label>
                        <input type="text" placeholder={userName} />
                        <label htmlFor="firstName">First Name </label>
                        <input type="text" placeholder={firstName} readOnly />
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" placeholder={lastName} readOnly />

                        <button className="edit-button" type='submit'>Save</button>
                        <button className="edit-button" onClick={handleExitEdit}>Exit Edit</button>
                    </form>
                </>
            ) : (
                <>
                    <h1>Welcome back<br />{userName}</h1>
                    <button className="edit-button" onClick={handleEditName}>Edit Name</button>
                </>
            )}

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