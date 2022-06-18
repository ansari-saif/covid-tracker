import { useEffect, useState } from 'react';
import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';


function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('')

  useEffect(() => {
    async function fetchFunc() {
      const fetchedatadData = await fetchData();
      setData(fetchedatadData);
    }
    fetchFunc();
  }, []);

  const handleCountryChange = async (country) => {
    const data = await fetchData(country);
    setCountry(country);
    setData(data);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.image}> Covid - 19</h1>
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
}

export default App;
