import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import useTitle from "../Components/useTitle";
import { useLoaderData } from "react-router-dom";



const Statistic = () => {
    const data =useLoaderData()
    useTitle('Statistic')
    return (
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
    );
};

export default Statistic;