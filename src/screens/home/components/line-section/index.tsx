import {useRef} from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

import './styles.scss';

const HeaderSection = () => {
    const container = useRef(null);

    useGSAP(
        () => {
                const timeLine = gsap.timeline({
                scrollTrigger:{
                    trigger:'.header-section',
                    start: 'top 30%',
                    markers:true,
                    end:'bottom 20%',
                    scrub:5,
                },
            })
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
     <p>{("What is Creo?").split('').map(item => {
         return <span>{item}</span>
     }) }</p>
    </div>
}

export default HeaderSection
