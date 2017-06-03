import React from 'react';
import ListItem from './ListItem';
import ListForm from './ListForm';
import firebase from '../../firebase/firebase';

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

    componentWillMount(){
        firebase.database().ref('fixtercamp').on('value', (val) =>{
            let items = [];
            val.forEach( item=> {
                items.push(item.val());      
            })
            this.setState({
                items: items
            })
        })
    }

    addItem = (item) =>{
        
        let newPostKey = firebase.database().ref('fixtercamp').push().key;
        item.fire_key = newPostKey;

        let updates = {};
        updates['/fixtercamp/'+newPostKey] = item;
        firebase.database().ref().update(updates);
        console.log("pusheado a firebase", item);

        /*this.setState({
            items: new_list
        })*/
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