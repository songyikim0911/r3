import React from 'react';
import Nav from "./Nav";
import HelloComponent from "../components/Hello/HelloComponent";

const PageTemplate = ({children}) => {
    return (
            <div id="page-content-wrapper">
                <Nav></Nav>

                <div className="container-fluid">
                    {children}
                </div>
            </div>
    );
};

export default PageTemplate;