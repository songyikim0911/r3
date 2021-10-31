import React from 'react';
import PageTemplate from "../../template/PageTemplate";
import {useParams} from "react-router-dom";
import ListComponent from "../../components/Board/ListComponent";

const BoardListPage = ({location}) => {

    return (
        <PageTemplate>
            <ListComponent location={location}></ListComponent>
        </PageTemplate>
    );
};

export default BoardListPage;