import React from 'react';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import classes from './Search.module.scss';

type SearchProps = {
  search: string;
  handleSearch: React.ChangeEventHandler<HTMLInputElement>;
};

const Search: React.FC<SearchProps> = (props) => {
  const { search, handleSearch } = props;
  return (
    <>
      <Input id="name" size={'large'} prefix={<UserOutlined/>} className={classes.component} type="text" placeholder="Enter the name of char" value={search} onChange={handleSearch}/>
    </>
  );
};

export default Search;
