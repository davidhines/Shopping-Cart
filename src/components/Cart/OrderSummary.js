import { Button, Card, ListGroup } from 'react-bootstrap';
import CurrencyFormat from 'react-currency-format';
import { useSelector, useDispatch } from "react-redux";
import { checkout } from '../../store/actions/cartActions';

const taxRate = 0.05;

const OrderSummary = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();
    const subtotal = cartItems.reduce((a, b) => a + (b.price * b.quantity), 0);
    const taxes = subtotal * taxRate;
    const total = subtotal + taxes;

    return(
        <Card>
            <Card.Body>
                <Card.Title>Order Summary</Card.Title>
                <ListGroup as="ul">
                        <ListGroup.Item as="li" active>
                            {cartItems.length} - Item{cartItems.length > 0 ? 's' : ''}
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            Subtotal: 
                            <span className="fr">
                                <CurrencyFormat value={subtotal} 
                                    displayType={'text'} 
                                    decimalSeparator={'.'} 
                                    decimalScale={2}
                                    fixedDecimalScale={true} 
                                    thousandSeparator={true} 
                                    prefix={'$'} />
                            </span>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            Taxes:
                            <span className="fr">
                                <CurrencyFormat value={taxes} 
                                    displayType={'text'} 
                                    decimalSeparator={'.'} 
                                    decimalScale={2}
                                    fixedDecimalScale={true} 
                                    thousandSeparator={true} 
                                    prefix={'$'} />
                            </span>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" active>
                            Total:
                            <span className="fr">
                                <CurrencyFormat value={total} 
                                    displayType={'text'} 
                                    decimalSeparator={'.'} 
                                    decimalScale={2}
                                    fixedDecimalScale={true} 
                                    thousandSeparator={true} 
                                    prefix={'$'} />
                            </span>
                        </ListGroup.Item>
                    </ListGroup>
            </Card.Body>
            <Card.Footer className="text-center">
                <Button variant="primary"
                     className="fr"
                     disabled={cartItems.length < 1}
                    onClick={ () => dispatch(checkout()) }>
                    Checkout
                </Button>
            </Card.Footer>
        </Card>
    );
}

export default OrderSummary;