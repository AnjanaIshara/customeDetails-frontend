import React, { Component } from 'react'

import "./Register.css"
export default class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Name:null,
            Age:null,
        }

        this.handleEvent = this.handleEvent.bind(this)
    }
    async postdata(){
        try{

            let result=await fetch('http://localhost:8000/postdata',{
                method: 'post',
                mode: 'no-cors',
                headers:{
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body:JSON.stringify(this.state)
            });
            console.log(result);
        }catch(e){
            console.log(e);
        }

    }
    HandleSubmit=(event)=>{
        event.preventDefault()
        const data=this.state
        console.log(data);
        this.postdata()
    }
    
    handleAgeChange=(event)=>{
        event.preventDefault()
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    componentDidMount() {
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {
        
    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() {}

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    render() {
        const {Name,Age}=this.state

        return (
           <div >
               <div className="Forms-details">

               <form onSubmit={this.HandleSubmit}>
              <h1>Forms and Inputs</h1>
                    <p>Full name is: {Name}</p>
                    <p>Age is : {Age}</p>
               <p><input type='text' placeholder="Your Name " name='Name' size="25" onChange={this.handleAgeChange}/></p>
                
                <p><input type='number' min="1" max="120" placeholder="Your age " maxlength="40" size="40" name='Age'onChange={this.handleAgeChange}/> </p>
               <p><button>Resgiter</button></p>
               </form>
                   </div>
           </div>
        )
    }
}
