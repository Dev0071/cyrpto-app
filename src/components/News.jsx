import { useGetCryptoNewsQuery } from '../services/CrptoNewsApi';
import React from 'react';
import { Card, Row, Col, Avatar, Typography, Select } from 'antd';
import moment from 'moment/moment';
const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const demoImage =
    'https://plus.unsplash.com/premium_photo-1671997600458-00d572868c4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3J5cHRvY3VycmVuY3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60';
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: 'Cryptocurrency',
    count: simplified ? 12 : 52,
  });

  if (!cryptoNews?.value) return 'Loading';
  console.log(cryptoNews);

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className='news-card'>
            <a href={news.url} target='_blank' rel='noreferrer'>
              <div className='news-image-container'>
                <Title className='news-title' level={4}>
                  {news.name}
                </Title>
                <img
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                  alt={news.name}
                />
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
