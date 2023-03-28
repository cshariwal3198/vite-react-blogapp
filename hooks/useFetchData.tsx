import React, { useEffect, useState } from 'react';
import { ISingleBlogObject, IAllBlogFetch, ISingleBlogFetch } from '../src/types';

function useFetchData(request: string): IAllBlogFetch | ISingleBlogFetch {
    const [data, setData] = useState([]);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        setTimeout(() => {
            fetch(request).then((res) =>res.json())
                .then((data) => { setData(data); setPending(false); })
                .catch((err) => { setError("failed to fetch, please try after some time"); setPending(false); });
        }, 2000);
    }, []);

    return { data, pending, error };
}

export default useFetchData;