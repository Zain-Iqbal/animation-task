import React, {useRef} from 'react';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import './styles.scss';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const AgencySection = () => {
    const container = useRef(null);

    useGSAP(
        () => {
            const timeLine = gsap.timeline({scrollTrigger: {
                    trigger: '.agency-section .line-container0',
                    start: 'top 40%',
                    end: 'bottom 70%',
                    scrub: 5,
                }})
            timeLine.from('.agency-section .inner-box1 h1', {
                y: -120,
                delay: 0.5,
                opacity:0.7
            });
        },
        {scope: container}
    );

    return <div ref={container}  className={'agency-section'}>

        <div className={'inner-box1'}>
            <h1>We are not another 360 agency</h1>
        </div>
        <div  className="line-container0">
            <div className="animated-line0"></div>
        </div>
    </div>
}

export default AgencySection
