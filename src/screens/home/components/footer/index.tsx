import React from "react";

import './styles.scss'


const Footer = () => {

    const moveToTop = () => {
        const ref = document.querySelector('body')
        ref.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

    return <div className={'footer'}>
        <i className="fa-solid fa-chevron-up" onClick={moveToTop}/>
        <p>2024 &copy; Creo Global. All Rights Reserved</p>
        <i className="fa-solid fa-share-nodes"/>
    </div>
}

export default Footer
