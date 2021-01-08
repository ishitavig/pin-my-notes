import React, {useEffect, useState} from 'react';
import './MainPage.scss';
import { Card, Paper, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons'
import NoteForm from './NoteForm';
import NoteCard from './NoteCard';

const MainPage = () => {
    const [notes, setNotes] = useState([]);

    return (
        <div className='main-container'>
            <Typography variant='h2' style={{color:'lightskyblue',margin:20}}>
            <FontAwesomeIcon icon={faThumbtack}/> Pin My Notes
            </Typography>
            <NoteForm saveNote={(data) => setNotes([...notes,data])}/>
            <div className='row' style={{margin:50}}>
            {notes.map(note => <NoteCard note={note}/>)}
            </div>
        </div>
    )
}

export default MainPage;