import React from 'react';
import CardItem from '../card/cardItem'

class Home extends React.Component{

    constructor(){
        super();
        this.state = {
            items: []
        }
    }

    componentWillMount(){
        fetch('https://api.themoviedb.org/4/list/1?page=1&api_key=b5b664b4028c36029bbeaf55cc2b6fb9&language=es')
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log(data);
            })
    }

    render(){
        return(
            <div>
                Hola
                <CardItem/>
            </div>
        );
    }

}

export default Home;