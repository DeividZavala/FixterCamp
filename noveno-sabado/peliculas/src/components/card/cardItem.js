import React from 'react';
import {Card, CardHeader, CardTitle, CardMedia, CardText, CardActions, FlatButton} from 'material-ui';

const CardItem = (props) => {
    return(
        <Card>
            <CardHeader
            title="URL Avatar"
            subtitle="Subtitle"
            avatar="https://cdn.tutsplus.com/cg/uploads/2014/01/Blender_LP_Illustration_Preview.jpg"
            />
            <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            >
            <img src="https://cdn.tutsplus.com/cg/uploads/2014/01/Blender_LP_Illustration_Preview.jpg" alt="" />
            </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
            </CardActions>
        </Card>
    );
}

export default CardItem;