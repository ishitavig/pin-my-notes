import React, {useEffect, useState} from 'react';
import './MainPage.scss';
import Header from './Header';
import NoteForm from './NoteForm';
import NoteCard from './NoteCard';
import axios from 'axios';

const MainPage = () => {
    const [notes, setNotes] = useState([]);
    
    useEffect(() => {
        const fetchNotes = async () => {
            axios
              .get('http://localhost:5000/notes/all')
              .then(response => {
                // Update the books state
                console.log(response.data,'data')
                setNotes(response.data);
              })
              .catch(error => console.error(`There was an error retrieving the notes list: ${error}`))
          }
        fetchNotes();
    },[])

    return (
        <div className='main-container'>
            <Header />
            <NoteForm saveNote={(data) => setNotes([...notes,data])}/>
            <div className='row' style={{margin:50}}>
            {notes.map(note => (
                <div key={note.id}>
                    <NoteCard note={note}/>
                </div>
            ))}
            </div>
        </div>
    )
}

export default MainPage;