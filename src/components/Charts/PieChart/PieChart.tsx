import { Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
    labels: string[];
    datasets: any;
    options?: any;
    title?: string;
}

const PieChart: React.FC<PieChartProps> = ({ labels, datasets, title, options }: PieChartProps) => {
    const data = {
        labels: labels,
        datasets: datasets
    };

    return (
        <>
            <Typography component={"h2"}>{title}</Typography>
            <div style={{ height: 400 }}>
                <Pie data={data} options={options}></Pie>
            </div>
        </>
    );
};

export default PieChart;
