import React, {Component} from 'react';
import {connect} from 'react-redux';
import { searchProducts } from '../store/actions/productActions';

class SearchBar extends Component {

    render() {
        const { searchProducts } = this.props;
        return (
            <input className="form-control product-search"
                style={{  width: '350px' }}
                placeholder = "Search products by name..."
                onChange={(e) => searchProducts(e.target.value)}
                value={this.props.searchTerm} />
        );
    }
} 

const mapStateToProps = state => ({
    searchTerm: state.searchTerm
});

export default connect(mapStateToProps, { searchProducts })(SearchBar);