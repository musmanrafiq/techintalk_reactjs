import React from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const data = [
    { 
        name: 'Jan',
        user1: 10000,
        user2: 8000,
   },
    {
        name: 'Feb',
        user1: 15000,
        user2: 16000
    }
];
function BarChartSimple() {

    return (
        <BarChart width={400} height= {300} data={data}>

            <XAxis dataKey="name" />
            <YAxis/>

            <Bar dataKey="user1" fill="#8884d8" />
            <Bar dataKey="user2" fill="#82CA9D" />
        </BarChart>
    );
}

export default BarChartSimple;