import React from 'react'
import { Outlet, Route, Routes } from "react-router-dom";
import Home from '../Componant/Home/Home';
import Header from '../Componant/Header/Header';
import Footer from '../Componant/Footer/Footer';
import Layout from '../Componant/Layout';
import WhiteListAddress from '../Componant/WhiteListAddress/WhiteListAddress'

function Public() {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Outlet />
                        </Layout>
                    }
                >
                    <Route index path="/" element={<Home />} />
                    <Route index path="/Header" element={<Header />} />
                    <Route index path="/Footer" element={<Footer />} />
                    <Route index path="/whitelistAddress" element={<WhiteListAddress/>} />
                    

                </Route>
                <Route
                    path="/"
                    element={
                        <Layout isFooterEnable={false}>
                            <Outlet />
                        </Layout>
                    }
                >

                </Route>
            </Routes>

        </div>
    )
}

export default Public
