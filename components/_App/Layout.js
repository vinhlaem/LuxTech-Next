import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'
// import Sidebar from './Sidebar'
 
const Layout = ({ children }) => {
    return(
        <>
            
            
            {children}

            <GoTop scrollStepInPx="100" delayInMs="10.50" />

            {/* <Sidebar /> */}
        </>
    )
}

export default Layout