import { addToCart } from '../../store/actions/cartActions';
import { Button, Card } from 'react-bootstrap';
import CurrencyFormat from 'react-currency-format';
import { useDispatch} from 'react-redux';

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();
    const { 
        title, 
        price, 
        description,
        image
    } = product;
    
    return(
        <Card className="product-card">
            <Card.Img variant="top" 
                src={image}
                className="product-card-image"
                style={{ width: '100px' }} />                                  
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                <CurrencyFormat value={price} 
                    displayType={'text'} 
                    decimalSeparator={'.'} 
                    decimalScale={2}
                    fixedDecimalScale={true} 
                    thousandSeparator={true} 
                    prefix={'$'} />
                </Card.Text>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
                <Button variant="primary"
                    onClick={ () => dispatch(addToCart(product))}>
                    Add to Cart
                </Button>
            </Card.Footer>
        </Card>
    );
}

export default ProductItem;