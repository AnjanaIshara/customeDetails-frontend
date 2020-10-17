import React, { Component } from 'react';

import "./Form.css"

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            SupplierName:null,
            ContactPerson:null,
            MobileNumber:null,
            ProductName:null,
            ProductPrice:null,
            basket: [],
            users:[],
            button: 1,
            selectedfile:null
        }

        this.handleEvent = this.handleEvent.bind(this)
    }
    ConfirmItem=()=>{
        const fd=new FormData();
        fd.append('image',this.state.selectedfile,this.state.selectedfile.name)
        const newItem={
            ProductName:this.state.ProductName,
            ProductPrice:this.state.ProductPrice,
            Image:this.state.selectedfile
        }
        this.setState({basket:[...this.state.basket,newItem]})
    }
ImageChange=event=>{
    this.state.selectedfile=event.target.files[0];
}
    singleItem = () => {
        return (
    <div>
    <p><input type='text' placeholder="Product Name" name='ProductName' size="25" onChange={this.handleAgeChange} /></p>
    <p><input type='text' placeholder="Product Price " name='ProductPrice' size="25" onChange={this.handleAgeChange} /></p>
    <p><input type='file'  onChange={this.ImageChange} /></p>

    <button onClick={() => (this.state.button =1)}>Confirm</button>
                   
    </div>
        )
      }
    addUser = () => {
        this.setState({
          users: [...this.state.users, this.singleItem()]
        })
      }
    
    HandleSubmit=(event)=>{
        event.preventDefault()

        if (this.state.button === 3) {
        const data=this.state
        console.log(data)
        this.componentDidMount();
          }
        if (this.state.button === 2) {
            
            this.addUser();
              }
            
              if (this.state.button === 1) {
            
                this.ConfirmItem();
                  }

        
        
    }
    
    handleAgeChange=(event)=>{
        event.preventDefault()
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    
    componentDidMount() {
        var sendingdata={
            SupplierName:this.state.SupplierName,
            ContactPerson:this.state.ContactPerson,
            MobileNumber:this.state.MobileNumber,
            ProductDetails:this.state.basket
        }
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(sendingdata)
        };
        fetch('http://localhost:8000/getdata', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {
        
    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() {}

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    render() {
        const {SupplierName,ContactPerson,MobileNumber}=this.state

        return (
           <div >
               <div className="Forms-details">

               <form onSubmit={this.HandleSubmit}>
              <h1>Registration Form</h1>
                    <p>Supplier Name is: {SupplierName}</p>
                    <p>Contact Person : {ContactPerson}</p>
                    <p>Mobile Number : {MobileNumber}</p>
               <p><input type='text' placeholder="Supplier Name" name='SupplierName' size="25" onChange={this.handleAgeChange}/></p>
               <p><input type='text' placeholder="Contact Person " name='ContactPerson' size="25" onChange={this.handleAgeChange}/></p>
               <p><input type='text' placeholder="Mobile Number " name='MobileNumber' size="25" onChange={this.handleAgeChange}/></p>
               <button onClick={() => (this.state.button =2)}>Add Item</button>
               {this.state.users}
               <p><button  onClick={() => (this.state.button = 3)}>Resgiter</button></p>
               </form>
                </div>
           </div>
        )
    }
}
