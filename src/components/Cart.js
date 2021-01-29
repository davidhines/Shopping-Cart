import { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { connect } from "react-redux";
import OrderSummary from "./OrderSummary";
import CartListGroup from "./CartListGroup";
import { Card } from 'react-bootstrap';

class Cart extends Component {

    render() {
        const { cartQuantity } = this.props;
        return(
            <Container className="cart-container">
                <Row>
                    <Col md="8">
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    Cart ({cartQuantity})
                                </Card.Title>
                                <CartListGroup />                      
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="4">
                        <OrderSummary />
                    </Col>
                </Row>                
            </Container>
        );        
    }
}

const mapStateToProps = state => ({
    cartQuantity: state.cart.cartItems.length,
});

export default connect(mapStateToProps)(Cart);