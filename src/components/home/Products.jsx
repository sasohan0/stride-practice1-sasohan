/* eslint-disable no-undef */
import SingleProduct from "../SingleProduct";

// eslint-disable-next-line react/prop-types
const Products = ({ data }) => {
  return (
    <div className="bg-purple-100" id="products">
      <h1 className="my-8 text-2xl font-bold text-center">Our Products</h1>

      <div className="flex flex-wrap gap-7 px-6 justify-center items-center ">
        {
          // eslint-disable-next-line react/prop-types
          data.map((shoe) => (
            <SingleProduct key={shoe.id} shoe={shoe} />
          ))
        }
      </div>
    </div>
  );
};

export default Products;
