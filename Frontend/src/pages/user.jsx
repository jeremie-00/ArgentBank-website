import Account from '@components/account'

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsEdit, setUserName } from '../redux/reducers/userSlice';
import { fetchUserProfile, fetchUpdateUserName } from '../redux/actions/fetchAPI';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/spinner';
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
    const { firstName, lastName, userName, isLoggedIn, isEdit, isError, messageError } = useSelector((state) => state.user);
    const [newUserName, setNewUserName] = useState(userName);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            try {
                dispatch(fetchUserProfile());
            } catch (error) {
                throw new Error('Erreur lors de la récupération des données');
            }
        } else {
            navigate('/');
        }
    }, [isLoggedIn]);

    const handleEditName = (e) => {
        e.preventDefault();
        dispatch(setIsEdit());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            const actions = [setUserName(newUserName), fetchUpdateUserName(), setIsEdit()]
            actions.forEach((action) => {
                dispatch(action)
            })

        }
    };

    return <main className="main bg-dark">
        <div className="header">
            {isEdit ? (
                <>
                    <h2>Edit User Info</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="userName">User Name</label>
                        <input type="text" placeholder={userName} onChange={(e) => setNewUserName(e.target.value)} />
                        <label htmlFor="firstName">First Name </label>
                        <input type="text" placeholder={firstName} readOnly />
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" placeholder={lastName} readOnly />

                        <button className="edit-button" type='submit'>Save</button>
                        <button className="edit-button" onClick={handleEditName}>Exit Edit</button>
                    </form>
                </>
            ) : (
                <>
                    <>
                        <h1>Welcome back<br />{firstName} {lastName} !</h1>
                        <button className="edit-button" onClick={handleEditName}>Edit Name</button>

                    </>

                    {isError ? <div><br />{messageError}</div> : <></>}
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