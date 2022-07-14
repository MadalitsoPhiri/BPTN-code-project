import {useEffect, useState} from 'react';
import axios from 'axios';

interface useAxiosProps {
  url: string;
  method: 'get' | 'post' | 'delete' | 'put';
  body?: any;
  headers?: any;
}

const useAxios = ({
  url,
  method,
  body = null,
  headers = null,
}: useAxiosProps) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);

  const fetchData = () => {
    axios[method](url, JSON.parse(headers), JSON.parse(body))
      .then(res => {
        setResponse(res.data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {response, error, loading};
};

export default useAxios;
