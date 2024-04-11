import { Outlet } from 'react-router-dom';
import Header from "@layouts/header";
import Footer from "@layouts/footer";

export default function RootOutlet() {
    return <>
        <Header />
        <Outlet />
        <Footer />
    </>
}