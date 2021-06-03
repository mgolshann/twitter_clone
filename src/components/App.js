import React from 'react';
import Layout from './layout/Layout';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import P404 from '../pages/404/404P';
import Home from '../pages/home/Home';
import TweetByUser from '../pages/tweetByUser/TweetByUser';
import TweetByHashTag from '../pages/tweetByHashTag/TweetByHashTag';
import AuthPage from '../pages/auth/AuthPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { TweetProvider } from '../context/TweetContext';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <PublicRoute path={"/login"} component={AuthPage} />
                    <PrivateRoute path={"/"} render={() => {
                        return <TweetProvider>
                            <Layout>
                                <Switch>
                                    <Route exact path={"/"} component={Home} />
                                    <Route exact path={"/hashtags/:hashtag"} component={TweetByHashTag} />
                                    <Route exact path={"/users/:id/:name"} component={TweetByUser} />
                                    <Route component={P404}></Route>
                                </Switch>
                            </Layout>
                        </TweetProvider>
                    }} />
                </Switch>
            </BrowserRouter>
            <ToastContainer />
        </>
    );
};


const islogin = () => !!localStorage.getItem("x-auth-token");

const PublicRoute = ({ component, ...props }) => {
    return <Route {...props} render={(props) => {
        if (islogin())
            return <Redirect to={"/"} />
        else {
            return React.createElement(component, props);
        }
    }} />
};

const PrivateRoute = ({ render, ...props }) => {
    return <Route {...props} render={(props) => {
        if (islogin())
            return render(props);
        else
            return <Redirect to={"/login"} />
    }} />
};

export default App;