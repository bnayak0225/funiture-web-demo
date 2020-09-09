import React from "react";
import {Row, Col} from "reactstrap"
import "../Stylesheet/Home.scss"
import Cart from "../image/cart.svg"
import Star from "../image/star.svg"
import StarNone from "../image/star-none.svg"
import {Link} from "react-router-dom";
const ProductList = ({product}) => {
    return(
        <div className={"product-list"}>
            <Row>
                <Col xs={12}>
                    <Link to={"/product/"+product.id}>
                        <img className={"product-list-image"} src={product.image}/>
                    </Link>
                </Col>
                <Col xs={12} sm={8} className={"product-list-detail"}>
                    <Link to={"/product/"+product.id}>
                        <p><b>{product.name}</b></p>
                        <p><small>{product.type}</small></p>
                    </Link>
                </Col>
                <Col xs={12} sm={4} className={"text-sm-right"}>
                    <p className={"price"}><span className={"d-inline-block d-sm-none"}>Price:</span> {product.price}</p>
                </Col>
                <Col xs={8} className={"star"}>
                    <img src={Star}/>
                    <img src={Star}/>
                    <img src={Star}/>
                    <img src={Star}/>
                    <img src={StarNone}/>
                </Col>
                <Col xs={4}>
                    <img className={"cart"} src={Cart}/>
                </Col>
            </Row>
        </div>
    )
}
export default ProductList