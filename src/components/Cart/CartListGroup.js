import { useSelector } from "react-redux";
import { ListGroup } from 'react-bootstrap';
import CartItem from './CartItem';

const EmptyCart = () => <p>There are no items in the cart ...</p>

const CartListGroup = () => {
    const cartItems = useSelector(state => state.cart.cartItems);

    if (!cartItems || cartItems.length < 1) {
        return <EmptyCart />
    }

    return(
        <ListGroup as="ul">
            {
                cartItems.map(item => (
                    <ListGroup.Item key={item.id} as="li">
                        <CartItem cartItem={item} />
                    </ListGroup.Item>)
                )
            }
        </ListGroup>
    )
};

export default CartListGroup;