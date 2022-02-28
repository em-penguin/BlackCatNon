import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


export default function InfoCard(props) {
    const card = {
        marginTop: "10px",
    }
    const buttom = {
        display: "flex",
        padding: "0",
        alignItems: "center",
    }
    const h4 = {
        marginBottom: "10px",
    }
    const cardContent = {
        paddingBottom: "0",
    }
    return (
        <Card style={ card }>
            <CardContent style={ cardContent }>
                <h4 style={ h4 }>{ props.title } / { props.writer }</h4>
                <p>{ props.note }</p>
            </CardContent>
            <CardActions>
                <Button color="primary" href={ props.link } style={ buttom }>
                    More
                </Button>
            </CardActions>
        </Card>
    )
}
