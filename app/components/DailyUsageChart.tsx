import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Chart,
  LineSeries,
  Legend,
  Title
} from '@devexpress/dx-react-chart-material-ui';
import { ValueScale } from '@devexpress/dx-react-chart';
import { Typography } from '@mui/material';

interface IDataItem {
  month: string,
  sale: number,
  day: string
}

interface TitleProps {
  text: string
}

const chartData: IDataItem[] = [
  { month: 'Jan', day: "7", sale: 2 },
  { month: 'Jan', day: "8", sale: 5 },
  { month: 'Jan', day: "9", sale: 7 },
  { month: 'Jan', day: "10", sale: 3 },
  { month: 'Jan', day: "11", sale: 10 },
  { month: 'Jan', day: "12", sale: 4 },
  { month: 'Jan', day: "13", sale: 12 },
  { month: 'Jan', day: "14", sale: 13 },
  { month: 'Jan', day: "15", sale: 5 },
  { month: 'Jan', day: "16", sale: 6 },
  { month: 'Jan', day: "17", sale: 1 },
  { month: 'Jan', day: "18", sale: 14 },
  { month: 'Jan', day: "19", sale: 5 },
  { month: 'Jan', day: "20", sale: 10 },
  { month: 'Jan', day: "21", sale: 11 },
  { month: 'Jan', day: "22", sale: 12 },
  { month: 'Jan', day: "23", sale: 15 },
  { month: 'Jan', day: "24", sale: 15 },
  { month: 'Jan', day: "25", sale: 9 },
  { month: 'Jan', day: "26", sale: 8 },
  { month: 'Jan', day: "27", sale: 10 },
  { month: 'Jan', day: "28", sale: 11 },
  { month: 'Jan', day: "29", sale: 3 },
  { month: 'Jan', day: "30", sale: 6 },
  { month: 'Feb', day: "1", sale: 6 },
  { month: 'Sep', day: "2", sale: 4 },
];

const DailyUsageChart = () => {
  return (
    <Paper>
      <Chart
        data={chartData}
      >
        <ValueScale name="sale" />
        {/* <ValueScale name="total" /> */}

        <ArgumentAxis />
        <ValueAxis scaleName="sale" showGrid={false} showLine={true} showTicks={true} />
        {/* <ValueAxis scaleName="total" position="right" showGrid={false} showLine={false} showTicks={false} /> */}
        <Title
          text="Dayli Usage"
        />
        <BarSeries
          name="Searches"
          valueField="sale"
          argumentField="day"
          scaleName="sale"
        />

        <LineSeries
          name="Domain Searches"
          valueField="sale"
          argumentField="day"
        //scaleName="total"
        />
        <Legend />
      </Chart>
    </Paper>
  );
}

export default DailyUsageChart
