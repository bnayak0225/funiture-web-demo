import React from "react";
import {Container, Row, Col} from "reactstrap";
import ProductList from "./Product-List";
import "../Stylesheet/Filter.scss"
class Home extends React.Component{
    render() {
        return(
            <Container>
                <Row className={"product-list-container"}>
                    <Col sm={12} md={3} className={"filter"}>
                        <div className={"title"}><small>FILTER BY</small></div>
                        <div className={"menu"}>Collection</div>
                        <div className={"menu"}>Color</div>
                        <div className={"menu"}>Category</div>
                        <div className={"menu"}>Price Range</div>
                    </Col>
                    <Col md={9}>
                        <Row>
                            <Col xs={4}>
                                <ProductList/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Home