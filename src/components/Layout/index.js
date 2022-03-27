import { Outlet } from 'react-router-dom';

import { SideBar } from "../SideBar"
import { NavBar } from "../NavBar"
import { Footer } from "../Footer"
import { ChatModal } from '../ChatModal';


export const Layout = () => {
    return (
        <>
            <SideBar />
            <NavBar />
            <Outlet />
            <ChatModal />
            <Footer />
        </>
    )
}
