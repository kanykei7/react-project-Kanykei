import "./AdminProductCard.css";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { productsContext } from "../../../Context/ProductsContext";
import "./ProductCard.css"
const ProductCard = ({ item }) => {
  const id = item.id;
  const history = useHistory();
  console.log(history, "this");
  const { getProductDetails, saveProduct, deleteProduct } = useContext(
    productsContext
  );
  const [editStatus, setEditStatus] = useState(false);

  const [editedProduct, setEditedProduct] = useState({});

  const handleValue = (e) => {
    let newProduct = { ...editedProduct, [e.target.name]: e.target.value };
    setEditedProduct(newProduct);
  };
  const handleSave = () => {
    saveProduct(id, editedProduct, history);
    setEditStatus(false);
  };

  const handleEdit = (id) => {
    setEditStatus(true);
    getProductDetails(id);
  };

  const handleDelete = () => {
    deleteProduct(id).then(() => {
      history.push("/");
    });
  };
  return (
    <div>
      <div>
        <div className="pop">
          <div className="container">
            <div className="">
              <div className="car1">
                <div className="car12">
                  <div className="cart2">
                    <div className="all-cards1">
                      <div className="main-card1">
                        {editStatus ? (
                          <div className="edit-textareas">
                            <div className="first-area">
                              <p>Title:</p>
                              <textarea name="title" onChange={handleValue}>
                                {item.title}
                              </textarea>
                              <p>Description:</p>
                              <textarea name="description" onChange={handleValue} className="box-desc">{item.description}</textarea>
                              <p>First image:</p>
                              <textarea name="img" onChange={handleValue}>{item.img}</textarea>
                              <textarea name="type" onChange={handleValue}>{item.type}</textarea>
                              <textarea name="info" onChange={handleValue}>{item.info}</textarea>
                              <textarea name="secondImg" onChange={handleValue}>{item.secondImg}</textarea>
                            </div>
                          </div>
                        ) : (
                          <>
                            <div className="img-card1">
                              <img className="itemImg" src={item.img} alt="product-img" />
                            </div>
                            <div className="info-card1">
                              <h4>{item.title}</h4>
                              <p className="box-desc">{item.description}</p>
                             
                            </div>
                            <div className="btns-card1"></div>
                            
                          </>
                        )}
                        <div className="details_btns">
                          {editStatus ? (
                            <button className="btns-sho1p" onClick={handleSave}>
                              Сохранить
                            </button>
                          ) : (
                            <button
                              className="btns-sho1p"
                              onClick={() => handleEdit(item.id)}
                            >
                              Редактировать
                            </button>
                          )}
                          <button className="btns-sho1p" onClick={handleDelete}>
                            Удалить
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* : (
        "Details"
      )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
