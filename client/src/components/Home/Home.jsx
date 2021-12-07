import React, { useEffect } from 'react';
import gsap from 'gsap';

import logo from '../../asset/logo.png'

const Home = () => {
    const bannerTl = gsap.timeline()


    useEffect(() => {
        gsap.to('.Home-Banner__container', 0, {css: {visibility: "visible"}});

        bannerTl.from(['#banner-Bg-Add, #banner-Bg-Addition, #banner-bg'],{
            duration:1.2,
            width:0,
            skewX:4,
            ease:'power3.inOut',
            stagger:{
                amount:0.2
            }
        })

        .to('.Home-Banner__content__inner',{
            delay:-0.4,
            opacity:1,
            y: 80,
            duration: .8,
            ease: "Power3.out",
            stagger:{
              amount:0.2
            }
        })

        .from('.Home-Banner__content__header, .Home-Banner__content__subcontent', {
            delay:-0.4,
            opacity:0,
            y: 80,
            duration: .8,
            ease: "Power3.out",
            stagger:{
              amount:0.4
            }
        })

        .from('.Home-Banner__content__image', {
            delay:0.3,
            opacity:0,
            x: 80,
            duration: .8,
            ease: "Power3.out",
            stagger:{
              amount:0.4
            }
        })

        .from('.Home-Banner__subtext1, .Home-Banner__subtext2', {
            delay:0.3,
            opacity:0,
            y: -60,
            duration: .8,
            ease: "Power3.out",
            stagger:{
              amount:0.5
            }
        })

        .from('.ellipse1, .ellipse2, .ellipse3, .ellipse4, .ellipse5, .ellipse6, .ellipse7, .ellipse8', {
            delay:0.4,
            opacity:0,
            y: -60,
            duration: .8,
            ease: "Power3.out",
            stagger:{
              amount:0.5
            }
        })

    }, [])

    return ( 
        <div className="Home-Banner__container">
            <div className="bannerBgAdd" id='banner-Bg-Add'></div>
            <div className="bannerAdditionBg" id="banner-Bg-Addition"></div>
            <div className="bannerBg" id="banner-bg"></div>
            <div className="Home-Banner__content">
                <div className="Home-Banner__content__inner">
                    <div className="ellipse1"></div>
                    <div className="one">
                        <div className="Home-Banner__content__header">
                            <h1>What are you looking for?</h1>
                        </div>
                        <div className="Home-Banner__content__subcontent">
                            <h3>Help me create a Marketing Plan!</h3>
                            <p>The artic ocean freezes every winter and much<br/>of the sea-ice then thaws every summer and that</p>
                        </div>
                        <div className="ellipse2"></div>
                        <div className="ellipse3"></div>
                        <div className="Home-Banner__content__subcontent">
                            <h3>I know what i'm looking for.</h3>
                            <p>The artic ocean freezes every winter and much<br/>of the sea-ice then thaws every summer and that</p>
                        </div>
                    </div>

                    <div className="ellipse4"></div>
                    
                    <div className="Home-Banner__content__image">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="ellipse5"></div>
                    <div className="ellipse6"></div>
                    <div className="ellipse7"></div>
                    <div className="two">
                        <div className="ellipse8"></div>
                        <div className="Home-Banner__subtext1">
                            <p><strong>Hi there!</strong> Need help in creating a<br/> marketing plan for your business? I<br/> can help you create one using<br/> <strong>Retin AI engine.</strong></p>
                        </div>
                        <div className="Home-Banner__subtext2">
                            <p>Click on the options<br/> to get started</p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
     );
}
 
export default Home;