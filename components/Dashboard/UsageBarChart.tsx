import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend,  Tooltip, XAxis  } from "recharts";


const UsageBarChart = () => {
  const [data, setData] = useState<any>([]);
  useEffect (()=>{
  const barData = [
  {  name: 'Jan', used: 4000, unused: 2400  },
  {  name: 'Feb', used: 6000, unused: 1398 },
  {  name: 'Mar', used: 2000, unused: 5800 },
  {  name: 'App', used: 2780,  unused: 3908 },
  { name: 'May',
    used: 1890,
    unused: 4800,
   
  },
  {
    name: 'Jun',
    used: 2390,
    pv: 3800
  },
  {
    name: 'Jul',
    used: 3490,
    unused: 4300
  },
];
setData(barData)
  }, [])
  

  return (
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
      }}
      barSize={40}
        >
          <XAxis dataKey="name" />
          <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="used" stackId="a" fill="#6366F1" radius={[10, 10, 0, 0]} />
          <Bar dataKey="unused" stackId="a" fill="#F5F7FF"  radius={[10, 10, 0, 0]}/>
        </BarChart>
     
    );
  }

export default UsageBarChart;


