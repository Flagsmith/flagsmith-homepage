import React, { useEffect, FunctionComponent } from 'react';
import { useRouter } from 'next/router'; // we need this to make JSX compile


const TheComponent = (props) => {
    console.log(props);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        console.log(id);
        if (id && id.includes('http')) {
            document.location = id;
        }
    }, [id]);
    return (
        <div className="centered-container" />
    );
};

export default TheComponent;
