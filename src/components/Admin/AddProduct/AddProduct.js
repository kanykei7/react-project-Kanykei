import React, { useContext, useState } from "react";
import { productsContext } from "../../../Context/ProductsContext";
// import { productContext } from "../../../context/ProductContext";
import "./AddProduct.css";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    img: "",
    type:"",
    info:"",
    secondImg:""
  });
  const { postNewProduct } = useContext(productsContext);

  const handleValues = (e) => {
    let newProduct = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(newProduct);
  };

  const handleClick = () => {
    postNewProduct(product);
    setProduct({
      title: "",
      description: "",
      img: "",
      type:"",
      info:"",
      secondImg:""
    });
  };

  return (
    <div className="inps">
      <input
        className="inp-add"
        value={product.title}
        name="title"
        onChange={handleValues}
        type="text"
        placeholder="Заголовок"
      />
      <input
        className="inp-add"
        value={product.description}
        name="description"
        onChange={handleValues}
        type="text"
        placeholder="Описание"
      />
      <input
        className="inp-add"
        value={product.img}
        name="img"
        onChange={handleValues}
        type="text"
        placeholder="Изображение"
      />
      <input
        className="inp-add"
        value={product.type}
        name="type"
        onChange={handleValues}
        type="text"
        placeholder="Тип"
      />
      <input
        className="inp-add"
        value={product.info}
        name="info"
        onChange={handleValues}
        type="text"
        placeholder="Подробная информация"
      />
      <input
        className="inp-add"
        value={product.secondImg}
        name="secondImg"
        onChange={handleValues}
        type="text"
        placeholder="Второе изображение"
      />
      <button className="btn-add" onClick={handleClick}>
        Добавить
      </button>
    </div>
  );
};

export default AddProduct;
