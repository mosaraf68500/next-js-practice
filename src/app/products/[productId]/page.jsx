import React from 'react';

const page = ({params,searchParams}) => {
    console.log(params)
    return (
        <div>
            <h1>dynamic product id page {params.productId}</h1>
            
        </div>
    );
};

export default page;