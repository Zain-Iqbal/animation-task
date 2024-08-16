import React from 'react';

import BannerSection from "./components/banner-section";
import HeaderSection from "./components/header-section";
import LineSection from "./components/line-section";
import LineSection2 from "./components/line-section2";
import AgencySection from "./components/agency-section";
import RethinkSection from "./components/rethink-section";
import AssimilatingSection from "./components/assimilating-section";
import GrowthSection from "./components/growth-section";
import ExploreSection from "./components/explore-section";

import './styles.scss'

const Home = () => {

    return <div className={'parent'}>
        <BannerSection/>
        <HeaderSection/>
        <AgencySection/>
        <LineSection/>
        <LineSection2/>
        <RethinkSection/>
        <AssimilatingSection/>
        <GrowthSection/>
       <ExploreSection/>
    </div>
}

export default Home

