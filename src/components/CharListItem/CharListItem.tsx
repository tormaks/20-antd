import React from 'react';

import { CharType } from '../../models/charType';
import styles from './CharListItem.module.scss';

const CharListItem: React.FC<CharType> = (props) => {
  const { id, name, path, extension } = props;
  return (
    <li className={styles.component}>
      <div>
        <h2>{id}</h2>
        <p>{name}</p>
      </div>
      <img src={`${path}.${extension}`} alt={name} className={styles.image}/>
    </li>
  );
};

export default CharListItem;
