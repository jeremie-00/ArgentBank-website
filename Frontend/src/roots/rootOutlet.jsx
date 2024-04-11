import { Outlet } from 'react-router-dom';
import Footer from "@layouts/footer";

export default function RootOutlet() {
    return <>
        <Outlet />
        <Footer />
    </>
}