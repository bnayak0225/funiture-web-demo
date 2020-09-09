import React from "react";
import {Container, Row, Col} from "reactstrap";
import ProductList from "./Product-List";
import "../Stylesheet/Filter.scss"
import FilterIcon from "../image/filter.svg"
import Loader from "./Loader";

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            showFilter: false,
            loader: false,
            noSearchFound: false,
            productJson: []
        }
    }
    componentDidMount() {
        const {text} = this.props.match.params
        console.log(text);
        this.loadProduct()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        
        if(this.props.match.params.text!==prevProps.match.params.text){
            this.loadProduct()
        }
        
    }
    loadProduct = () =>{
        const {text} = this.props.match.params
        this.setState({noSearchFound: false, loader: true})
        if(text){
            fetch("http://localhost:8000/search/"+text, {
                method: 'GET',
            }).then(response => response.json())
                .then(res =>{
                    this.setState({productJson: res.data, noSearchFound: res.search==="false" ? true : false})

                    setTimeout(()=>{
                        this.setState({loader: false})
                    }, 500)
                })
        }
        else{
            fetch("http://localhost:8000", {
                method: 'GET',
            }).then(response => response.json())
                .then(res =>{
                    this.setState({productJson: res.data})

                    setTimeout(()=>{
                        this.setState({loader: false})
                    }, 500)
                })
        }
    }
    render() {
        return(
            <Container>
                {this.state.loader && <Loader/>}
                <Row className={"product-list-container"}>
                    <Col sm={12} md={3} className={"filter"}>
                        <img className={"filter-icon"} src={FilterIcon} onClick={()=>this.setState({showFilter: true})}/>
                        <div className={`filter-container ${this.state.showFilter ? "show": ""}`}>
                            <div className={"title"}><small>FILTER BY</small></div>
                            <div className={"menu"}>Collection</div>
                            <div className={"menu"}>Color</div>
                            <div className={"menu"}>Category</div>
                            <div className={"menu"}>Price Range</div>
                            <div className={"filter-close-button"} onClick={()=>this.setState({showFilter: false})}>
                                Close
                            </div>
                        </div>

                    </Col>
                    <Col md={9}>
                        {this.state.noSearchFound
                        && <h5>No search found! Showing related products.</h5>
                        }
                        <Row>
                            {this.state.productJson &&
                                this.state.productJson.map((product, i) => {
                                    return (
                                        <Col xs={6} sm={4}>
                                            <ProductList key={i} product={product}/>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Home