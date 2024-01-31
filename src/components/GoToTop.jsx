// useEffect ka use krain gy jo her bar scroll hony per monitor krta rahy ga k kab hamain button dikhana hai kab nahi dikhana hai.
// jab 175px se nechy ay ga scroll tu button show hoga werna hide rahy ga.
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa"


const GoToTop = () => {

    const [visible, setVisible] = useState(false)

    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }

    const listenToScroll = () => {

        let heightToHidden = 175; // yah 175px hai oper se jab etna scroll down hoga tu button show hojy ga
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    

    if (winScroll > heightToHidden) {
        setVisible(true)
    } else {
        setVisible(false)
    }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
    }, [])


    return (
        <>
        {visible ? 
            <div className="goToHome-container">
                <div className='top-btn' onClick={goToBtn}>
                        <FaArrowUp className="icon-goToTop" />
                </div>
            </div>
           : null}
        </>

    )
}

export default GoToTop