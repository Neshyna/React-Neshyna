import "./styles.css";
import Product from "../../components/Product/Product";
import { products } from "./data";

function HW5() {
  const productCards = products.map((products) => {
    return (
      <div >
        <Product 
        key={products.id}
        productName={products.name}
        productPrice={products.price} 
        />
      </div>
    );
  });

  return <div className="hw5-wrapper">
   <div className="title"><h1>Products</h1></div> 
   <div className="prodCards">{productCards}</div> 
    </div>;
}
export default HW5;
