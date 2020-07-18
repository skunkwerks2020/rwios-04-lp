import React from "react";

const CardContainerTextOnly = (props) =>{
    return(
        <div className={props.className} >

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

export default CardContainerTextOnly;
