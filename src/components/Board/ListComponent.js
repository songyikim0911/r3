import React from 'react';
import {parse} from "query-string";

const ListComponent = ({location}) => {

    const params = parse(location.search)

    const pageDTO = {page:params.page | 1, size:params.size | 10}

    console.log(params)

    return (
        <div>
            <h1>BoardListComponent</h1>
        </div>
    );
};

export default ListComponent;