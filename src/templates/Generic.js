import React from "react";

const Generic = ({ pageContext }) => {
    return (
        <div>
            <h1>{pageContext.title}</h1>
            <p>{pageContext.description}</p>
        </div>
    );
};

export default Generic;
