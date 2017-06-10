import React from 'react';
import {Card, CardHeader, CardTitle, CardMedia, CardText, CardActions, FlatButton} from 'material-ui';

const CardItem = (props) => {
    return(
        <Card>
            <CardHeader
            title="URL Avatar"
            subtitle="Subtitle"
            avatar={"https://image.tmdb.org/t/p/w500"+props.perro.backdrop_path}
            />
            <CardMedia
            overlay={<CardTitle title={props.perro.title} subtitle={props.perro.original_title} />}
            >
            <img src={"https://image.tmdb.org/t/p/w500"+props.perro.poster_path} alt="" />
            </CardMedia>
            <CardText>
            {props.perro.overview}
            </CardText>
            <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
            </CardActions>
        </Card>
    );
}

export default CardItem;