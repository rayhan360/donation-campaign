/* eslint-disable react/prop-types */

import { PieChart, Pie, Cell } from 'recharts';

const MyPieChart = ({ selectionDonation, totalDonation }) => {
  // Calculate the percentage based on the formula: (selectionDonation / totalDonation) * 100
  const percentage = ((selectionDonation / totalDonation) * 100).toFixed(2);

  // Calculate the remaining percentage (100 - percentage)
  const remainingPercentage = (100 - percentage).toFixed(2);

  // Data for the pie chart
  const data = [
    { name: 'Selection Donation', value: percentage },
    { name: 'Remaining', value: remainingPercentage },
  ];

  // Colors for the pie chart
  const colors = ['#0088FE', '#FF8042'];

  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        data={data}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        paddingAngle={5}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default MyPieChart;
