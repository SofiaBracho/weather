// import { arrayExpression } from '@babel/types';
import React from 'react';
// import Select from 'react-select';
import './css/Search.css';

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state={
            query: '',
            cities: [],
            error: null
        }
    }

    fetchData = async () => {
        try {
            let res = await fetch(`https://andruxnet-world-cities-v1.p.rapidapi.com/?query=${this.query}&searchby=city`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "andruxnet-world-cities-v1.p.rapidapi.com",
                    "x-rapidapi-key": "6f640654a3msh3f560bd2760d8bfp1ce886jsnd72d472cf077"
                }
            })
            let data = await res.json()

            console.log(data)
        } catch (error) {
            this.setState({
                error: error
            })
        }
    }

    handleSearch = (e) => {
        this.setState({query: e.target.value})
    }

    render(){
        return (
            <React.Fragment>
                <input type='search' placeholder='Search by city name...' value={this.query} onChange={this.handleSearch} className='search' />
                <button onClick={this.fetchData}>Search</button>
            </React.Fragment>
            // <Select options={options} className='search' placeholder='Search by city name...' value={this.query} onChange={this.handleSearch()} />
        )
    }
}

export default Search;