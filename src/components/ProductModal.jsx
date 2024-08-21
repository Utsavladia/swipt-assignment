import React, { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import EditableField from "./EditableField";
import { useDispatch } from "react-redux";
import { updateProduct } from "../redux/productSlice";
import { updateInvoiceItems } from "../redux/invoicesSlice";

const ProductModal = (props) => {
  const [item, setItem] = useState({ ...props.product });
  const dispatch = useDispatch();

  const handleInputChnage = (evt) => {
    const { name, value } = evt.target;
    const updatedItem = {
      ...item,
      [name]: value,
    };
    setItem(updatedItem);
  };

  const handleSave = () => {
    dispatch(
      updateInvoiceItems({
        itemId: item.id,
        updatedProduct: item,
      })
    );
    dispatch(
      updateProduct({
        itemId: item.id,
        updatedProduct: item,
      })
    );

    props.closeModal();
  };

  return (
    <Modal show={props.showModal} onHide={props.closeModal} size="lg" centered>
      <div className="p-3">
        <Table>
          <thead>
            <tr>
              <th>ITEM</th>
              <th>PRICE/RATE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "100%" }}>
                <EditableField
                  onItemizedItemEdit={handleInputChnage}
                  cellData={{
                    type: "text",
                    name: "name", // Correct field name
                    placeholder: "Item name",
                    value: item.name, // Bind value to state
                    id: item.id,
                  }}
                />
                <EditableField
                  onItemizedItemEdit={handleInputChnage}
                  cellData={{
                    type: "text",
                    name: "description", // Correct field name
                    placeholder: "Item description",
                    value: item.description, // Bind value to state
                    id: item.id,
                  }}
                />
              </td>
              <td style={{ minWidth: "130px" }}>
                <EditableField
                  onItemizedItemEdit={handleInputChnage}
                  cellData={{
                    leading: props.symbol,
                    type: "number",
                    name: "price", // Correct field name
                    min: 1,
                    step: "0.01",
                    precision: 2,
                    textAlign: "text-end",
                    value: item.price*props.value, // Bind value to state
                    id: item.id,
                  }}
                />
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="w-50">
          <Button variant="primary w-50" onClick={handleSave}>
            Save
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
