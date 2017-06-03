import React from 'react';
import ListItem from './ListItem';
import ListForm from './ListForm';

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

    addItem = (item) =>{
        const new_list = this.state.items;
        new_list.push(item);
        this.setState({
            items: new_list
        })
    }

    remove = (item) => {
        const new_list = this.state.items.filter(i => i !== item);
        console.log(new_list);
        this.setState({items: new_list});
    }

    render(){
        return(
            <div>
                <p>Lista de compras</p>
                { this.state.items.map(item => <ListItem
                item={item} 
                key={item.id}
                remove={this.remove}
                />
                )}
                <ListForm 
                count={this.state.items.length} 
                addItem={this.addItem}
                />
            </div> 
        );
    }

}

export default Lista;