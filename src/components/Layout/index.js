import { useState } from 'react'

import { Outlet } from 'react-router-dom'

import SideBar from "../SideBar"
import NavBar from "../NavBar"
import { Footer } from "../Footer"
import { ChatModal } from '../ChatModal'


export const Layout = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
            <Outlet />
            <ChatModal />
            <Footer />
        </>
    )
}
