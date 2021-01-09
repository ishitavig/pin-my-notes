import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import { Button } from '@material-ui/core';
import './MainPage.scss';

const Home = (props) => {
    return (
        <div className='main-container'>
            <Header />
            <div className='row' style={{margin:'auto',display: 'flex',justifyContent: 'center'}}>
                <div className='col-2'>
                    <Button 
                        variant='contained' 
                        color='secondary' 
                        style={{margin:10}} 
                        onClick={() => props.history.push('/login')}
                    >
                        Sign In
                    </Button>
                </div>
                <div className='col-2'>
                    <Button 
                        variant='contained' 
                        color='secondary' 
                        style={{margin:10}} 
                        onClick={() => props.history.push('/registration')}>
                        Sign Up
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Home);