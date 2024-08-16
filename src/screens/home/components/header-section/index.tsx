import {useRef} from 'react';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import './styles.scss';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const HeaderSection = () => {
    const container = useRef(null);

    useGSAP(
        () => {
            const timeLine = gsap.timeline({ scrollTrigger:{
                    trigger:'.header-section',
                    start: 'top 1%',
                    end:'bottom 40%',
                    scrub:3,
                }})
            timeLine.from('.header-section p span', {
                y:50,
                delay: 0.5,
                opacity:0,
                scale:0.5,
                stagger:0.3,
            });
        },
        {scope: container}
    );

    return <div ref={container} className={'header-section'}>
     <p>{("What is Creo?").split('').map((item, index) => {
         return <span key={`hed-$val${index}`}>{item}</span>
     }) }</p>
    </div>
}

export default HeaderSection
