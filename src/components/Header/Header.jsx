import React from 'react';
import { IoCarSportOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import styles from './Header.module.scss';

function Header() {
   return (
      <header className={styles.header}>
         <div className={styles.header_content}>
            <Link
               to="/"
               className={styles.icon}
            >
               <IoCarSportOutline className={styles.icon} />
            </Link>

            <div className={styles.menu}>
               <Link
                  to="/"
                  className={styles.link}
               >
                  Головна
               </Link>
               <Link
                  to="/variables"
                  className={styles.link}
               >
                  Всі характеристики
               </Link>
            </div>
            <FaUserAlt className="logout-icon" />
         </div>
      </header>
   );
}

export default Header;
