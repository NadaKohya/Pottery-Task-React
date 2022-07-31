import React from "react";
import { Albums } from "./Albums";
import { Details } from "./Details";
import { Slider } from "./Slider";
export function Home() {
    return (  
        <div>
        <Slider></Slider>
     <Albums id="albums"></Albums>
        </div>
    );
}
