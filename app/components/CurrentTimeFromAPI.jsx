'use client';

import { useEffect, useState } from 'react';

const CurrentTimeFromAPI = () => {
    const [apiResponse, setApiResponse] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/currentTime')
            .then((res) => res.json())
            .then((data) => {
                setApiResponse(data.message);
                setLoading(false);
            });
    },
        []);
    return (
        <div className='pt-4'>
            The message from the API is: <strong>{apiResponse}</strong>
        </div>
    )
}

export default CurrentTimeFromAPI