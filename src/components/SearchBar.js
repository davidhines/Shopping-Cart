import { useDispatch, useSelector} from 'react-redux';
import { searchProducts } from '../store/actions/productActions';

const SearchBar = () => {
    const searchTerm = useSelector(state => state.searchTerm);
    const dispatch = useDispatch();

    return(
        <input className="form-control product-search"
                style={{  width: '350px' }}
                placeholder = "Search products by name..."
                onChange={(e) => dispatch(searchProducts(e.target.value))}
                value={searchTerm} />
    );
}

export default SearchBar;