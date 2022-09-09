import React from 'react'
import FooterComponent from '../Components/FooterComponent/FooterComponent'
import HeaderComponent from '../Components/HeaderComponent/HeaderComponent'
import Views from '../Views'

type Props = {}

const MainLayout = (props: Props) => {
    return (
        <>
            <HeaderComponent />
            <Views />
            <FooterComponent />
        </>
    )
}

export default MainLayout