import React from "react";
import { Modal, Form, Row, Col, Button } from "react-bootstrap";

const OrdersHistory = (props) => {
  const { purchasedProducts } = props;
  console.log(purchasedProducts);
  return (
    <Modal show={props.show} onHide={props.hide} dir="rtl" centered>
      {purchasedProducts[0] ? (
        <>
          <Modal.Header className="bg-light">
            <Modal.Title>فاکتور های خرید</Modal.Title>
          </Modal.Header>

          <Modal.Body as={Form} className="text-right bg-light">
            {purchasedProducts.map((purchasedProduct) => {
              return (
                <div
                  className="bg-warning  mb-2 p-4"
                  style={{ borderRadius: "19px" }}
                >
                  <Row className="border-bottom border-light pb-1">
                    <Col className="text-dark">شماره فاکتور :</Col>
                    <Col className="">{purchasedProduct._id}</Col>
                  </Row>
                  <Row className="border-bottom border-light pb-1">
                    <Col className="text-dark">زمان سفارش :</Col>
                    <Col className="px-0">{purchasedProduct.createdAt}</Col>
                  </Row>
                  <Row className="border-bottom border-light pb-1">
                    <Col className="text-dark" xs={12}>
                      محصولات :
                    </Col>
                    <Col>
                      {purchasedProduct.product.map((product) => {
                        return (
                          <Col className="text-center text-light">
                            {product.name}
                          </Col>
                        );
                      })}
                    </Col>
                  </Row>
                  <Row className="border-bottom border-light pb-1">
                    <Col className="text-dark">قیمت کل :</Col>
                    <Col className="">{purchasedProduct.price} تومن</Col>
                  </Row>
                </div>
              );
            })}
          </Modal.Body>
        </>
      ) : null}

      <Modal.Footer>
        <Col xs={12} className="text-center">
          <Button
            onClick={props.hide}
            variant="info w-100"
            style={{ borderRadius: "100px" }}
          >
            تایید
          </Button>
        </Col>
      </Modal.Footer>
    </Modal>
  );
};

export default OrdersHistory;
