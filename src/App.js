import { useEffect, useState } from 'react';
import { fetchData } from './api';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

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
    setCountry(data);
  }

  return ( 
    <div>
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} /> 
    </div>
  );
}

export default App;
