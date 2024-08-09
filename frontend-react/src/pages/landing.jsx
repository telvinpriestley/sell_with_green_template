import React from 'react'

import Hero from "../components/hero1/hero";
import Mainservice from "../components/mainservice/mainservice";
import Aboutus from "../components/aboutus/aboutus";
import Whyus from '../components/whyus/whyus';
import Ourclients from '../components/ourclients/outclients';
import Services from '../components/services/services';
import Testconponent from '../components/test';
import Calltoacton from '../components/calltoaction/calltoaction';
import Portfolio from '../components/portfolio/portfolio';
import Team from '../components/team/team';
import ContactInfo from '../components/contact/contact';

export default function Landing({ setpath }) {
    setpath(true)
    return (
        <div>
            <Hero></Hero>
            <Testconponent></Testconponent>
            <Mainservice></Mainservice>
            <Aboutus></Aboutus>
            <Whyus></Whyus>
            <Ourclients></Ourclients>
            <Services></Services>
            <Calltoacton></Calltoacton>
            <Portfolio></Portfolio>
            <Team></Team>
            <ContactInfo></ContactInfo>

        </div>
    )
}
