import React from "react";

const CardContainer = (props) =>{
    return(
        <div className={props.className} >
        <div className="small-div">
            <i className={props.className}></i>
            <img src={props.img} alt=''/>
        </div>

            <div className="big-div">
               <span className='c-intro__eyebrow'>
                {props.eyebrow}
               </span>

                <span className='div-title'>
                    {props.title}
                </span>
                <br/>
                <span>
                    {props.description}
                </span>
            </div>
        </div>
    )
}

export default CardContainer;
