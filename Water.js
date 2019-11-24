import React, {Component} from 'react';
import First from './First';
import Navbar from './Navbar'
import waterdrop from './waterdrop.jpg';
import './App.css';

class Water extends Component {
    render () {
        return (
            <div>
                <div className = "firsthead">
                    <First />
                </div>

                <div className = "section">
                <div className="main">
                    <font size="18">
                        <b>Scientists Show That Water Has Memory.</b>
                    </font>
                        <img src={waterdrop} alt = "Water Memmory" />
                        <p>
                              A new groundbreaking discovery has been made within the most basic of resources. Scientists have just discovered what they have called
         “The Discovery of The Millennium”, and a huge revelation in human consciousness. Scientists from Germany now believe that water has a memory, 
          meaning that what once was seen as a simple commodity has now been closely examined to reveal a scientific revelation, uncovering 
         a mind-blowing truth.By examining innmdividual drops of water at an incredibly high magnification, scientists were able to physically see that each 
         droplet of water has its own individual microscopic pattern, each distinguishable from the next and uniquely beautiful.</p><p>
         A scientific experiment was carried out whereby a group of students were all encouraged to obtain one drop of water from the same body of water,
        all at the same time. Through close examination of the individual droplets, it was seen that each produced different images.
         A second experiment was then carried out where a real flower was placed into a body of water, and after a while a sample droplet of the
         water was taken out for examination. The resulted produced a mesmerising pattern when hugely magnified, but all of the droplets of this water looked very similar.
        When the same experiment was done with a different species of flower,the magnified droplet looked completely different, 
       thereby determining that a particular flower is evident in each droplet of water.</p><p>
       Through this discovery which shows that water has a memory, according to scientists, a new perception of water can be formed. 
       The German scientists believe that as water travels it picks up and stores information from all of the places that it has travelled through,
         which can thereby connect people to a lot of different places and sources of information when they drink this water, depending on the journey that it has been on.
        This has even been compared to the human body, of which each is incredibly unique and has an individual DNA unlike any other. 
        Whilst the human body is made up of 70% water, conclusions could be drawn from these new discoveries that human tears can hold a unique memory of 
        an individual being, through the body’s store of water hosting a complete store of information that is linked to individual experience.
       Suggesting that everyone is globally connected by the water in the human body which travels through ongoing journeys, whereby information along the way is always stored.
                                  </p>  
                            </div>
                     </div>   
                    
             <div className="nav">
                 <Navbar />
                 </div>
            </div>


        );
    }
}

export default Water;
        