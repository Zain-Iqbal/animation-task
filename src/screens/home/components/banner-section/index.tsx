import {useRef} from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

// @ts-ignore
import banner from './banner.png';

import './styles.scss';


const BannerSection = () => {
    const container = useRef(null);

    useGSAP(
        () => {
            gsap.from('.banner-section .image', {
                x: 360,
                delay: 2,
                duration: 1,
                opacity: 0,
                scale: 0.5,
                markers: true,
                rotate: '10deg',
            });
        },
        {scope: container}
    );

    return <div ref={container} className={'banner-section'}>
        <img className={'image'} src={banner}/>
    </div>
}

export default BannerSection
