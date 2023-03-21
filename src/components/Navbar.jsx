import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutline,
} from '@ant-design/icons';

const Navbar = () => {
  return (
    <nav className='nav-container'>
      <div className='logo-container'>
        <Avatar
          src={logo}
          size='large'
        />
        <Typography.Title
          level={2}
          className='logo'
        >
          <Link to='/'>Cryptoverse</Link>
        </Typography.Title>
        {/* <Button className='menu-control-container'></Button> */}
      </div>
      <Menu theme='dark'>
        <Menu.Item icon={<HomeOutlined />}>
          <Link to='/'>Home</Link>
        </Menu.Item>{' '}
        <Menu.Item icon={<FundOutlined />}>
          <Link to='/cryptocurrencies'>Cryptocurencies</Link>
        </Menu.Item>{' '}
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to='/exchanges'>Exchanges</Link>
        </Menu.Item>{' '}
        <Menu.Item icon={<BulbOutlined />}>
          <Link to='/news'>News</Link>
        </Menu.Item>
      </Menu>
    </nav>
  );
};

export default Navbar;
