import CircleType from "circletype";
import { useEffect } from "react";
import { TweenMax } from "gsap/gsap-core";
import $ from 'jquery';
import { TimelineLite } from "gsap/gsap-core";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {

    useEffect(()=>{
        // new CircleType(
        // document.getElementById('rotate')).radius(80);
        
        $(document).ready(function() {
            TweenMax.set('.project-preview1', {width:0});

            $(document)
            .on("mouseover", ".nav-item", function(evt) {
                let tl = new TimelineLite();
                tl.to($('.project-preview1'), 1, {
                    width:'600px',
                    ease:" Expo.easeInOut"
                });
            }).on('mouseout', '.nav-item', function(evt){
                let tl = new TimelineLite();
                tl.to($('.project-preview1'), 0.5,{
                    width:0,
                    ease: "Expo.easeInOut"
                });
            });

            $(document).ready(function() {
                TweenMax.set('.project-preview2', {width:0});
        
                $(document)
                .on("mouseover", ".item2", function(evt) {
                    let t1 = new TimelineLite();
                    t1.to($('.project-preview2'), 1, {
                        width:'600px',
                        ease:" Expo.easeInOut"
                    });
                }).on('mouseout', '.item2', function(evt){
                    let t1 = new TimelineLite();
                    t1.to($('.project-preview2'), 0.5,{
                        width:0,
                        ease: "Expo.easeInOut"
                    });
                })
            });

            $(document).ready(function() {
                TweenMax.set('.project-preview3', {width:0});
        
                $(document)
                .on("mouseover", ".item3", function(evt) {
                    let t1 = new TimelineLite();
                    t1.to($('.project-preview3'), 1, {
                        width:'600px',
                        ease:" Expo.easeInOut"
                    });
                }).on('mouseout', '.item3', function(evt){
                    let t1 = new TimelineLite();
                    t1.to($('.project-preview3'), 0.5,{
                        width:0,
                        ease: "Expo.easeInOut"
                    });
                })
            });
            $(document).ready(function() {
                TweenMax.set('.project-preview4', {width:0});
        
                $(document)
                .on("mouseover", ".item4", function(evt) {
                    let t1 = new TimelineLite();
                    t1.to($('.project-preview4'), 1, {
                        width:'600px',
                        ease:" Expo.easeInOut"
                    });
                }).on('mouseout', '.item4', function(evt){
                    let t1 = new TimelineLite();
                    t1.to($('.project-preview4'), 0.5,{
                        width:0,
                        ease: "Expo.easeInOut"
                    });
                })
            });
            $(document).ready(function() {
                TweenMax.set('.project-preview5', {width:0});
    
    
                $(document)
                .on("mouseover", ".item5", function(evt) {
                    let t1 = new TimelineLite();
                    t1.to($('.project-preview5'), 1, {
                        width:'600px',
                        ease:" Expo.easeInOut"
                    });
                }).on('mouseout', '.item5', function(evt){
                    let t1 = new TimelineLite();
                    t1.to($('.project-preview5'), 0.5,{
                        width:0,
                        ease: "Expo.easeInOut"
                    });
                })
            });
            gsap.utils.toArray('.section').forEach(section=>{
                ScrollTrigger.create({
                    trigger: section,
                    start: 'top top',
                    pin: true,
                    pinSpacing: false,
                    ease: 'Power3.inOut'
        
                })
            });

            
            
        });

        new CircleType(
        document.getElementById('rotated')).radius(80);
        
        new CircleType(
        document.getElementById('rotates')).radius(80);

        new CircleType(
        document.getElementById('circle')).radius(80);

        new CircleType(
        document.getElementById('spin')).radius(80);
        
        new CircleType(
        document.getElementById('spins')).radius(80);
    });
    return (
        <> 
            <div className="section section1-container">
                <div className="nav-wrapper">
                    <div className="first-text">
                        <span id="circle">
                            HOVER OVER. HOVER OVER . HOVER OVER . HOVER OVER . HOVER OVER . HOVER OVER . HOVER OVER . HOVER OVER
                        </span>
                    </div>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <h1 className="nav-link nav-link-1">
                                <span data-text="EASY CREATION">EASY CREATION</span>
                            </h1>
                        </li>
                    </ul>
                    <div className="inner-text">
                        <h2>On-demand service. Just follow our <br/> 3 step process and we will take <br/> care of the rest!</h2>
                    </div>
                </div>
                <div className="project-preview-wrapper">
                    <div className="project-preview1"></div>
                </div>
                <div className="scroll">
                    <h3>
                        <span>scroll-down</span>
                    </h3>
                </div>
            </div>

            <div className="section section2-container">
                <div className="nav2-container">
                    <div className="second-text">
                        <span id="rotates">
                            HOVER OVER. HOVER OVER . HOVER OVER . HOVER OVER . HOVER OVER . HOVER OVER . HOVER OVER . HOVER OVER
                        </span>
                    </div>
                    <ul className="nav2-list">
                        <li className="item2">
                        <h1 className="nav-link nav-link-2">
                            <span data-text="FAST">FAST</span>
                        </h1>
                        </li>
                    </ul>
                    <div className="inner-text2">
                        <h2>If your task is urgent, we will take care of it and make it our priority with our less than 24 hours service.</h2>
                    </div>
                    <div className="project-preview-wrapper2">
                        <div className="project-preview2"></div>
                    </div>
                    <div className="scroll2">
                        <h3>
                            <span>scroll-down</span>
                        </h3>
                    </div>
                </div>
            </div>

            <div className="section section3-container">
                <div className="nav3-container">
                    <div className="third-text">
                        <span id="rotated">
                            HOVER OVER. HOVER OVER . HOVER OVER . HOVER OVER . HOVER OVER . HOVER OVER . HOVER OVER . HOVER OVER
                        </span>
                    </div>
                    <ul className="nav3-list">
                        <li className="item3">
                            <h1 className="nav-link nav-link-3">
                                <span data-text="INCREDIBLE-AI">INCREDIBLE-AI</span>
                            </h1>
                        </li>
                    </ul>
                    <div className="inner-text3">
                        <h2>Customized content for your <br/> business is made possible with AI <br/> support, which makes it easy for you to select, create and share your content online with secure backups in the cloud.</h2>
                    </div>
                    <div className="project-preview-wrapper3">
                        <div className="project-preview3"></div>
                    </div>
                    <div className="scroll3">
                        <h3>
                            <span>scroll-down</span>
                        </h3>
                    </div>
                </div>
            </div>

            <div className="section section4-container">
                <div className="nav4-container">
                    <div className="fourth-text">
                        <span id="spin">
                            HOVER OVER. HOVER OVER . HOVER OVER . HOVER OVER . HOVER OVER . HOVER OVER . HOVER OVER . HOVER OVER
                        </span>
                    </div>
                    <ul className="nav4-list">
                        <li className="item4">
                            <h1 className="nav-link nav-link-4">
                                <span data-text="AFFORDABLE">AFFORDABLE</span>
                            </h1>
                        </li>
                    </ul>
                    <div className="inner-text4">
                        <h2>You set your price with no hidden cost. We offer you more for less.</h2>
                    </div>
                    <div className="project-preview-wrapper4">
                        <div className="project-preview4"></div>
                    </div>
                    <div className="scroll4">
                        <h3>
                            <span>scroll-down</span>
                        </h3>
                    </div>
                </div>
            </div>

            <div className="section section5-container">
                <div className="nav5-container">
                    <div className="fifth-text">
                        <span id="spins">
                            HOVER OVER. HOVER OVER . HOVER OVER . HOVER OVER . HOVER OVER . HOVER OVER . HOVER OVER . HOVER OVER
                        </span>
                    </div>
                    <ul className="nav5-list">
                        <li className="item5">
                            <h1 className="nav-link nav-link-5">
                                <span data-text="QUALITY SUPPORT">QUALITY SUPPORT</span>
                            </h1>
                        </li>
                    </ul>
                    <div className="inner-text5">
                        <h2>All content created and delivered go through standard Content QC Test Process to ensure you get the best quality for less price.</h2>
                    </div>
                    <div className="project-preview-wrapper5">
                        <div className="project-preview5"></div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Services;