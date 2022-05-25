import { Table } from 'antd';
import React from 'react';
import Filter from './Components/Filter';
import Header from './Components/Header';
import TableProduct from './Components/TableProduct';
import './Product.scss';

const Product = () => {
  return (
    <div className='product-page'>
      <Header />
      <Filter />
      <TableProduct/>
    </div>
  );
};

export default Product;
