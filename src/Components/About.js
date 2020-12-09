import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Row, Col
} from 'reactstrap';


function About (){
    return(
        <div>
            <Card>
                
                <Row> 
                    <Col md="6">
                <CardImg   src="assets/imgs/rg.png" alt="Reyna Garcia" style={{ width : "60%",}} />
                    </Col>
                    <Col md="6">
                        <CardBody  className="text-center" >
                            <CardTitle tag="h5">About Me</CardTitle>
                    <CardText>
                        <p>Hi, My name is, Reyna Garcia,I am from the Dominican Republic and currently living in Florida.
                        I have a BS degree in Economics from Utah State University. Over the years, I have work in
                        banking, and business management.
                        </p>
                    </CardText>   
                    <CardText>
                        <p>
                            I decided to learn web development because I have a passion for problem solving. I believe
                            that this kind of technology in combination with my business background gives me the opportunity
                            to create innovative solutions.
                       </p>

                    </CardText>
                    
                </CardBody>
                    </Col>
                </Row>
            </Card>
        </div>
    )

}

export default About