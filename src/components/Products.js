import { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from '../store/actions/productActions';
import { addToCart } from '../store/actions/cartActions';
import { Button, Card, CardGroup, Col } from 'react-bootstrap';
import CurrencyFormat from 'react-currency-format';
import SearchBar from "./SearchBar";

class Products extends Component {

    componentDidMount() {
        this.props.getProducts();
    }

    renderEmpty() {
        return(
            <div>
                There are no products to display.
            </div>
        );
    }

    renderLoading() {
        return(
            <div>
                ... Loading;
            </div>
        ); 
    }

    renderCardDeck() {
        const { filteredProducts, addToCart } = this.props;

        return(
            <div>
                <h1>Products</h1>
                <SearchBar />
                <CardGroup>
                    {
                        filteredProducts.map(product => (
                            <Col lg="3" key={product.id}>
                                <Card className="product-card">
                                    <Card.Img variant="top" 
                                        src={product.image}
                                        className="product-card-image"
                                        style={{ width: '100px' }} />                                  
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>
                                        <CurrencyFormat value={product.price} 
                                            displayType={'text'} 
                                            decimalSeparator={'.'} 
                                            decimalScale={2}
                                            fixedDecimalScale={true} 
                                            thousandSeparator={true} 
                                            prefix={'$'} />
                                        </Card.Text>
                                        <Card.Text>
                                            {product.description}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="text-center">
                                        <Button variant="primary"
                                            onClick={ e => addToCart(product)}>
                                            Add to Cart
                                        </Button>
                                    </Card.Footer>
                                </Card>
                            </Col>                            
                        ))
                    }
                </CardGroup>       
            </div>               
        );
    }

    render() {

        if (this.props && this.props.loading) {
            return this.renderLoading();
        }

        if (this.props && !this.props.loading && this.props.products.length === 0) {
            return this.renderEmpty();
        }

        if (this.props && this.props.products.length > 0) {
            return this.renderCardDeck();
        }
    }
}

const mapStateToProps = state => ({
    products: state.products.products,
    filteredProducts: state.products.filteredProducts,
    loading: state.products.loading,
    error: state.products.error
});

export default connect(mapStateToProps, { getProducts, addToCart })(Products);