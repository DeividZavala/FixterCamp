import React from 'react';

const ListItem = (props) => {

    const remove = ()=>{
        props.remove(props.item);
    }

    return(
        <div>
            {props.item.id}.-{props.item.name} tiene {props.item.edad}
            <button onClick={remove} >Picale papud</button>
        </div>
    );

}

export default ListItem;