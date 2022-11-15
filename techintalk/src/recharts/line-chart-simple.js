import { LineChart, Line, XAxis, YAxis } from "recharts";

function LineChartSimple() {

    const expenseData = [
        { day: 'Monday', expense:100},
        { day: 'Tuesday', expense:300},
        { day: 'Wednesday', expense:50},
        { day: 'Thursday', expense:400},
        { day: 'Friday', expense:150}
    ];
    return (
      <div>
        <LineChart 
            width={500}
            height={300}
            data={expenseData}>
                <XAxis dataKey="day" />
                <Line type="monotone" 
                dataKey="expense"
                stroke="#fd3330"
                />
                <YAxis dataKey="expense" />
            </LineChart>
      </div>
    );
  }
  
  export default LineChartSimple;