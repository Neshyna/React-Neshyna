import "./styles.css";

function showProduct({productName,productPrice}) {
  return (
    <div className="product-wrapper">
      <div>{productName}</div>
      <div>{productPrice}</div>
    </div>
  );
}

export default showProduct;
