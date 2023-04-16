import React from "react";

import SlidingBrands from "../Components/SlidingBrands";
import CompeteHero from "../Components/CompeteHero";
import OurNumbers from "../Components/OurNumbers";

function Compete(){
    return(
        <div className="compete">
            <CompeteHero/>
            <SlidingBrands small="Compete Now!" title="And join top Companies"/>
            <OurNumbers/>
        </div>
    )
}

export default Compete;