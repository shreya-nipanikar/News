import React, {Component} from 'react';
import First from './First';
import Navbar from './Navbar'
import Concen from './conc.jpg';
import './App.css';

class Third extends Component {
    render () {
        return (
            <div>
                <div className = "firsthead">
                    <First />
                </div>

                <div className = "section">
                <div className="main">
                    <font size="8">
                        <b>The Mathematics of Relationships, AI and Human.</b>
                    </font>
             
                <img src={Concen} alt = "Water Memmory" />
                        <p>
                        Forbes Magazine recently shed light on the fact that “there is a 
                        growing belief that the current understanding of science cannot wholly explain
                         human life, mind, and consciousness, nor can it explain the nature and origin
                          of life, matter, the environment, the universe and reality“.</p><p>
                           It summarizes a podcast held by the Author Jayshree Pandya called Risk 
                           Roundup, where she discussed Category Theory for application in cyberspace,
                            aquaspace, geospace and space (CAGS) with Mathematical Physicist and 
                            Professor of Mathematics Dr. Baez.</p><p>
Beyond doubt, the human body is an open system, so physical laws that do require a closed system,
 are applicable only under certain conditions – a mathematical framework for open system could improve our 
 future creations. New Technologies require a better understanding of communication in a 
 collective of entities and within its environment.</p><p>
“In any system, we are dealing with on Earth, it is always very fundamentally an open system –
 its constantly being affected in unpredictable ways by the outside world and it is also
  affecting the outside world in unpredictable ways.”
Professor (Dr.) John Carlos Baez University of California, Riverside</p><p>
“Based on the Mathematical Universe Hypothesis, the emerging reality is that we live in a relational
 reality. What does that mean? It means that the properties of the biosphere around us stem not from
  properties of its ultimate building blocks, but from the relations among these building blocks.</p><p>
   (…) self-organization is an obvious principle which is embedded in our description of the universe
    (…) If an individual being is seen as a single unit, what defines and determines our behaviour
     and relationships?” the article reads. You can find it here.
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

export default Third;
        