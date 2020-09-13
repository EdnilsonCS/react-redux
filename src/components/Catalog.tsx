import React from 'react';
import { useSelector } from 'react-redux';

const Catalog: React.FC = () => {
  const catalog = useSelector(state => state);
  return <h1>Hello word</h1>;
};

export default Catalog;
