import { useEffect } from 'react';
import SearchBar from '../SearchBar';
import ProductGroupList from './ProductGroupList';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../store/actions/productActions';

const LoadProducts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getProducts());
    })
  }

const Product = () => {
    
    LoadProducts();

    return(
        <div>
            <h1>Products</h1>
            <SearchBar />
            <ProductGroupList />
        </div>
    );
}

export default Product;