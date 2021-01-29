import { Component } from "react";
import { connect } from "react-redux";
import { ListGroup, Button, Card } from 'react-bootstrap';
import CurrencyFormat from 'react-currency-format';
import { removeFromCart, updateQuantity } from '../store/actions/cartActions';

class CartListGroup extends Component {

    renderEmpty() {
        return(
            <p>There are no items in the cart ...</p>
        )
    }

    handleQuantityUpdate(item, increment = true) {

        if (increment) {
            item.quantity++;
        }
        else {
            item.quantity--;
        }

        this.props.updateQuantity(item);
    }

    render() {
        const { cartItems, removeFromCart } = this.props;

        if (cartItems.length < 1) {
            return this.renderEmpty();
        }
        
        return(
            <ListGroup as="ul">
                {
                    cartItems.map(item => (
                        <ListGroup.Item key={item.id} as="li">   
                            <Card>
                                <Card.Header>
                                    {item.title}
                                    <span className="fr">
                                        <CurrencyFormat value={item.price} 
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
                                        {item.description}
                                    </Card.Text>                                    
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary"
                                        onClick={ e => removeFromCart(item)}>
                                        Remove
                                    </Button>
                                    <div className="fr mr-10">                                    
                                        Qty
                                        <Button variant="secondary"
                                            onClick={ e => this.handleQuantityUpdate(item, false)}
                                            className="ml-10"
                                            disabled={item.quantity < 2}>
                                            -
                                        </Button>
                                        <input type="text"
                                            value={item.quantity}
                                            disabled
                                            className="quantity-input" />
                                        <Button variant="secondary"
                                            onClick={ () =>  this.handleQuantityUpdate(item)}>
                                            +
                                        </Button>
                                    </div>
                                </Card.Footer>
                            </Card>     
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        )
    }
}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
});

export default connect(mapStateToProps, { removeFromCart, updateQuantity })(CartListGroup);