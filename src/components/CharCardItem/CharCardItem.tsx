import React from 'react';

import { CharType } from '../../models/charType';
import styles from './CharCardItem.module.scss';

const CharListItem: React.FC<CharType> = ({ id, name, path, extension }) => (
  <li className={styles.component} tabIndex={0}>
    <img src={`${path}.${extension}`} alt={name} className={styles.image}/>
    <div className={styles.name}>{name}</div>
  </li>
);

export default CharListItem;
