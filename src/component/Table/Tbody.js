import React from 'react';
import TR    from "./TR";

const Tbody = ({allUsers}) => {
    return (
        <tbody>
        {
            allUsers.map((item, index) => {
                return <TR user={item} id={index} key={index} />
            })
        }
        </tbody>
    );
};

export default Tbody;
