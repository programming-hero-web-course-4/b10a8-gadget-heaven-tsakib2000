/* eslint-disable react/prop-types */

const ReviewCard = ({ review }) => {
  const { name, description, date, image } = review;
  return (
    <div className="bg-white p-8 m-4 rounded-2xl flex gap-4 justify-start items-start">
      <div className="rounded-full">
        <img className="rounded-full w-16" src={image} alt="" />
      </div>
      <div>
        <h1 className="text-black font-bold">{name}</h1>
        <p className="text-xs text-gray-400">{date}</p>
        <p className="text-sm font-bold">{description}</p>

      </div>
    </div>
  );
};

export default ReviewCard;
