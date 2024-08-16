import React, {useRef} from 'react';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import './styles.scss';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const LineSection = () => {
    const container = useRef(null);

    useGSAP(
        () => {
            const timeLine = gsap.timeline({
                scrollTrigger: {
                    trigger: '.line-container0',
                    start: 'top 10%',
                    end: 'bottom 60%',
                    scrub: 5,
                }
            })
            timeLine.from('.inner-box1 h1', {
                x: 100,
                delay: 0.5,
                opacity:0.7
            });
        },
        {scope: container}
    );

    return <div ref={container} className={'line-section'}>
        <div className="line-container0">
            <div className="animated-line0"></div>
        </div>
        <div className={'inner-box1'}>
            <h1>But rather a mindset</h1>
            <div className="line-container">
                <div className="animated-line"></div>
            </div>
        </div>
        <div className="line-container2">
            <div className="animated-line2"></div>
        </div>
    </div>
}

export default LineSection
