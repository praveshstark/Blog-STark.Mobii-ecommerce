import React from 'react';
import { NavLink } from 'react-router-dom';
import ShopIcon from '@material-ui/icons/Shop';

const Card=(props)=>{
    return(
        <>
               <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={props.imgsrc} className="card-img-top" alt="..." />
                    </div>
                  
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text"><b>{props.dp}</b> <h6>{props.ap}</h6> {props.save}</p>
                        <p className="card-text"><small className="text-muted">{props.emi} </small></p>
                    <div className="row g-0">
                    <a className="btn btn-get-started1" href={props.link} target="_blank">
                    <ShopIcon /> Buy Now
                    </a>
                    
                    </div>
                    </div>
                    </div>
                </div>
                </div>
        </>
    );
};


export default Card;