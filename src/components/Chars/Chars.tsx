import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Button } from 'antd';

import marvelStore from '../../stores/marvelStore';
import { CharType } from '../../models/charType';
import CharListItem from '../CharListItem';
import Loading from '../Loading';
import ErrorLoading from '../Error';
import classes from './Chars.module.scss';
import CharCardItem from '../CharCardItem';
import GraphView from '../GraphView';

type CharsProps = {
  errorLoading: boolean;
  charsLoading: boolean;
  chars: CharType[];
  active: boolean;
  search: string;
};

const Chars: React.FC<CharsProps> = (props) => {
  const { view = 'list' } = useParams();
  const { errorLoading, charsLoading, chars, active, search } = props;

  const content = (
    <div>
      <ul style={{ display: active ? 'grid' : 'none' }} className={ view === 'cards' ?  classes.cards : classes.component}>
        {
          marvelStore.filterChars.slice(0, marvelStore.showCharsNumber).map((char: CharType) => {
            if (view === 'list') {
              return (
                <CharListItem key={char.id} {...char} path={char.thumbnail.path} extension={char.thumbnail.extension}/>
              );
            } else if (view === 'cards') {
              return (
                <CharCardItem key={char.id} {...char} path={char.thumbnail.path} extension={char.thumbnail.extension}/>
              );
            }
          })
        }
        {
          view === 'graph' && <GraphView/>
        }
      </ul>
      {
        view !== 'graph' && <Button
          onClick={marvelStore.onShowChars}
          style={{ display: marvelStore.isShowButtonMoreChars && active && !charsLoading ? 'block' : 'none' }}
          disabled={marvelStore.showCharsNumber === chars.length}
          className={classes.btn}
        >Показать ещё
        </Button>
      }
    </div>
  );

  const loading = charsLoading ? <Loading /> : null;
  const error = errorLoading ? <ErrorLoading /> : null;

  return (
    <>
      {loading}
      {error}
      {content}
    </>
  );
};

export default observer(Chars);
