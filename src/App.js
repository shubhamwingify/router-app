import React, {Component} from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Dashboard from "./components/admin/dashboard";
import Home from "./components/home";
import "./App.css";
import {Redirect, Route, Switch} from "react-router-dom";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <main className="container">
                    {/*Match first route from inside routes */}
                    <Switch>
                        <Route path="/products/:id" component={ProductDetails}/>
                        <Route path="/products" component={(props) => <Products sortBy="newest" {...props}/>}/>
                        <Redirect from="/messages" to="posts" />
                        <Route path="/posts/:year?/:month?" component={Posts}/>
                        <Route path="/admin" component={Dashboard}/>
                        {/*<Route path="/" exact component={Home} />*/}
                        <Route path="/not-found" component={NotFound}/>
                        <Route path="/" exact component={Home}/>
                        <Redirect to="/not-found"/>
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;
