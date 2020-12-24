import React from 'react';
import Card from './Card';
import Data from './Data';

//import web from '../src/images/m1.jpg';
//import { NavLink } from 'react-router-dom';
//import web1 from '../src/images/m2.jpg';
//import web2 from '../src/images/m3.jpg';
//import web3 from '../src/images/m4.jpg';
import web8 from '../src/images/d1.jpg';
import web7 from '../src/images/d.jpg';
//import ShopIcon from '@material-ui/icons/Shop';
//import LocalOfferIcon from '@material-ui/icons/LocalOffer';

const Bestdeals=()=>{
    return(
        <>
        
            <section id="header">
            <div className="container-fluid ">
            <div className='row'>
            
            <div className="col-10 mx-auto">
            <h1 className="best">BEST DEALS</h1>
            <img src={web7} className="deal" alt="..." />
            <img src={web8} className="deal1" alt="..." />
            <div className="row">

            {Data.map((val,ind)=>{
                        return <Card key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            dp={val.dp}
                            ap={val.ap}
                            save={val.save}
                            emi={val.emi}
                            link={val.link}
                        />
                    })}

            </div>
            </div>
            </div>
            </div>
            </section>
        </>
    );
};

export default Bestdeals;