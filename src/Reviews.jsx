import React from 'react';
import web1 from '../src/images/r1.jpg';
import { NavLink } from 'react-router-dom';
import ShopIcon from '@material-ui/icons/Shop';

const Reviews=()=>{
    return(
        <>
            <section id="header">
            <div className="container-fluid ">
            <div className='row'>
            <div className="col-10 mx-auto">
            <h1 className="best">REVIEWS</h1>

            <div class="card1 mb-3" >
            <div class="row g-0">
                <div class="col-md-4">
                <img src={web1} className="rev" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title"><h1>Oppo Reno4 Z 5G review</h1></h5>
                    <p class="card-text">Oppo just announced the first three of the Reno5 family, and it's likely going to be a large family. How do we know? Well, there are a total of eight Reno4s in our database, and it's one of them that we'll be presenting to you today - the Reno4 Z 5G.
                    The most affordable of the 5G-enabled 4th-gen Renos, the Z 5G retails for €300 - that's less than half the Reno4 Pro 5G's official asking price and roughly two-thirds of the Reno4 5G's price tag.
                    The Reno4 Z 5G is powered by a Mediatek Dimensity 800 chipset instead of the Snapdragon 765Gs in the other two. Still, it's not really grounds for concern - a close relative to that SoC, the 800U we got to see recently, performed admirably. Another moderately polarizing bit could be the 6.57-inch LCD. The OLED lovers might scoff at the choice of panel technology, but this one does come with a 120Hz refresh rate. Which brings us to the next point - a 4,000mAh battery with a 120Hz LCD? Sounds a little troubling, but we'll see about that.
                    Three proper cameras and three sort-of cameras made their way to the Reno4 Z 5G. There's a 48MP primary unit on the back, joined by an 8MP ultra-wide, and then you get a 2MP macro module and a 2MP unit for depth sensing. Another one of those is keeping company to the 16MP selfie camera in a pill-shaped cutout in the display's top left corner.</p>
                    <h4>Oppo Reno4 Z 5G specs at a glance:</h4>
                    <ul>
                        <li>Body: 163.8x75.5x8.1mm, 184g; plastic frame, plastic back.</li>
                        <li>Display: 6.57" LTPS IPS LCD, 120Hz, 1080x2400px resolution, 20:9 aspect ratio, 401ppi.</li>
                        <li>Chipset: MediaTek MT6873V Dimensity 800 5G (7 nm): Octa-core (4x2.0 GHz Cortex-A76 & 4x2.0 GHz Cortex-A55); Mali-G57 MC4.</li>
                        <li>Memory: 128GB 8GB RAM; UFS 2.1.</li>
                        <li>OS/Software: Android 10, ColorOS 7.2.</li>
                        <li>Rear camera: Wide (main): 48 MP, f/1.7, 26mm, 1/2.0", 0.8µm, PDAF; Ultra wide angle: 8 MP, f/2.2, 119˚, 1/4.0", 1.12µm; Depth: 2x 2 MP, f/2.4.</li>
                        <li>Front camera: Wide (main): 16 MP, f/2.0, 26mm, 1/3.06", 1.0µm; Depth: 2 MP, f/2.4.</li>
                        <li>Video capture: Rear camera: 4K@30fps, 1080p@30fps, gyro-EIS; Front camera: 1080p@30fps.</li>
                        <li>Battery: 4000mAh; Fast charging 18W.</li>
                        <li>5G support: SA/NSA bands 1,3,5,7,8,20,28,38,40,41,77,78.</li>
                        <li>Misc: Fingerprint reader (side-mounted); NFC; 3.5mm jack.</li>
                    </ul>

                    <div className="row g-0">
                    <a className="btn btn-get-started1" href="https://www.oppo.com/en/smartphones/series-reno/reno4z-5g/" target="_blank" >
                    <ShopIcon /> Buy Now
                    </a>
                    </div>

                </div>
                </div>
                </div>
                </div>
            
            </div>
            </div>
            </div>
            </section>
        </>
    );
};

export default Reviews;