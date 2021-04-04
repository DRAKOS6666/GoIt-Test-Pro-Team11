import React from 'react';
import Loader from 'react-loader-spinner';

import styles from './Loader.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const LoaderWithTitle = () => {
  return (
    <div className="loaderWrapper">
      <Loader
        type="Plane"
        color="#00BFFF"
        height={40}
        width={40}
        timeout={10000}
      />
      <h2>LOADING...</h2>
    </div>
  );
};

export default LoaderWithTitle;
