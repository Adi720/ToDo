import React, { useState } from "react"
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false)
  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  function isExpand(){
    setExpanded(true);
  }

  function handleChange(event) {
    // creating a destructured object
    const { name, value } = event.target

    // using the split function of js to add the new values in the previous array
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }
  function submitNote(event) {
    props.onAdd(note)
    setNote({
      title: "",
      content: ""
    })
    event.preventDefault()
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
          name="title"
          
          value={note.title}
          placeholder="Title"
          onChange={handleChange}
        />
        )}
        
        <textarea
          name="content"
          onClick={isExpand}
          value={note.content}
          placeholder="Take a note..."
          rows= {isExpanded ? 3 : 1}
          onChange={handleChange}
        />
        <Zoom in={isExpanded}>

          <Fab disabled={!note} onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;