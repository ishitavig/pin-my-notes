import React from 'react';
import './MainPage.scss';
import { Card, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons'

const NoteCard = () => {
    return (
        <div className='row' style={{margin:50}}>
            <Card elevation={3} style={{height:200, width:200,margin:20}}> 
                <Typography style={{color:'darkmagenta'}} variant='h5'>
                <FontAwesomeIcon icon={faThumbtack}/> First Note
                </Typography>
                <Typography variant='h6'>
                    This is my first note
                </Typography>
            </Card>
        </div>
    )
}

export default NoteCard;