import React from 'react';
import styles from './Variables.module.scss'

function Variables(props) {
   return (
      <div className={styles.wrapper}>
         <div>
            <h4 className={styles.title}>{props.title}</h4>
         </div>
         <div>
         <p className={styles.text}>{props.value}</p>
         </div>
      </div>
   );
}

export default Variables;
