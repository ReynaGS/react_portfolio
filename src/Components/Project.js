import React from "react";
import {
    Card, 
    CardImg,
    Row, 
    Col,
    CardLink,
        } 
from 'reactstrap';

function Project(props){
    return(
        <Card>
        
                    <CardLink href={props.href} target="_blank">
                    <CardImg link src={props.src} alt={props.title} style={{ width: "100%", }} />
                    </CardLink> 
               
            </Card>

    )
}
export default Project
