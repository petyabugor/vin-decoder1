import React from 'react';
import styles from './Search.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoCloseOutline } from 'react-icons/io5';
import { useState, useEffect } from 'react';

function Form({
   searchValue,
   setSearchValue,
   valueFromButtonClick,
   setValueFromButtonClick,
   list,
   setList,
}) {
   const [message, setMessage] = useState('');
   const vinValidation = () => {
      const regEx = /^(?=.*[0-9])(?=.*[A-z])[0-9A-z-]{17}$/g;
      if (!regEx.test(searchValue)) {
         setMessage('Vin is Not Valid');
      } else {
         setMessage('');
      }
   };
   const handleClick = (event) => {
      setValueFromButtonClick(searchValue);

      if (searchValue) {
         setList((ls) => [...ls, searchValue]);
         localStorage.setItem('vin', JSON.stringify(list));
      } else {
         return false;
      }
      setSearchValue('');
      event.preventDefault();
   };

   return (
      <div className={styles.root}>
         <form
            onSubmit={handleClick}
            className={styles.form}
         >
            <div className={styles.inputWrapper}>
               <input
                  minLength={17}
                  value={searchValue}
                  onChange={(event) => setSearchValue(event.target.value)}
                  className={styles.input}
                  placeholder="Введіть VIN..."
               />
               {searchValue && (
                  <IoCloseOutline
                     onClick={() => setSearchValue('')}
                     className={styles.closeIcon}
                  />
               )}
            </div>
            <p className={styles.error}>{message}</p>
            <div className={styles.buttonWrapper}>
               <AiOutlineSearch className={styles.icon} />
               <button
                  onClick={vinValidation}
                  type="submit"
                  className={styles.button}
               >
                  Перевірити авто
               </button>{' '}
            </div>
         </form>
      </div>
   );
}

export default Form;
