import ProductForm from "./ProductForm";
import { useState } from "react";
import AddProduct from "./AddProduct";

const NewProduct = ({ products, setProducts }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onSaveProduct = (newProductData) => {
    setProducts((prevState) => [newProductData, ...prevState]);
  };

  return (
    <div className="new-product-wrapper">
      {isOpen ? (
        <ProductForm  setIsOpen={setIsOpen} onSaveProduct={onSaveProduct} products={products} />
      ) : (
        <AddProduct setIsOpen={setIsOpen} />
      )}
    </div>
  );
};

export default NewProduct;
