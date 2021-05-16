import React from "react";
import { Modal,Form } from "react-bootstrap";

const OrdersHistory = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.hide}
      dir="rtl"
      centered
    >
      <Modal.Header>
        <Modal.Title>تاریخچه خرید ها</Modal.Title>
      </Modal.Header>

      <Modal.Body as={Form} className="text-right">
       
      </Modal.Body>

      {/* <Modal.Footer>
        <Col xs={12}>
          <Button
            onClick={sendNewUser}
            variant="primary"
            className="w-100"
            style={{ borderRadius: "100px" }}
          >
            تایید
          </Button>
        </Col>
      </Modal.Footer> */}
    </Modal>
  );
};

export default OrdersHistory;
