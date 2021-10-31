import HelloPage from "./HelloPage";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PortfolioPage from "./PortfolioPage";
import MainPage from "./MainPage";
import Page404 from "./Page404";
import BoardListPage from "./Board/BoardListPage";

import Board from "./Board"

export default () => {

    return(
        <Switch>
            <Route path="/hello" component={HelloPage}></Route>
            <Route path="/main" component={MainPage}></Route>
            <Route path="/portfolio" component={PortfolioPage}></Route>

            <Route path="/board" component={Board}></Route>

            <Route path="/" component={MainPage} exact={true}></Route>
            <Route path="" component={Page404}></Route>
        </Switch>
    )

}