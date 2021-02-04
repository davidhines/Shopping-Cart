import { Row, Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import OrderSummary from "./OrderSummary";
import CartListGroup from "./CartListGroup";
import { Card } from 'react-bootstrap';

export const Cart = () => {
    const cartQuantity = useSelector(state => state.cart.cartItems.length);

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

export default Cart;