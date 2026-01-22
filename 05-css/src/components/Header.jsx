import React from 'react'
import styles from '../styles/Header.module.css'
const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.name}>Company</div>
        <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header