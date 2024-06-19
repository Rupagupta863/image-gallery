import React, { useState } from "react"; 
import Sdata from './Sdata';
import Sarray from './Sarray';

<Sdata />

function App(){
    const [choice, setchoice] = useState("series");

    const changechoice = () => {
        (choice === "series") ? setchoice("movies") : setchoice("series");
    };

    function Mchoice(val){
    if(val.choice==choice){
        return(
            <Sdata 
            imglink={val.imglink}
            head={val.head}
            link={val.link}
            btn={val.btn}
            />
        );
    }
    else{

    }};
    return(
        <>
            <h1>List of best {choice} in 2022</h1>
            <label class="label">
                <div class="label-text">Series</div>
                <div class="toggle">
                    <input class="toggle-state" type="checkbox" name="check" value="check" onChange={changechoice} />
                    <div class="indicator"></div>
                </div>
                <div class="label-text">Movies</div>
            </label>
            <div className='box'>
                {Sarray.map(Mchoice)}
            </div>
        </>
    );
}

export default App;