import React from "react";

function Sdata(props){
    return(
        <>
            <div className='maindiv'>
              <div className='fdiv'>
                  <div className='sdiv'>
                      <img src={props.imglink} />
                  </div>
                  <div className='tdiv'>
                      <span>{props.head}</span><br></br>
                      <a href={props.link}>
                        <button>{props.btn}</button>
                      </a>
                  </div>
              </div>
            </div>
        </>
    );
  }

  export default Sdata;