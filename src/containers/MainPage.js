import React from 'react';
import './MainPage.scss';
import { Card, Paper, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons'
import NoteForm from './NoteForm';
import NoteCard from './NoteCard';

const MainPage = () => {
    return (
        <div className='main-container'>
            <Typography variant='h2' style={{color:'lightskyblue',margin:20}}>
            <FontAwesomeIcon icon={faThumbtack}/> Pin My Notes
            </Typography>
            <NoteForm />
            <NoteCard />
        </div>
    )
}

export default MainPage;