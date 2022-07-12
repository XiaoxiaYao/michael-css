import React from 'react';
import logo from './logo.svg';
import './App.module.scss';
import styles from './index.module.scss';

function App() {
  return (
    <div className="App">
      <h1>This is an h1</h1>
      <a href="#">this is an anchor tag</a>
      <p className={styles.error}>this is an error</p>
      <p className={styles.notification}>this is a notification</p>
      <button>click me</button>
    </div>
  );
}

export default App;
