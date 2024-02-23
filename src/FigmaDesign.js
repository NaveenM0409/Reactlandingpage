import React from 'react'
import './figmadesign.css';
import  vilas  from "./Image/Vert.png";
import kanaga from "./Image/Icon.png";



function FigmaDesign() {
  return (
    <div  className='content'>
    <div>
        <h1> Design and Build Your<br></br>Own Landing pages</h1>
         
        <p >Taylor Alison Swift (born December 13, 1989) is an American<br></br> singer-songwriter. Her versatile artistry, songwriting,<br></br> and entrepreneurship have influenced the music industry,<br></br> popular culture, and politics, and her <br></br>life is a subject of widespread media coverage.<br></br>Swift began professional songwriting at 14. <br></br></p>
    </div>      
    <div className='content-inner'>
       <img src={vilas} alt='mobile'></img>
    </div>      
    <div className='icons'>
        <img src={kanaga} alt='icon'></img>
    </div>


    
    
    </div>
  )
}

export default FigmaDesign