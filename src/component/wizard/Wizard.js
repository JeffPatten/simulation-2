import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Wizard extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0,
            img: '',
            mortgage: 0,
            rent: 0,
            houses: []
        }
        this.handleNameChange = this.handleNameChange.bind(this);
    }

      handleNameChange(e){
        this.setState({ name: e.target.value })
    }

    handleAddressChange = (e) => {
        this.setState({ address: e.target.value })
    }

    handleCityChange = (e) => {
        this.setState({ city: e.target.value })
    }

    handleStateChange = (e) => {
        this.setState({ state: e.target.value })
    }

    handleZipChange = (e) => {
        this.setState({ zip: e.target.value })
    }

    // getAllHouses(){
    //     axios.get('/houses')
    //     .then( res => {
    //         this.setState({houses: res.data});
    //     })
    // }

    // postNewHouse(){
    //     axios.post('/houses', (this.state.name, this.state.address, this.state.city, this.state.state, this.state.zip, this.state.img, this.state.mortgage, this.state.rent})).
    //     then( (res) => {
    //         this.setState({houses: res.data})
    //     })
    // }

    render() {
        return (
            <div>
                <h1>Add New Listing</h1>
                <h4>Property Name</h4>
                <input value={this.state.name} type='text' onChange={this.handleNameChange}></input>
                <h4>Address</h4>
                <input value={this.state.address} type='text' onChange={this.handleAddressChange}></input>
                <h4>City</h4>
                <input value={this.state.city} type='text' onChange={this.handleCityChange}></input>
                <h4>State</h4>
                <input value={this.state.state} type='text' onChange={this.handleStateChange}></input>
                <h4>Zip</h4>
                <input value={this.state.zip} type='number' onChange={this.handleZipChange}></input>

                <Link to='./'><button>Cancel</button></Link>
                <button onClick={this.postNewHouse}>Complete</button>
            </div>
        )
    }
}
