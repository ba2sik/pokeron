import { useEffect, useState } from 'react';
import axios from 'axios';
import { sleep } from '../utils/sleep.js';

const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('useFetch');

        const fetchData = async () => {
            setIsLoading(true);
            try {
                // await sleep(50000);
                const response = await axios.get(url, options);
                setData(response.data);
            } catch (e) {
                setError(e.response.data);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [url]);

    return [data, isLoading, error];
};

export default useFetch;
