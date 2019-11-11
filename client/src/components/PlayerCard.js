import React, {useState, useEffect} from "react";
import { Card, Button, CardTitle, CardText } from 'reactstrap';


const PlayerCard = (props) => {
    const { dataSet } = props;


    return (
        <>
        {dataSet.map(player => (
            <Card className="playerCard" key={player.id} >
                <CardTitle>{player.name}</CardTitle>
                <CardText>Country From: {player.country}</CardText>
                <CardText>Google Search: {player.searches} </CardText>
            </Card>
            ))}

        </>
    );

};

export default PlayerCard;