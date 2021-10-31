import React from 'react';
import PageTemplate from "../template/PageTemplate";
import MainComponent from "../components/Main/MainComponent";
import HelloComponent from "../components/Hello/HelloComponent";

const MainPage = () => {
    return (
        <PageTemplate>
            <MainComponent></MainComponent>
            <HelloComponent></HelloComponent>
        </PageTemplate>
    );
};

export default MainPage;