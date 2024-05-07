import Feature from "@components/feature"
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../redux/actions/fetchAPI';
export default function Home() {

    const featureData = [
        {
            srcImg: "../src/assets/img/icon-chat.webP",
            title: "You are our #1 priority",
            txt: `Need to talk to a representative? 
                  You can get in touch through our 24/7 
                  chat or through a phone call in less than 5 minutes.`
        },
        {
            srcImg: "../src/assets/img/icon-money.webP",
            title: "More savings means higher rates",
            txt: `The more you save with us,
                the higher your interest rate will be!`
        },
        {
            srcImg: "../src/assets/img/icon-security.webP",
            title: "Security you can trust",
            txt: `We use top of the line encryption to make sure your data and money
                is always safe.`
        }
    ]

    const dispatch = useDispatch()
    const { isLoggedIn } = useSelector((state) => state.auth)
    useEffect(() => {
        if (isLoggedIn) {
            try {
                dispatch(fetchUserProfile());
            } catch (error) {
                throw new Error('Erreur lors de la récupération des données');
            }
        }
    }, [isLoggedIn]);

    return <main>
        <div className="hero">
            <section className="hero-content">
                <h2 className="sr-only">Promoted Content</h2>
                <p className="subtitle">No fees.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="subtitle">High interest rates.</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
            </section>
        </div>
        <section className="features">
            <h2 className="sr-only">Features</h2>

            {featureData.map((feature, index) => (
                <Feature
                    key={index}
                    srcImg={feature.srcImg}
                    title={feature.title}
                    txt={feature.txt}
                />
            ))}

        </section>
    </main>
}

