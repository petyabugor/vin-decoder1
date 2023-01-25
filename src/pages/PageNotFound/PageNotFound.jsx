import React from 'react';
import styles from './PageNotFound.module.scss';

const PageNotFound = () => {
   return (
      <div>
         <h1 className={styles.title}>PageNotFound</h1>
         <h3 className={styles.text}>This URL is not correct</h3>
      </div>
   );
};

export default PageNotFound;
