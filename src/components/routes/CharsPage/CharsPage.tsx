import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Button } from 'antd';

import marvelStore from '../../../stores/marvelStore';
import Search from '../../Search';
import classes from './CharsPage.module.scss';
import Chars from '../../Chars';

const CharsPage: React.FC = () => {

  useEffect(() => {
    marvelStore.loadData();
  }, []);

  return (
    <main className={classes.component}>
      <Link to={'/about'} style={{ marginTop: '20px' }}><Button type={'primary'}>Вернуться назад</Button></Link>
      <section className={classes.content}>
        <Search search={marvelStore.search} handleSearch={marvelStore.handleSearch} />
        <div className={classes.btns}>
          <Button className={classes.btn} onClick={marvelStore.onToggleShowChars}>Скрыть/показать</Button>
          <Link to={'/chars/list'}><Button className={classes.btn}>Список</Button></Link>
          <Link to={'/chars/cards'}><Button className={classes.btn}>Карточки</Button></Link>
          <Link to={'/chars/graph'}><Button className={classes.btn}>Графика</Button></Link>
        </div>
        <Chars errorLoading={marvelStore.isErrorLoading}
          charsLoading={marvelStore.isLoading}
          chars={marvelStore.chars}
          active={marvelStore.isShowChars}
          search={marvelStore.search} />
      </section>
    </main>
  );
};

export default observer(CharsPage);
