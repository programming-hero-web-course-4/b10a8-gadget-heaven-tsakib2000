import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import useTitle from "../Components/useTitle";
import { useLoaderData } from "react-router-dom";



const Statistic = () => {
    const data =useLoaderData()
    useTitle('Statistic')
    return (<>
      <div className="p-8 text-center gap-5 flex flex-col justify-center items-center bg-banner">
        <h1 className="text-white text-4xl font-bold capitalize">Statistics</h1>
        <p className="text-white font-thin">
        The chart displays the prices of various tech products. The y-axis represents the price in dollars, and the x-axis shows the product names.</p>

      </div>
        <div className="p-5 flex justify-center items-center">
            <BarChart width={1700} height={700} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey='product_title'  />
  <YAxis dataKey='price' />
  <Tooltip />
  <Legend />
  <Bar dataKey="price" fill="#8884d8" />
  <Bar dataKey="product_title" fill="#9538E2" />
</BarChart>
        </div>
        </>
    );
};

export default Statistic;