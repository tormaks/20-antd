import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import 'antd/dist/antd.css';

import classes from './AboutPage.module.scss';

const AboutPage: React.FC = (props) => {
  return (
    <div className={classes.component}>
      <p className={classes.text}>Проект посвящен фанатам вселенной MARVEL,
        которые хотят найти своего любимого персонажа.</p>
      <Link to={'/chars'}>
        <Button className={classes.btn}>Найти персонажа</Button>
      </Link>
    </div>
  );
};

export default AboutPage;
