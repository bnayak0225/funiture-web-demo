import React from "react";
import {Container, Row, Col} from "reactstrap";
import "../Stylesheet/Product.scss"
import Loader from "./Loader";
import CartIcon from "../image/cart.svg"
class Product extends React.Component{
    constructor(props) {
        super(props);
        this.state={loader: false, product: {}}
    }
    componentDidMount() {
        const {id} = this.props.match.params
        this.setState({loader: true})
            fetch("http://localhost:8000/product/"+id, {
                method: 'GET',
            }).then(response => response.json())
                .then(res =>{
                    this.setState({product: res.data})
                    setTimeout(()=>{
                        this.setState({loader: false})
                    }, 500)
                })
    }

    render() {
        const {product, loader} = this.state
        return(
            <Container>
                {loader && <Loader/>}
                <Row className={"product"}>
                    <Col xs={12} sm={7}>
                        <img src={product.image}/>
                    </Col>
                    <Col xs={12} sm={5}>
                        <div><small>{product.type}</small></div>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <Row>
                            <Col xs={4}>
                                <div><small>Price per unit</small></div>
                                {product.price}
                            </Col>
                            <Col xs={"auto"} className={"ml-auto"}><button className={"buy-now-button"}>BUY NOW</button></Col>
                            <Col xs={"auto"} ><img className={"cart-icon"} src={CartIcon}/> </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Product