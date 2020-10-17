import React, { Component } from 'react'

export default class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items:[],
            isLoaded:false,
        }

        this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                    isLoaded:true,
                    items:json
            })
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {
        
    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() {}

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    render() {
        var {isLoaded,items}=this.state;
        if(!isLoaded){
            return <div>Loading...</div>
        }
        else{

        
        return (
            <div className="Signup-container">
                <ul>
                    {items.map(item=>
                       <li key={item.id}>
                           Name: {item.name} |Email: {item.email}
                       </li> 
                    )
                    };
                </ul>
            </div>
        )
        
    }
    }
}
