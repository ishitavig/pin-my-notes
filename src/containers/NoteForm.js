import React from 'react';
import { Button, Paper, TextField, Typography } from '@material-ui/core';  
import './MainPage.scss'

const NoteForm = () => {
    return (
        <Paper className='container-paper'>
            <div className='row text-center'>
                <div className='col-3' style={{marginTop:50}}>
                <Typography>
                    Heading
                </Typography>
                </div>
                <div className='col-8' style={{marginTop:50}}>
                    <TextField style={{width:'100%'}}/>
                </div>
            </div>
            <div className='row text-center'>
                <div className='col-3' style={{marginTop:50}}>
                    <Typography>
                        Note
                    </Typography>
                </div>
                <div className='col-8' style={{marginTop:50}}>
                    <TextField style={{width:'100%'}}/>
                </div>
            </div>
            <div className='row'>
                <div className='col-6' style={{margin:'auto'}}>
                    <Button variant='outlined' color='primary' style={{margin:30}}>
                        Cancel
                    </Button>
                    <Button variant='contained' color='secondary' style={{margin:30}}>
                        Save
                    </Button>
                </div>
            </div>
        </Paper>
    )
}

export default NoteForm;