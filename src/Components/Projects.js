import React from "react"; 
import { Col, Container, Row } from "reactstrap";
import Project from "./Project";

function Projects (){
    return(
        <Container>
            <Row>
                <Col md="6">
                    <Project src="../assets/imgs/quizzInc.png" href="https://stormy-shelf-50629.herokuapp.com/" title="QuizzInc"></Project>
                </Col>
                <Col md="6">
                    <Project src="assets/imgs/noteTaker.png" href="https://afternoon-wildwood-56930.herokuapp.com" title="noteTaker"></Project>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <Project src="assets/imgs/moneyForAll.png" href="https://jarora16.github.io/Project1-Travel-app/" title="Project1-moneyForAll"></Project>
                </Col>
                <Col md="6">
                    <Project src="assets/imgs/weatherDashboard.png" href="https://reynags.github.io/homework-6-weatherDashboard/" title="weatherDashboard"></Project>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <Project src="assets/imgs/toDo.png" href="https://stormy-shelf-50629.herokuapp.com/" title="ToDo"></Project>
                </Col>
                <Col md="6">
                    <Project src="assets/imgs/budgetApp.png" href="https://budgetapppwa.herokuapp.com" title="BudgetApp"></Project>
                </Col>
            </Row>
        </Container>
        
    )
}

export default Projects