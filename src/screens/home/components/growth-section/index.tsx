import React, {useRef} from 'react';

import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import './styles.scss';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const GrowthSection = () => {
    const container = useRef(null);

    useGSAP(
        () => {
            const timeLine = gsap.timeline({
                scrollTrigger: {
                    trigger: '.line-container6',
                    start: 'top 0%',
                    end: 'bottom 20%',
                    scrub: 5,
                }
            })
            timeLine.add('start')
                timeLine.to('.vertical-text .v1', {
                y: -100,
                delay: 0.5,
                opacity:0.7,
                    rotate:'-90deg'
            },'start');
            timeLine.to('.vertical-text .v2', {
                y: 100,
                delay: 0.5,
                opacity:0.7,
                rotate:'-90deg'
            },'start');
        },
        {scope: container}
    );

    return <div ref={container}  className={'growth-section'}>
        <div  className="line-container6">
            <div className="animated-line6"></div>
        </div>
        <div className={'inner-box'}>
            <h1>Leads to</h1>
            <div className={'vertical-text'}>
                <p className={'v1'}>Growth</p>
                <p className={'v2'}>Thinking</p>
            </div>
        </div>
        <div  className="line-container5">
            <div className="animated-line5"></div>
        </div>
    </div>
}

export default GrowthSection
