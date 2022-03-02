import React from 'react';
import Chronometer from '../components/Chronometer';
import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss';

import { GlobalProvider } from '../context/GlobalContext';

function App() {
  return (
    <div className={style.AppStyle}>
      <GlobalProvider>
        <Form />
        <List />
        <Chronometer />
      </GlobalProvider>
    </div>
  );
}

export default App;
