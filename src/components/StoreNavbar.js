import { Component } from "react";
import { connect } from "react-redux";
import { Navbar, Nav, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

class StoreNavbar extends Component {
    render() {        
        const { cartQuantity } = this.props;

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
}

const mapStateToProps = state => ({
    cartQuantity: state.cart.cartItems.length
});

export default connect(mapStateToProps)(StoreNavbar);