import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const Categories = ({ categories }) => {
  return (
    <>
      <div className="col-span-1">
        <div className="flex flex-col p-6 gap-4 bg-white  rounded-xl">
            <NavLink to='/' className={ ({isActive})=> isActive?' border-none btn rounded-2xl bg-banner' :'btn rounded-2xl' }>All Product</NavLink>
          {categories.map((category) => (
            <NavLink
              to={`/category/${category.category}`}
              className={ ({isActive})=> isActive?' border-none btn rounded-2xl bg-banner' :'btn rounded-2xl' }
              key={category.product_id}

            >
              {category.category}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
