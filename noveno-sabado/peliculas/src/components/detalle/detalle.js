import React from 'react';

class Detail extends React.Component{

    constructor(){
        super();
        this.state = {
            peli: {}
        }
    }

    componentWillMount(){

        let updateState = (data) => {
            this.setState({
                peli: data
            })
            console.log("Actualizado papud", this.state.items);
        }

        fetch('https://api.themoviedb.org/3/movie/'+ this.props.match.params.id +'?api_key=b5b664b4028c36029bbeaf55cc2b6fb9&language=es')
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                updateState(data)
            })

    }

    render(){
        return(
            <div>Detalle de la peli {this.state.peli.title} con el id -- {this.props.match.params.id}</div>
        );
    }
}

export default Detail;