import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: controller.signal })
                .then(response => {
                    if(!response.ok) {
                        throw Error('Could not fetch the data for that resource');
                    }
                    return response.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(error => {
                    if(error.name === 'AbortError') {
                        console.log('fetch aborted');
                    }
                    else {
                        setIsPending(false);
                        console.log('Error is: ', error.message);
                    }
                })
        }, 500);

        return () => controller.abort();
    }, []);

    return { data, isPending, error };
}

// const useFetch = (url) => {
//     const [data, setData] = useState(null);
//     const [isPending, setIsPending] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect( () => {
//         const fetchUrl = async () => {
//             try {
//                 const response = await fetch(url);
//                 if(!response.ok) {
//                     throw new Error('Could not fetch data for that resource');
//                 }
//                 const data = await response.json();
//                 setData(data);
//                 setIsPending(false);
//                 setError(null);
//             }
//             catch(error) {
//                 setIsPending(false);
//                 setError(error);
//                 console.log('Error is: ', error);
//             }
//         }
//         fetchUrl();
//     }, []);

//     return { data, isPending, error };
// }

export default useFetch;