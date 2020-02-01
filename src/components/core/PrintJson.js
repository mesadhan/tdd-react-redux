import React, { Component } from 'react';

const PrintJson = ({data}) => {
    return (<pre>{ JSON.stringify(data, null, 2) }</pre>);
};

export default PrintJson;
