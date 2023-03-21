import React from 'react';
import { Routes, Link, Route } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import {
  Navbar,
  Exchanges,
  News,
  Cryptocurrencies,
  CryptoDetails,
  Homepage,
} from './components';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <main className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
              <Route path='/exchanges' element={<Exchanges />} />
              <Route path='/crypto/:coinID' element={<CryptoDetails />} />
              <Route path='/news' element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className='footer'>
          <Typography.Title
            level={5}
            style={{ color: 'white', textAlign: 'center' }}
          >
            Cryptoverse <br />
            All rigts reserved
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchange</Link>
            <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
            <Link to='/news'>news</Link>
          </Space>
        </div>
      </main>
    </div>
  );
};

export default App;
