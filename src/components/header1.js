import React, { useState } from "react";
import { Howl } from "howler";
import ReactPlayer from 'react-player';
import a1 from "./a1.wav";
import a2 from "./a2.wav";
import a3 from "./a3.wav";
import a4 from "./a4.wav";
import a5 from "./a5.wav";
import a6 from "./a6.wav";
import a7 from "./a7.wav";
import a8 from "./a8.wav";
import video from "./video1.mp4";
import "./app1.css"

const audioFiles = {
  a: new Howl({ src:a1 }),
  s: new Howl({ src:a2 }),
  d: new Howl({ src:a3 }),
  f:  new Howl({ src:a4 }),
  g: new Howl({ src:a5 }),
  h: new Howl({ src:a6 }),
  j: new Howl({ src:a7 }),
  k: new Howl({ src:a8 }),
  l: new Howl({ src:a1 }),
  
};

function Piano() {
    const [activeKey, setActiveKey] = useState(null);
  
    function handleKeyDown(event) {
      const key = event.key.toLowerCase();
      if (audioFiles[key]) {
        
        audioFiles[key].play();
        setActiveKey(key);
      }
    }
  
    function handleKeyUp() {
      setActiveKey(null);
    }
  
    return (
     <div className="total">
        <div className="background-video">
            <ReactPlayer
        url={video} 
        playing
        loop
        muted
        width="100%"
        height="100%"
      />
            </div>
        <div
        
        tabIndex="0"
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div style={{display:"flex",flexDirection:"column"}}>
        <div id="head">
           <p align="center">PIANO</p> 
        </div>
        <div id="buttons">
        <div id="white"
          style={{
           
            border: "1px solid white",
            width: activeKey === "a" ? "70px" : "50px",
            backgroundColor: activeKey === "a" ? "white" : "transparent",
          }}
          onClick={() => audioFiles["a"].play()}
        >A1</div>
       <div id="white"
          style={{
            width: activeKey === "a" ? "70px" : "50px",
            border: "1px solid white",
            backgroundColor: activeKey === "a" ? "white" : "transparent",
          }}
          onClick={() => audioFiles["a"].play()}
          >A2</div>
        <div id="white"
          style={{
            width: activeKey === "a" ? "70px" : "50px",
            border: "1px solid white",
            backgroundColor: activeKey === "a" ? "white" : "transparent",
            
          }}
          onClick={() => audioFiles["a"].play()}
          >A3</div>
          <div id="black"
          style={{
          
            width: activeKey === "s" ? "70px" : "50px",
            backgroundColor: activeKey === "s" ? "black" : "transparent",
          }}
          onClick={() => audioFiles["s"].play()}
          >B1</div>
           <div id="white"
          style={{
            width: activeKey === "d" ? "70px" : "50px",
            border: "1px solid white",
            backgroundColor: activeKey === "d" ? "white" : "transparent",
          }}
          onClick={() => audioFiles["d"].play()}
          >C1</div>
          <div id="white"
          style={{
            width: activeKey === "d" ? "70px" : "50px",
            border: "1px solid white",
            backgroundColor: activeKey === "d" ? "white" : "transparent",
          }}
          onClick={() => audioFiles["d"].play()}
          >C2</div>
          <div id="white"
          style={{
            width: activeKey === "d" ? "70px" : "50px",
            border: "1px solid white",
            backgroundColor: activeKey === "d" ? "white" : "transparent",
          }}
          onClick={() => audioFiles["d"].play()}
          >C3</div>
          <div id="black"
          style={{
          
            width: activeKey === "f" ? "70px" : "50px",
            backgroundColor: activeKey === "f" ? "black" : "transparent",
          }}
          onClick={() => audioFiles["f"].play()}
          >D1</div>
           <div id="white"
          style={{
            width: activeKey === "g" ? "70px" : "50px",
            border: "1px solid white",
            backgroundColor: activeKey === "g" ? "white" : "transparent",
          }}
          onClick={() => audioFiles["g"].play()}
          >E1</div>
          <div id="white"
          style={{
            width: activeKey === "g" ? "70px" : "50px",
            border: "1px solid white",
            backgroundColor: activeKey === "g" ? "white" : "transparent",
          }}
          onClick={() => audioFiles["g"].play()}
          >E2</div>
          <div id="white"
          style={{
            width: activeKey === "g" ? "70px" : "50px",
            border: "1px solid white",
            backgroundColor: activeKey === "g" ? "white" : "transparent",
          }}
          onClick={() => audioFiles["g"].play()}
          >E3</div>
          <div id="black"
          style={{
          
            width: activeKey === "h" ? "70px" : "50px",
            backgroundColor: activeKey === "h" ? "black" : "transparent",
          }}
          onClick={() => audioFiles["h"].play()}
          >F1</div>
           <div id="white"
          style={{
            width: activeKey === "j" ? "70px" : "50px",
            border: "1px solid white",
            backgroundColor: activeKey === "j" ? "white" : "transparent",
          }}
          onClick={() => audioFiles["j"].play()}
          >G1</div>
          <div id="white"
          style={{
            width: activeKey === "j" ? "70px" : "50px",
            border: "1px solid white",
            backgroundColor: activeKey === "j" ? "white" : "transparent",
          }}
          onClick={() => audioFiles["j"].play()}
          >G2</div>
          <div id="white"
          style={{
            width: activeKey === "j" ? "70px" : "50px",
            border: "1px solid white",
            backgroundColor: activeKey === "j" ? "white" : "transparent",
          }}
          onClick={() => audioFiles["j"].play()}
          >G3</div>
           <div id="black"
          style={{
          
            width: activeKey === "k" ? "70px" : "50px",
            backgroundColor: activeKey === "k" ? "black" : "transparent",
          }}
          onClick={() => audioFiles["k"].play()}
          >H1</div>
           <div id="white"
          style={{
            width: activeKey === "l" ? "70px" : "50px",
            border: "1px solid white",
            backgroundColor: activeKey === "l" ? "white" : "transparent",
          }}
          onClick={() => audioFiles["l"].play()}
          >I1</div>
             <div id="white"
          style={{
            width: activeKey === "l" ? "70px" : "50px",
            border: "1px solid white",
            backgroundColor: activeKey === "l" ? "white" : "transparent",
          }}
          onClick={() => audioFiles["l"].play()}
          >I2</div>
             <div id="white"
          style={{
            width: activeKey === "l" ? "70px" : "50px",
            border: "1px solid white",
            backgroundColor: activeKey === "l" ? "white" : "transparent",
          }}
          onClick={() => audioFiles["l"].play()}
          >I3</div>

       
      </div>
        </div>
        </div>
        
       
        

     </div>
       
      
      


    
  );
}
 export default Piano;