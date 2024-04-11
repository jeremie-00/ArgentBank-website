import { Outlet } from 'react-router-dom'
import Header from "@layouts/header";

export default function RootOutlet() {
    return <>
        <Header />
        <Outlet />

    </>
}