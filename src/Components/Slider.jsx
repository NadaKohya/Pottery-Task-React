import React from "react";
import SwiftSlider from 'react-swift-slider'
export function Slider() {
    const data =  [
        {'src':'https://images.squarespace-cdn.com/content/v1/58df25dc6a4963762c660f5d/1514944517981-KWFDVIOVX6I7ISH9K6E8/process+2.JPG?format=2500w'},
        {'src':'https://images.squarespace-cdn.com/content/v1/58df25dc6a4963762c660f5d/1514944518492-I6QJY537SJAL170W01OL/trim+the+vase.jpg?format=2500w'},
        {'src':'https://images.squarespace-cdn.com/content/v1/58df25dc6a4963762c660f5d/1514867681302-EGDVDOE9KX4W9J0726ZQ/Gaya_Ceramic_process_handmade_guidelines.jpg?format=1500w'},
      ];
    return ( 
        <div>
        <SwiftSlider data={data}/>
        </div>
    );
}
