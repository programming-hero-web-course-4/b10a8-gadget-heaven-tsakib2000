import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleCard = ({ gadget }) => {
  const {
    product_image,
    product_title,
    price,
    product_id
  } = gadget;

  return<div className="card bg-base-100 h-fit shadow-xl">
  <figure className="px-10 pt-10 py-4  h-64">
    <img
      src={product_image}
      alt={product_title}
      className="rounded-xl " />
  </figure>
  <div className="card-body items-start text-start">
    <h2 className="card-title">{product_title}</h2>
    <p>Price:${price}</p>
    <div className="card-actions">
      <NavLink to={`/details/${product_id}`} className="btn text-violet-600 bg-white border-violet-600 rounded-3xl" >View Details</NavLink>
    </div>
  </div>
</div>;
};

export default SingleCard;
