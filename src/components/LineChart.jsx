import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

const LineChart = ({ coinHistory, coinName, currentPrice }) => {
  const coinPrice = [];
  const coinTimeStamp = [];

  //   for (let i = 0; i < coinHistory?.data?.history.length; i++) {
  //     coinPrice.push(coinHistory?.data?.history[i].price)
  //   }

  coinHistory?.data?.history.map((item) => {
    coinPrice.push(item.price);
    coinTimeStamp.push(new Date(item.timestamp).toLocaleDateString());
  });
  // console.log(coinPrice);
  console.log(coinTimeStamp);

  const data = {
    label: coinTimeStamp,
    datasets: [
      {
        label: 'Price in USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      y: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <>
      <Row className='chart-header'>
        <Title level={2} className='chart-title'>
          {coinName} Price Chart
        </Title>
        <Col className='price-container'>
          <Title level={5} className='price-change'>
            {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className='current-price'>
            current {coinName} price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
