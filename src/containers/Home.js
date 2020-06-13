import { connect } from "react-redux";
import { path } from "ramda";

import Home from "../components/Home/Home";

import { getProducts, getProduct } from "../store/actions";

const mapStateToProps = (state) => {
  return {
    products: path(["products", "products", "Search"], state),
    loading: path(["products", "products", "loading"], state),
    product: path(["products", "product"], state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: (page) => dispatch(getProducts(page)),
    getProduct: (id) => dispatch(getProduct(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
