import React, {useRef} from 'react';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Footer from '../footer';

import './styles.scss';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const ExploreSection = () => {
    const container = useRef(null);

    useGSAP(
        () => {
            const timeLine = gsap.timeline({ scrollTrigger:{
                    trigger:'.explore-section .inner-box',
                    start: 'top 50%',
                    end:'bottom 80%',
                    scrub:3,
                }})
            timeLine.from('.inner-box span', {
                y:50,
                delay: 0.5,
                opacity:0,
                scale:0.5,
                stagger:0.5,
            });
        },
        {scope: container}
    );

    return <div ref={container} className={'explore-section'}>
        <div className={'inner-box'}>
            <h1>{("Rethinking require CREO").split('').map(item => {
                return <span>{item}</span>
            })}</h1>
            <div className={'explore-button'}>Explore <i className="fa-solid fa-list"/></div>
        </div>

        <Footer/>
    </div>
}

export default ExploreSection
