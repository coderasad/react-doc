import React from 'react';

const ChildTr = ({skills}) => {
    return (
                <>
                    <li>{skills.name}</li>
                    <li>{skills.project}</li>
                </>
    );
};

export default ChildTr;
