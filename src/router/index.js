import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Index from "../view/index";


export default function SetUpRoutes () {
  const routes = [
    {
      path: '/',
      exact: true,
      component: Index,
      //routes: []  子路由
    }
  ]
  return (<div><HashRouter basename={window.__POWERED_BY_QIANKUN__ ? '/u/' : '/'}>{renderRoutes(routes)}</HashRouter></div>)
}