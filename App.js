import React, {Component} from 'react';
import First from './First';
import Navbar from './Navbar';
import Water from './Water';
import Second from './Second';
import Third from './Third';
import './App.css';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';



class App extends Component {
  render () {
    
    return ( 
      <Router>
        <Switch>
          <Route path="/" exact render= {() => {
           
           return (

      
        <div>
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Assignment 4</title>
              
              <div className = "firsthead">
                <First />   
              </div>
      
              
                <div className = "main">
                  <div className ="card1">
                   <div className = "transbox3">
                   <h4><i>Date: Oct 5, 2018</i></h4>
                        <h1><Link to = {{pathname: '/water'}}>Scientists Show That Water Has Memory</Link></h1>
                        <p>A new groundbreaking discovery has been made within the most basic of resources. 
                          Scientists have just discovered what they have called “The Discovery of The Millennium”, and a huge revelation in
                          human consciousness.Scientists from Germany now believe that water has a memory, meaning that what once was seen as
                          a npmsimple commodity has now been closely examined to reveal a scientific revelation, uncovering a mind-blowing truth.
                          By examining individual drops of water at an incredibly high magnification, scientists were able to physically
                          see that each droplet of water has its own individual microscopic pattern, each distinguishable from the next and uniquely beautiful.
                          A scientific experiment was carried out whereby a group of students were all encouraged to obtain one drop of 
                          water from the same body of water, all at the same time. Through close examination of the individual droplets,
                          it was seen that each produced different images.</p>
                      </div>
                    </div>
                    <br/>
                    <div className="card2">
                    <div className="transbox2">
                      <h4><i>Date: Jan 2, 2019</i></h4>
                      <h1><Link to = {{pathname: '/second'}}>The Importance of Mindfulness</Link></h1>
                      <p>Meditation, or mindfulness practices, have become a well-accepted way within conventional medicine to 
                        maintain mental and physical health. In a medical establishment that generally relies on drugs to combat
                        health problems new insights into the physical and mental health benefits of mindfulness have now been gleamed 
                        from many scientific studies.Studies funded by the National Institute of Health (NIH) in the United States
                        have found links between mindfulness meditation and measurable changes in the brain regions involved in memory, 
                        learning and emotion, as well that mindfulness practices may reduce anxiety and hostility among urban youth and 
                        lead to reduced stress, fewer fights and better relationships.</p>
                    </div>
                  </div>
                  <br/>
                  <div className="card3">
                    <div className="transbox1">
                      <font color="black">
                        <h4><i>Date: Aug 26, 2019 </i></h4>
                        <h1><Link to = {{pathname: '/third'}}> The Mathematics of Relationships, AI and Human Eco space</Link></h1>
                        <p>Forbes Magazine recently shed light on the fact that “there is a growing belief that the current understanding of 
                          science cannot wholly explain human life, mind, and consciousness, nor can it explain the nature and origin of life,
                          matter, the environment, the universe and reality“. It summarizes a podcast held by the Author Jayshree Pandya called 
                          Risk Roundup, where she discussed Category Theory for application in cyberspace, aquaspace, geospace and space (CAGS) with
                          Mathematical Physicist and Professor of Mathematics Dr. Baez.Beyond doubt, the human body is an open system, so physical 
                          laws that do require a closed system, are applicable only under certain conditions – a mathematical framework for open 
                          system could improve our future creations. New Technologies require a better understanding of communication in a collective
                          of entities and within its environment.</p>
                      </font>
                    </div>
                 </div>
                </div>
            
                <div className="nav">
                  <Navbar />
                </div> 
                
                
                </div>
            
      
       );
      }}/>
   
<Route exact path = '/water' component={Water} />
        <Route exact path = '/second' component={Second} />
        <Route exact path = '/third' component={Third} />
                       
      </Switch>
  </Router>
);
}
}

   

export default App;

