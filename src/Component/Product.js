import React from "react";
import {Container, Row, Col} from "reactstrap";
import "../Stylesheet/Product.scss"
class Product extends React.Component{
    render() {
        return(
            <Container>
                <Row className={"product"}>
                    <Col xs={7}>
                        <img src={"https://images-na.ssl-images-amazon.com/images/I/713cLjHmqRL._SL1500_.jpg"}/>
                    </Col>
                    <Col xs={5}>
                        <div><small>Keppu Regular chair</small></div>
                        <h3>Scandanvanian Collection</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                        <div><small>Color</small></div>
                        <div><small>Price per unit</small></div>
                        <Row>
                            <Col>$2400</Col>
                            <Col sm={"auto"} className={"ml-auto"}><button className={"buy-now-button"}>BUY NOW</button></Col>
                            <Col sm={"auto"}>Cart</Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Product