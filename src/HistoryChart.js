import {useAxios} from "./hooks/useAxios"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from "moment/moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

export const HistoryChart = ({coin}) => {
  const {response} = useAxios("coins/bitcoin/market_chart?vs_currency=eur&days=30")
 

  if(!response){
    return <div>Loading</div>
  }


  const coinChartData = response.prices.map(value => ({x: value[0], y: value[1].toFixed(2)}))
  
  const options = {
    responsive : true,
    maintainAspectRatio : false,
    scales:{
      x:{
        display: false,
        ticks:{
          maxTicksLimit: 7,
        }
      },
      y: {
        display: false,
      }
    }
  }

  const data = {
    labels: coinChartData.map(value => moment(value.x).format("MMM DD")),
    datasets : [
      {
        fill: true,
        data: coinChartData.map(value => value.y),
        label:"",
        borderColor: "#724FE5",
        backgroundColor: "rgb(114, 79, 229, 0.3)",
        pointRadius: 0,
        borderWidth: 2.3,
      }
    ]
  }

  return(
      <Line options={options} data={data} className="rounded-[20px] lg:rounded-[36px]"> </Line>
  )
}