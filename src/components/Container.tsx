import React from 'react';

const Container = ({children}) => {
    return (
        <div className="w-full  max-w-[1220px] px-[20px] mx-auto bg-green-500">{
            children
        }
    </div>
    );
};

export default Container;