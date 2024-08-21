import React, { useState } from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiSolidPencil, BiArrowBack } from "react-icons/bi";
import ProductModal from "./ProductModal";
import { useProductListData } from "../redux/hooks";
import { useSelector } from "react-redux";

const ProductList = () => {
  const productList = useProductListData();
  const currencyvalue = useSelector((state) => state.currency);
  const { symbol, value } = currencyvalue;
  const isListEmpty = productList.length === 0;

  return (
    <div>
      <div className="d-flex align-items-center">
        <BiArrowBack size={18} />
        <div className="fw-bold mt-1 mx-2 cursor-pointer">
          <Link to="/">
            <h5>Go Back</h5>
          </Link>
        </div>
      </div>
      <Row>
        <Col className="mx-auto" xs={12} md={8} lg={9}>
          <Card className="d-flex p-3 p-md-4 my-3 my-md-4 ">
            {isListEmpty ? (
              <div className="d-flex flex-column align-items-center">
                <h3 className="fw-bold pb-2 pb-md-4">No products present</h3>
              </div>
            ) : (
              <div className="d-flex flex-column">
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <h3 className="fw-bold pb-2 pb-md-4">Products List</h3>
                </div>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Product Name</th>
                      <th>Description</th>
                      <th>Price/Rate</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((product, index) => (
                      <ProductRow
                        value={value}
                        symbol={symbol}
                        key={product.id}
                        product={product}
                        index={index}
                      />
                    ))}
                  </tbody>
                </Table>
              </div>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

const ProductRow = ({ product, index, value, symbol }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (event) => {
    event.preventDefault();
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <tr>
        <td>{index + 1}</td> {/* Row number */}
        <td className="fw-normal">{product.name}</td>
        <td className="fw-normal">{product.description}</td>
        <td className="fw-normal">
          {symbol}
          {product.price * value}
        </td>
        <td style={{ width: "5%" }}>
          <Button variant="outline-primary" onClick={openModal}>
            <div className="d-flex align-items-center justify-content-center gap-2">
              <BiSolidPencil />
            </div>
          </Button>
        </td>
      </tr>
      <ProductModal
      value = {value}
      symbol = {symbol}
        showModal={isOpen}
        closeModal={closeModal}
        product={product}
      />
    </>
  );
};

export default ProductList;
