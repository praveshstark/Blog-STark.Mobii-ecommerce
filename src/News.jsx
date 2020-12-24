import React from 'react';
import web from '../src/images/m1.jpg';
import web1 from '../src/images/m2.jpg';
import web2 from '../src/images/m3.jpg';
import web3 from '../src/images/m4.jpg';
import web4 from '../src/images/m5a.jpg';
import web5 from '../src/images/m5.jpg';
import web6 from '../src/images/n.jpg';

const News=()=>{
    return(
        <>
            <section id="header">
            <div className="container-fluid ">
            <div className='row'>
            <div className="col-10 mx-auto">
            <h2 className="best1">MOBILE NEWS</h2>
            
            <hr className="line" />
            <div className='col'>
            <div className="card2 mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <img src={web} className="news" alt="..." />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">	Lava BeU With Dual Rear Cameras Debuts in India, Launch Planned Alongside 4 More Models on January 5</h5>
                    <p className="card-text">by Satyam, 22 December 2020</p>
                    
                </div>
                </div>
            </div>
            </div>

            <div className="card2 mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <img src={web1} className="news"  alt="..." />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">OnePlus Nord N10 5G Gets OxygenOS 10.5.8 Update With December Patch, Camera and Network Improvements</h5>
                    <p className="card-text">by Yash, 22 December 2020</p>
                    
                </div>
                </div>
            </div>
            </div>

            <div className="card2 mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <img src={web2} className="news" alt="..." />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">MediaTek Dimensity 1000+ SoC-Powered 5G Smartphones India Debut in Early 2021, Says Company</h5>
                    <p className="card-text">by Saksham, 21 December 2020</p>
                    
                </div>
                </div>
            </div>
            </div>

            <div className="card2 mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <img src={web3} className="news" alt="..." />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">	Huawei Mate 40 Pro+ Gets Highest DxOMark Smartphone Camera Rankings</h5>
                    <p className="card-text">by Chirag, 21 December 2020</p>
                    
                </div>
                </div>
            </div>
            </div>

            <div className="card2 mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <img src={web4} className="news"  alt="..." />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Mi 11 Launch Date Set for December 28, Geekbench Listing Suggests 12GB RAM</h5>
                    <p className="card-text">by Kamlesh, 21 December 2020</p>
                    
                </div>
                </div>
            </div>
            </div>

            <div class="card2 mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                <img src={web5} className="news"  alt="..." />
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">OnePlus 8T Concept Smartphone Unveiled With Colour-Shifting Back Panel That Recognises Gestures</h5>
                    <p class="card-text">by Rohit, 20 December 2020</p>
                    
                </div>
                </div>
            </div>
            </div>

            <img src={web6} className="news1" alt="..." />
            </div>
            
            </div>
            </div>
            </div>
            </section>
        </>
    );
};

export default News;