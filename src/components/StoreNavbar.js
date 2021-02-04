import { useSelector } from "react-redux";
import { Navbar, Nav, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

const StoreNavbar = () => {

    const cartQuantity = useSelector(state => state.cart.cartItems.length);

    return(
        <Navbar bg="light">
                <Link to="/" className="nav-link">
                    <Navbar.Brand>
                        A-Z Company
                    </Navbar.Brand>
                </Link>
                <Nav.Item className="ml-auto">
                    <Link to="/cart" className="nav-link">
                        <Button>
                            Cart
                            <FaShoppingCart style={{marginLeft: '3px', marginRight: '3px'}} />
                            <Badge pill variant="light">
                                {cartQuantity}
                            </Badge>
                        </Button>
                    </Link>
                </Nav.Item>
            </Navbar>     
    );
}

export default StoreNavbar;