import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home'

function AppRouter() {
    let location = useLocation()
    return (
        <>

            <Routes location={location} key={location.pathname}>
                <Route exact={true} path="/" element={<Home />} />


            </Routes>
        </>
    )
}

export default AppRouter