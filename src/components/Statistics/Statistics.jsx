import { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";





const Statistics = () => {
    const [donate, setDonate] = useState([])

    console.log(donate);
    useEffect(() => {
        const donateItems = JSON.parse(localStorage.getItem("donation"));
        setDonate(donateItems)
    }, [])



    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const data = [
        { key: "Selection Donation", value: 12 },
        { key: "remaining", value: donate.length },
    ];

    const COLORS = ["#FF444A", "#00C49F",];
    return (
        <div className="lg:flex flex-col lg:justify-center items-center lg:h-[70vh]">
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={180}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="key"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>

            <div className="md:flex gap-10">
                <div className="flex items-center gap-3">
                    <h1>Your Donation:</h1>
                    <div className="bg-[#00C49F] w-36 h-2"></div>
                </div>
                <div className="flex items-center gap-3">
                    <h1>Total Donation:</h1>
                    <div className="bg-[#FF444A] w-36 h-2"></div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;