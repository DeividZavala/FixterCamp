import React from 'react';

class Detail extends React.Component{

    
    render(){
        return(
            <div>Detalle de la peli {this.props.match.params.id}</div>
        );
    }
}

export default Detail;