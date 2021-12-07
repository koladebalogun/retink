import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



const AboutUs = () => {
    const tl = gsap.timeline();
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.to('body, .Content-container', 0, {css:{visibility:'visible'}});


        tl.from('.line span', 1.8, {
            y:100,
            ease: 'power4.out',
            delay:0.9,
            skewY:10,
            stagger:{
                amount:0.3
            },
        })
        tl.from('.line2 span', 1.8, {
            y:100,
            ease: 'power4.out',
            delay:-0.9,
            skewY:10,
            stagger:{
                amount:0.3
            },
        })
        .from('.Content-container__subtext1',1,{
            x:-20,
            opacity:0,
            ease: 'power3.easeOut',
            delay:0.1,
        })

        tl.from('.line3 span', 1.8, {
            y:100,
            ease: 'power4.out',
            delay:-0.9,
            skewY:10,
            stagger:{
                amount:0.3
            },
        })
        .from('.Content-container__subtext2',1,{
            x:-20,
            opacity:0,
            ease: 'power3.easeOut',
            delay:0.1,
        })

        tl.from('.line4 span', 1.8, {
            y:100,
            ease: 'power4.out',
            delay:-0.9,
            skewY:10,
            stagger:{
                amount:0.3
            },
        })
        .from('.Content-container__subtext3',1,{
            x:-20,
            opacity:0,
            ease: 'ease-in',
            delay:0.1,
            
        })

        tl.from('.line5 span', 1.8, {
            y:100,
            ease: 'power4.out',
            delay:-0.9,
            skewY:10,
            stagger:{
                amount:0.3
            },
        })
        .from('.Content-container__subtext4',1,{
            x:-20,
            opacity:0,
            ease: 'ease-in',
            delay:0.1,
            
        })

        tl.from('.line6 span', 1.8, {
            y:100,
            ease: 'power4.out',
            delay:-0.9,
            skewY:10,
            stagger:{
                amount:0.3
            },
        })
        .from('.Content-container__subtext5',1,{
            x:-20,
            opacity:0,
            ease: 'ease-in',
            delay:0.1,
            
        })

        tl.from('.line7 span', 1.8, {
            y:100,
            ease: 'power4.out',
            delay:-0.9,
            skewY:10,
            stagger:{
                amount:0.3
            },
        })
        .from('.Content-container__subtext6',1,{
            x:-20,
            opacity:0,
            ease: 'ease-in',
            delay:0.1,
            
        })
    },[])

    return ( 
        <div className="Content-container">
            <div className="Content-container__inner">
                <div className="Content-container__header">
                    <h1>
                        <div className="line">
                            <span>About us</span>
                        </div>
                    </h1>
                </div>
                
                <div className="Content-container__subheader">
                    <h2>
                        <div className="line2">
                            <span>Why Retink?</span>
                        </div>
                    </h2>
                    <div className="Content-container__subtext1"><p>We believe in building businesses through relationships inspired by your story. You’re our calling! We do what we do all because of you.</p></div>
                </div>
                <div className="Content-container__subheader">
                    <h2>
                        <div className="line3">
                            <span>Why We Do What We Do</span>
                        </div>
                    </h2>
                    <div className="Content-container__subtext2"><p>We want to give our customers the power to create content they love and promote their businesses for profitability. The passion for amazing quality content and the desire to create a platform for entrepreneurs and businesses of all sizes to easily create, manage, and access all kinds of content in one place led us here. That's why we are working very hard to provide quality content assets, management, processes, and tools needed to create content that will promote and grow your business effectively. At the core of our business is HUMAN INTEREST first, this is why all our content is human-centered and created with love.</p></div>
                </div>
                <div className="Content-container__subheader">
                    <h2>
                        <div className="line4">
                            <span>What’s to come?</span>
                        </div>
                    </h2>
                    <div className="Content-container__subtext3"><p>Build our first fully automated AI content studio to curate and create content for customers in real-time through live engagement as well as partnerships with big studios and agencies to create inspiring and big-budget content projects.</p></div>
                </div>
                <div className="Content-container__subheader">
                    <h2>
                        <div className="line5">
                            <span>Mission</span>
                        </div>
                    </h2>
                    <div className="Content-container__subtext4"><p>To ensure all small businesses get affordable quality content through innovative digital solutions</p></div>
                </div>
                <div className="Content-container__subheader">
                    <h2>
                        <div className="line6">
                            <span>Vision</span>
                        </div>
                    </h2>
                    <div className="Content-container__subtext5"><p>To become the Amazon of AI content creation</p></div>
                </div>
                <div className="Content-container__subheader">
                    <h2>
                        <div className="line7">
                            <span>Commitment Statement</span>
                        </div>
                    </h2>
                    <div className="Content-container__subtext6"><p>We are obsessed about helping businesses create their stories with content! This is what we love doing. It is our life!</p></div>
                </div>
            </div>
        </div>
     );
}
 
export default AboutUs;