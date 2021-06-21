// Joe

import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import {
    AppBarHeader,
    Menu,
    HomePage,
    ProductCard,
    ProductPage,
    ContemporaryPage,
    CubismPage,
    PopartPage,
    ImpressionismPage,
    PostImpressPage,
    Cart,
    Login,
    Register,
    Checkout
} from './components/index';

const App = () => {

    const useStyles = makeStyles({
        root: {
          flexGrow: 1,
          maxWidth: 1500,
        },
      });
      
    const classes = useStyles();

    const [merchandise, setMerchandise] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userToken, setUserToken] = useState('');
    const [loggedIn, setLoggedIn] = useState('');


    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline>
                <Router className={classes.root}>
                    <div className="app" 
                    style={{ margin: '20px'   
                    }}
                    >
                <AppBarHeader/>
                    <Route exact path="/">
                        <HomePage
                            merchandise={merchandise}
                            setMerchandise={setMerchandise}
                        />
                    </Route>
                    <Route exact path="/register">
                        <Register 
                            username={username}
                            setUsername={setUsername}
                            password={password}
                            setPassword={setPassword}
                            firstName={firstName}
                            setFirstName={setFirstName}
                            lastName={lastName}
                            setLastName={setLastName}
                            userToken={userToken}
                            setUserToken={setUserToken}
                            setLoggedIn={setLoggedIn}
                            loggedIn={loggedIn}
                            // history
                        />
                    </Route>
                    <Route exact path="/merchandise">
                        <ProductPage
                            merchandise={merchandise}
                            setMerchandise={setMerchandise}
                        />
                    </Route>
                    <Route exact path="/merchandise/contemporary">
                        <ContemporaryPage
                            merchandise={merchandise}
                            setMerchandise={setMerchandise}
                        />
                    </Route>
                    <Route exact path="/merchandise/cubism">
                        <CubismPage
                            merchandise={merchandise}
                            setMerchandise={setMerchandise}
                        />
                    </Route>
                    <Route exact path="/merchandise/popart">
                        <PopartPage
                            merchandise={merchandise}
                            setMerchandise={setMerchandise}
                        />
                    </Route>
                    <Route exact path="/merchandise/impressionism">
                        <ImpressionismPage
                            merchandise={merchandise}
                            setMerchandise={setMerchandise}
                        />
                    </Route>
                    <Route exact path="/merchandise/post-impressionalism">
                        <PostImpressPage
                            merchandise={merchandise}
                            setMerchandise={setMerchandise}
                        />
                    </Route>
                    <Route exact path="/cart">
                        <Cart />
                    </Route>
                    <Route exact path="/login">
                        <Login 
                            username={username}
                            setUsername={setUsername}
                            password={password}
                            setPassword={setPassword}
                            loggedIn={loggedIn}
                            userToken={userToken}
                            setUserToken={setUserToken}
                            setLoggedIn={setLoggedIn}
                            history={history}
                        />
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout />
                    </Route>
                    </div>
                </Router>
            </CssBaseline>
        </MuiThemeProvider>

    )


}

export default App;