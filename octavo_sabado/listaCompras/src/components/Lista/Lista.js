import React from 'react';

class Lista extends React.Component{

    constructor(){
        super();
        this.state = {
            items: [
                {
                    name: 'David',
                    edad: 19,
                    id: 1
                },
                {
                    name: 'Agustin',
                    edad: 24,
                    id: 2
                },
                {
                    name: 'Topi',
                    edad: 18,
                    id: 3
                }
            ]
        }
    }

    render(){
        return(
            <div>
                <p>Lista de compras</p>

            </div> 
        );
    }

}

export default Lista;