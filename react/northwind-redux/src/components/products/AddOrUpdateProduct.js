import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productsAction";
import ProductDetail from "./ProductDetail";

const AddOrUpdateProduct = ({
  products,
  categories,
  getProducts,
  getCategories,
  saveProduct,
  history,
  ...props
}) => {
  const [product, setProduct] = useState({ ...props.product });
  const [errors,setErrors] = useState({})
  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    } 
    setProduct({ ...props.product });
  }, [props.product]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((previusProduct) => ({
      ...previusProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));
    validate(name,value);
   
    
  };

  const validate = (name,value) =>{
    if(name==='productName' && value ===''){
      setErrors(previousErrors => ({
        ...previousErrors,productName:'Urun Ismi yazilmalidir'
      }))
    }
    else {
      setErrors(previousErrors => ({
        ...previousErrors,productName:''
      }))
    }
  }

  const handleSave = (event) => {
    event.preventDefault();
    saveProduct(product).then(() => {
      history.push("/");
    });
  };

  return (
    <ProductDetail
      product={product}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    />
  );
};

export const getProductById = (products, productId) => {
  // eslint-disable-next-line eqeqeq
  let product = products.find((product) => product.id == productId) || null;
  return product;
};

const mapStateToProps = (state, ownProps) => {
  const productId = ownProps.match.params.productId;
  const product =
    productId && state.productListReducer.length > 0
      ? getProductById(state.productListReducer, productId)
      : {};
  return {
    product,
    products: state.productListReducer,
    categories: state.categoryListReducer,
  };
};

const mapDispatchToProps = {
  getCategories,
  saveProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct);
