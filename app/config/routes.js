var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hasHistory = ReactRouter.hasHistory;
var  Main = require ('../components/Main');
var  Home = require ('../components/Home');
var  PromptContainer = require ('../containers/PromptContainer');


var routes = (

<Router history={hasHistory}>

<Route path='/'  component= {Main} >

   <IndexRoute component={Home}  />
   <Route path='result' component={PromptContainer} />


</Route>
</Router>


);


module.exports = routes;