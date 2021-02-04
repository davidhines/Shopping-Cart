import { Card, Button } from 'react-bootstrap';
import CurrencyFormat from 'react-currency-format';
import { useDispatch } from 'react-redux';
import { INCREMENT_QUANTITY, DECREMENT_QUANTITY } from "../../store/actions/types";
import { removeFromCart, updateQuantity } from '../../store/actions/cartActions'

const CartItem = ({ cartItem }) => {    
    const dispatch = useDispatch();
    const { title, price, description, quantity } = cartItem;

    return (
        <Card>
            <Card.Header>
                {title}
                <span className="fr">
                    <CurrencyFormat value={price} 
                        displayType={'text'} 
                        decimalSeparator={'.'} 
                        decimalScale={2}
                        fixedDecimalScale={true} 
                        thousandSeparator={true} 
                        prefix={'$'} />
                </span>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    {description}
                </Card.Text>                                    
            </Card.Body>
            <Card.Footer>
                <Button variant="primary"
                    onClick={ () => dispatch(removeFromCart(cartItem))}>
                    Remove
                </Button>
                <div className="fr mr-10">                                    
                    Qty
                    <Button variant="secondary"
                        onClick={ () => dispatch(updateQuantity(cartItem, DECREMENT_QUANTITY))}
                        className="ml-10"
                        disabled={quantity < 2}>
                        -
                    </Button>
                    <input type="text"
                        value={quantity}
                        disabled
                        className="quantity-input" />
                    <Button variant="secondary"
                        onClick={ () =>  dispatch(updateQuantity(cartItem, INCREMENT_QUANTITY))}>
                        +
                    </Button>
                </div>
            </Card.Footer>
        </Card>
    );
}

export default CartItem;