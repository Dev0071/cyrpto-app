import { useGetCryptoNewsQuery } from '../services/CrptoNewsApi';
import { useGetCryptosQuery } from '../services/CryptoApi';
import React, { useState } from 'react';
import { Card, Row, Col, Avatar, Typography, Select } from 'antd';
import moment from 'moment/moment';
import Loader from './Loader';
const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const demoImage =
    'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';
  const [newsCategory, setNewsCategory] = useState('Crptocurrency');
  const { data } = useGetCryptosQuery(50);

  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 12 : 52,
  });

  if (!cryptoNews?.value) return <Loader />;
  // console.log(cryptoNews);

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className='select-news'
            placeholder='select a crypto'
            optionFilterProp='children'
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(option.toLowerCase()) >= 0
            }
          >
            <Option value='Crptocurrency'>Cryptocurrrency</Option>
            {data?.data?.coins.map((coin) => (
              <Option value={coin.name}>{coin.name}</Option>
            ))}
          </Select>
        </Col>
      )}
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
                  style={{ height: '100px', width: '100px' }}
                />
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
              <div className='provider-container'>
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                    alt='news'
                  />
                  <Text className='provider-name'>
                    {news.provider[0]?.name}
                  </Text>
                </div>
                <Text>
                  {moment(news.datePublished).startOf('ss').fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
