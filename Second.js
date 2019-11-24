import React, {Component} from 'react';
import First from './First';
import Navbar from './Navbar'
import Mind from './mindful.jpeg';
import './App.css';

class Second extends Component {
    render () {
        return (
            <div>
                <div className = "firsthead">
                    <First />
                </div>

                <div className = "section">
                <div className="main">
                    <font size="18">
                        <b>The Importance of Mindfulness.</b>
                    </font>
             
                <img src={Mind} alt = "Water Memmory" />
                        <p>
                        Meditation, or mindfulness practices, have become a well-accepted way within
                        conventional medicine to maintain mental and physical health. In a medical establishment that generally relies on drugs to combat health problems new insights into the physical and mental health benefits of mindfulness have now been gleamed from many scientific studies.
              Studies funded by the National Institute of Health (NIH) in the United States have found links between mindfulness meditation and measurable changes in the brain regions involved in memory, learning and emotion, as well that mindfulness practices may reduce anxiety and hostility among urban youth and lead to reduced stress, fewer fights and better relationships.
 Mindfulness practice is not something that is done for 15 minutes each day—rather.</p><p>
it is a technique that is practiced throughout the day, during even the most seemingly trivial activities. Mindfulness as a practice is simply bringing one’s attention to the present moment and watching how one’s mind—your emotions and thoughts—responds to each situation.
By being mindful of one’s state, patterns of negative responses that lead to unhealthy behavior can be recognized and brought into full cognizance. With this kind of awareness, how to respond to a situation becomes a choice, and not reflex.
</p><p>In traditional meditation practices, such as the Bon Buddhist tradition of
 Tibet, this kind of mindfulness is used, among other ends, to reduce the tendency for 
 “grasping and aversion” that arises from judging a situation and being “swept away” by 
 unexamined emotions and thoughts towards that situation.
 When such tendencies become dominant it is clearly unhealthy to the mind and body, as anxiety, anger, and depression initiate changes down to the physiological level. With mindfulness however, anxiety, anger, and depression become at most fleeting emotional experiences that dissipate as awareness is brought into the present moment and each situation is approached as a new lesson about oneself (mindfulness).

 </p><p>Dr. Margaret Chesney of the University of California, San Francisco who studies how mindfulness affects health states that “what is valuable about mindfulness is that it is accessible and can be helpful to so many people.” Chesney also notes that as people start to learn how to be more mindful, it’s common and normal to realize how much your mind races and focuses on the past and future. 
You can just notice those thoughts and then return to the present moment. 
It is these little, regular steps that add up and start to create a more mindful, healthy life.
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

export default Second;
        