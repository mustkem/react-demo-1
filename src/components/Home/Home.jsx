import React from "react";
import Product from "./Product";
import { FiSearch } from "react-icons/fi";
import { BsArrowLeftShort } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();

    this.state = {
      searchString: "",
      descModal: false,
      productDetail: null,
    };
  }

  productDetailsHandler = (item) => {
    this.props.getProduct(item.imdbID);
    this.handleDescModal();
  };

  handleDescModal = () => {
    this.setState({
      descModal: !this.state.descModal,
    });
  };

  componentDidMount() {
    this.props.getProducts();
  }

  filterItems = () => {
    return (
      this.props.products &&
      this.props.products.filter((item) => {
        const lowerCaseName = item.Title.toLowerCase();
        const lowerCaseSearchString = this.state.searchString.toLowerCase();
        return lowerCaseName.includes(lowerCaseSearchString);
      })
    );
  };

  handleSearchBarModal = () => {
    this.setState(
      {
        searchBarModal: true,
      },
      () => {
        this.inputRef.current.focus();
      }
    );
  };

  render() {
    return (
      <div className="home-content main-content">
        <div className="top-sec">
          <div className="container">
            {!this.state.searchBarModal && (
              <div className="info">
                <span to="">Movies List</span>
                <FiSearch
                  onClick={this.handleSearchBarModal}
                  className="icon search"
                />
              </div>
            )}
            {this.state.searchBarModal && (
              <div className="search-bar">
                <BsArrowLeftShort
                  onClick={() => this.setState({ searchBarModal: false })}
                  className="icon left-arrow-icon"
                />
                <input
                  ref={this.inputRef}
                  placeholder="Search"
                  className="search-input"
                  value={this.state.searchString}
                  onChange={(e) => {
                    this.setState({ searchString: e.target.value });
                  }}
                />
                <MdClose
                  onClick={() => this.setState({ searchString: "" })}
                  className="icon close"
                />
              </div>
            )}
          </div>
        </div>
        <div className="container container-products">
          <ul className="products">
            {this.filterItems() &&
              this.filterItems().map((item, index) => {
                return (
                  <Product
                    key={item.imdbID}
                    item={item}
                    productDetailsHandler={this.productDetailsHandler}
                  />
                );
              })}
          </ul>
          {this.filterItems() && this.filterItems().length === 0 && (
            <div className="no-records">No Records </div>
          )}
        </div>
        <Modal show={this.state.descModal} onHide={this.handleDescModal}>
          <Modal.Header>
            <Modal.Title>Description</Modal.Title>
          </Modal.Header>
          {this.props.product && (
            <Modal.Body>
              <span>{this.props.product.Title}</span>
              <span>Year: {this.props.product.Year}</span>
              {this.props.product.imdbRating &&
                this.props.product.imdbRating !== "N/A" && (
                  <strong>
                    boxoffice:{" "}
                    {parseFloat(this.props.product.imdbRating) > 7 && "hit"}
                    {parseFloat(this.props.product.imdbRating) <= 7 && "flop"}
                  </strong>
                )}

              <p>{this.props.product.Plot}</p>
            </Modal.Body>
          )}

          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleDescModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Home;
