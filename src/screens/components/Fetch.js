/*const useFetch = async (apiLink) => {
  try{
    const response = await fetch(process.env.REACT_APP_API_IP + apiLink);
    console.log(await response.json());
  } catch (error){
    console.log(error)
  }
}
export default useFetch;*/
// const useFetch = async (url) => {
//   try{
//     const response = await fetch(process.env.REACT_APP_API_IP + url);
//     console.log( await response.text());

//   } catch (error){
//     console.log(error)

//   }

// };
// export default useFetch;
import { useState, useEffect } from 'react';
import Spinner from '../../Appstate';
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_IP + url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;