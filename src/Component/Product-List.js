import React from "react";
import {Row, Col} from "reactstrap"
import "../Stylesheet/Home.scss"
import Cart from "../image/cart.svg"
import Star from "../image/star.svg"
import StarNone from "../image/star-none.svg"
const ProductList = () => {
    return(
        <div className={"product-list"}>
            <Row>
                <Col xs={12}>
                    <img className={"product-list-image"} src={"https://images-na.ssl-images-amazon.com/images/I/713cLjHmqRL._SL1500_.jpg"}/>
                </Col>
                <Col xs={8} className={"product-list-detail"}>
                    <p><b>5236 L Shape</b></p>
                    <p><small>LOUNGE</small></p>
                </Col>
                <Col xs={4} className={"text-right"}>
                    <p>$2,600</p>
                </Col>
                <Col xs={8} className={"star"}>
                    <img src={Star}/>
                    <img src={Star}/>
                    <img src={Star}/>
                    <img src={Star}/>
                    <img src={Star}/>
                </Col>
                <Col xs={4}>
                    <img className={"cart"} src={Cart}/>
                </Col>
            </Row>
        </div>
    )
}
export default ProductList