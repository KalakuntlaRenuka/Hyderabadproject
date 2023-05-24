import React from 'react'
import Carousel from './Carousel'
export default function Places() {
  return ( 
    <body bgcolor="pink"> 

    <div className='places'><center>Places to Visit in Hyderabad</center></div>
    <Carousel Name="Shop" img1="/Gallery/mecca-masjid.jpg" img2="/Gallery/Charminar-1.jpg"/>
    <Carousel img1="/Gallery/mecca-masjid.jpg" Name="Malls" img2="/Gallery/2.jpeg"/>
    <Carousel img1="/Gallery/2.jpeg" Name="Temples" img2="/Gallery/mecca-masjid.jpg"/>
    </body>
  );
}
