import React, {useRef} from 'react';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import './styles.scss';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const RethinkSection = () => {
    const container = useRef(null);

    useGSAP(
        () => {
            const timeLine = gsap.timeline({
                scrollTrigger: {
                    trigger: '.rethink-section .inner-box',
                    start: 'top 70%',
                    end: 'bottom 20%',
                    scrub: 5,
                }
            })
            timeLine.from('.v1', {
                delay: 0.5,
                display: 'none',
                opacity: 0.5,
                x: 10
            });
            timeLine.from('.v2', {
                delay: 2,
            });
        },
        {scope: container}
    );

    return <div ref={container} className={'rethink-section'}>
        <div className={'inner-box'}>
            <h1 className={'val-al'}>To&nbsp;&nbsp; <span className={'v1'}>re</span><span className={'v2'}>think </span>
                <span id="cursor"/></h1>
        </div>

    </div>
}

export default RethinkSection
