/* eslint-disable react/prop-types */
const SingleCard = ({ gadget }) => {
  const {
    product_image,
    product_title,
    price,
  } = gadget;
  return<div className="card bg-base-100 h-fit shadow-xl">
  <figure className="px-10 pt-10  h-64">
    <img
      src={product_image}
      alt={product_title}
      className="rounded-xl " />
  </figure>
  <div className="card-body items-start text-start">
    <h2 className="card-title">{product_title}</h2>
    <p>Price:{price}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>;
};

export default SingleCard;
