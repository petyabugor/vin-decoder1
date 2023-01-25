import React, { useState } from 'react';
import styles from './VariableId.module.scss';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


function VariableId({ isLoaded }) {
   const { VariableId } = useParams();

   const [variable, setVariable] = useState([]);
   useEffect(() => {
      fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json`)
         .then((res) => res.json())
         .then((arr) => {
            setVariable(arr.Results);
         })
         .catch((err) => {
            console.log(err);
         });
      window.scrollTo(0, 0);
   }, []);

   return (
      <div className={styles.wrapper}>
      {isLoaded
      ? <p className={styles.text}>Загрузка...</p>
   :variable
      .filter((c) => c.ID === parseInt(VariableId))
      .map((variable) => (
         <div
            key={variable.ID}
            
         >
            <div className={styles.content}>
               <p className={styles.title}>{variable.Name}</p>
               <p className={styles.text}>
                  {variable.Description.replace(/<\/?[a-zA-Z]+>/gi, '')}
               </p>
            </div>
         </div>
      ))}
   <Link to='/' className={styles.buttonWrapper}>
      <button
         type="submit"
         className={styles.button}
      >
         Назад
      </button>{' '}
   </Link>
         
      </div>
   );
}

export default VariableId;
