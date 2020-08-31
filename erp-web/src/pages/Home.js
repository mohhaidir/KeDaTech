import React from 'react'
import { Navbar, About, Pricing, Contact, NewNavbar } from '../components'
import metrics from '../assets/img/undraw_metrics_gtu7.png'
import banner from '../assets/img/—Pngtree—blue banner. liquid background. isolated_4353010.png'

export default function Home () {
    return (
        <>
            {/* <Navbar /> */}
            < NewNavbar />
            <div className="container-home">
                <div className="text-home">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="container-home-bottom">
                    <div className="container-home-bottom-left">
                        <div className="container-home-bottom-left-text">"Excepteur sint occaecat cupidatat non proident"</div>
                        <img className="container-home-bottom-left-img" src={metrics}/>
                    </div>
                    <div className="container-home-bottom-right">
                        <img className="container-home-bottom-right-img" src={banner} />
                    </div>
                </div>
            </div>
            <div className="container-about" id="about">
                <About />
            </div>
            <div className="container-pricing" id="pricing">
                <Pricing />
            </div>
            {/* <div className="container-contact" id="contact">
                <Contact />
            </div> */}
        </>
    )
}