import React from 'react';
import Card from './Card';
import Data1 from './Data1';
import web6 from '../src/images/l1.jpg';

const Latestmobile=()=>{
    return(
        <>
           <section id="header">
            <div className="container-fluid ">
            <div className='row'>
            
            <div className="col-10 mx-auto">
            <h1 className="best">LATEST DEALS</h1>
            <img src={web6} className="latest" alt="..." />
            <div className="row">

            {Data1.map((val,ind)=>{
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

export default Latestmobile;