import { CardGroup, Col } from 'react-bootstrap';
import { useSelector} from 'react-redux';
import ProductItem from './ProductItem';

const EmptyProducts = () => <div>There are no products to display.</div>;
const Loading = () => <div>... Loading</div>;

const ProductGroupList = () => {
    const products = useSelector(state => state.products.products);
    const filteredProducts = useSelector(state => state.products.filteredProducts);
    const loading = useSelector(state => state.products.loading);

    if (loading) {
        return <Loading />
    }

    if (!loading && products.length === 0) {
        return <EmptyProducts />
    }

    return(
        <CardGroup>
            {
                filteredProducts.map(product => (
                    <Col lg="3"  key={product.id}>
                        <ProductItem product={product} />
                    </Col>
                ))
            }
        </CardGroup>
    );
}

export default ProductGroupList;