import React from 'react';
import CardItem from '../card/cardItem'
import {GridList} from 'material-ui';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  }
};

class Home extends React.Component{

    constructor(){
        super();
        this.state = {
            items: []
        }
    }

    componentWillMount(){

        let updateState = (data) => {
            this.setState({
                items: data.results
            })
            console.log("Actualizado papud", this.state.items);
        }

        fetch('https://api.themoviedb.org/4/list/1?page=1&api_key=b5b664b4028c36029bbeaf55cc2b6fb9&language=es')
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                updateState(data)
            })

    }

    render(){
        return(
            <section>
                Pelis Mijow

                <div style={styles.root}>
                    <GridList
                    cols={3}
                    cellHeight={900}
                    style={styles.gridList}>

                    {this.state.items.map((peli)=> <CardItem perro={peli} key={peli.id}/>)}

                    </GridList>
                </div>
                
            </section>
        );
    }

}

export default Home;