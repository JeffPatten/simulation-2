import React, {Component} from 'react';
import axios from 'axios';
import House from '../house/House';
import {Link} from 'react-router-dom';

export default class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            img: '',
            mortgage: 0,
            rent: 0,
            houses: []
        }
        this.getAllHouses = this.getAllHouses.bind(this);
        this.handleDeleteHouse = this.handleDeleteHouse.bind(this);
    }

    componentDidMount(){
        this.getAllHouses();
    }

    getAllHouses(){
        axios.get('/houses')
        .then( res => {
           this.setState({houses: res.data});
        })
    }
   
    handleDeleteHouse(index){
        axios.delete(`/houses/:${index}`)
        .then( res => {
            this.getAllHouses();
        })
    }

    render (){
        let houseList = this.state.houses.map( house => {
            console.log(house)
           return <House delete={this.handleDeleteHouse} name={house.name} address={house.address} city={house.city} state={house.state} zip={house.zip} img={house.imageUrl} mortgage={house.mortgage} rent={house.rent}/>
        })
        return(
            <div>
                <h1>Dashboard</h1>
                <Link to='/wizard' ><button>Add New Property</button></Link>
                {houseList}
            </div>
        )
    }
}