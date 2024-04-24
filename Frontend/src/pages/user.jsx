import Account from '@components/account'

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsEdit, setUserName } from '../redux/reducers/userSlice';
import { fetchUserProfile, fetchUpdateUserName } from '../redux/actions/fetchAPI';

import Spinner from '@components/spinner';

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
    const { firstName, lastName, userName, isEdit, isErrorUser, messageErrorUser, isLoadingUser } = useSelector((state) => state.user);
    const { isLoggedIn } = useSelector((state) => state.auth)
    const [newUserName, setNewUserName] = useState(userName);

    useEffect(() => {
        if (isLoggedIn) {
            try {
                dispatch(fetchUserProfile());
            } catch (error) {
                throw new Error('Erreur lors de la récupération des données');
            }
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
                <section className='sign-in-content'>
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h2>Edit User Info</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-wrapper">
                            <label htmlFor="userName">User Name</label>
                            <input type="text" onChange={(e) => setNewUserName(e.target.value)} required />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="firstName">First Name </label>
                            <input type="text" placeholder={firstName} readOnly />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" placeholder={lastName} readOnly />
                        </div>
                        <div className="input-wrapper">
                            <button className="edit-button" type='submit'>Save</button>
                        </div>
                        <div className="input-wrapper">
                            <button className="edit-button exit-edit" onClick={handleEditName}>Exit Edit</button>
                        </div>
                    </form>
                </section>
            ) : (
                <>
                    <>
                        <h1>Welcome back<br /> {isLoadingUser ? <Spinner sizeCategory="medium" /> : <> {firstName} {lastName} !</>}  </h1>
                        <button className="edit-button" onClick={handleEditName}>Edit Name</button>

                    </>


                    {isErrorUser ? <div><br />{messageErrorUser}</div> : <></>}
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