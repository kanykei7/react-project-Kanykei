import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from "./components/Header/Header"
import Main from './components/Main/Main';
import ProductContextProvider from "./Context/ProductsContext";
import Footer from "./components/Footer/Footer"
import Favorite from './components/Favorite/Favorite';
import AddProduct from './components/Admin/AddProduct/AddProduct';
import Tabsi from './components/Admin/Tabs/Tabsi';
import SignUp from './components/Signup/Signup';
import ProductList from './components/Products/ProductList';
import AuthContextProvider from './Context/AuthContext';
import Login from './components/Signin/Login';
import Game from './components/Game/Game';



const Routes = () => {
    return (
        <ProductContextProvider>
            <AuthContextProvider>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/add" component={AddProduct}/>
                    <Route exact path="/favorite" component={Favorite}/>
                    <Route exact path="/admin" component={Tabsi}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/signup" component={SignUp}/>
                    <Route exact path="/heroes" component={ProductList}/>
                    <Route exact path="/game" component={Game}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
            </AuthContextProvider>
        </ProductContextProvider>

    );
};

export default Routes;