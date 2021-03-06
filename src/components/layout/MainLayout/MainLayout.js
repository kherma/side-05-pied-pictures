import React, { useEffect } from 'react';
import styles from './MainLayout.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Header from '../Header/HeaderContainer';
import ImageItemInfo from '../../feature/ImageItemInfo/ImageItemInfoContainer';

const MainLayout = ({ children, theme, favoritesFromLocalstorage }) => {
  useEffect(() => {
    localStorage.getItem('favorites') && favoritesFromLocalstorage();
  }, [favoritesFromLocalstorage]);

  return (
    <div
      className={clsx(
        styles.root,
        theme === 'light' ? styles.light : styles.dark
      )}
    >
      <Header />
      <main className={styles.main}>{children}</main>
      {window.matchMedia('(max-width: 1199px)').matches && <ImageItemInfo />}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.string,
  favoritesFromLocalstorage: PropTypes.func,
};

export default MainLayout;
