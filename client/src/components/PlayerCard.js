import React from "react";
import { Card, Button, CardTitle, CardText } from 'reactstrap';


const PlayerCard = (props) => {
    const {name, country, searches} = props;

    return (
        <Card className="playerCard" >
            <CardTitle>{name}</CardTitle>
            <CardText>Country From: {country}</CardText>
            <CardText>Google Search: {searches} </CardText>
      </Card>
    );

};

export default PlayerCard;