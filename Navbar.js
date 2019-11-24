import React, {Component} from "react";
import './App.css';

import {
    Link,
} from 'react-router-dom';

class Navbar extends Component {

    state = {
        loading: true,
        person: null,
    }

    async componentDidMount() 
    {
        this.fetchUsers();
        this.timer = setInterval(() => this.fetchUsers(),5000);

    }

    async fetchUsers() {
       const url = "https://api.randomuser.me/";
       const response = await fetch(url);
       const data = await response.json();
       this.setState({person: data.results[0],loading: false}) 
    }

    render() {
        return (
            <div>
                <Link to="/"><font size={18}>Home</font></Link>
                <h1>Most Popular Personalities of the World!</h1>
                {
                    this.state.loading || !this.state.person ? 
                    (
                        <div> Loading Data </div>
                    )
                    :<div>
                        <br/>
                      <img src = {this.state.person.picture.large}/> <br/><br/><br/>
                      <div> Name: {this.state.person.name.title} {this.state.person.name.first} {this.state.person.last}</div><br/>  
                      <div> Age: {this.state.person.dob.age}</div><br/>
                      <div>City: {this.state.person.location.city}</div><br/>
                      <div> Country: {this.state.person.location.country}</div><br/>
                      </div>
                }
            </div>
        )
    }
}

export default Navbar;