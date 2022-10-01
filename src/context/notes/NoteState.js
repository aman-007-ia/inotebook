import NoteContext from "./noteContext";
import React,{useState} from "react"

const NoteState = (props)=>{
    const noteinitial = [
        {
          "_id": "63380bd516ed3efb394d0d96",
          "user": "6337c75008dfbc73daa232a6",
          "title": "my title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2022-10-01T09:43:49.936Z",
          "__v": 0
        },
        {
          "_id": "63380bd616ed3efb394d0d98",
          "user": "6337c75008dfbc73daa232a6",
          "title": "my title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2022-10-01T09:43:50.684Z",
          "__v": 0
        },
        {
          "_id": "63380bd916ed3efb394d0d9a",
          "user": "6337c75008dfbc73daa232a6",
          "title": "my title2",
          "description": "Please wake up early62",
          "tag": "personal",
          "date": "2022-10-01T09:43:53.792Z",
          "__v": 0
        },
        {
          "_id": "63380c0016ed3efb394d0d9f",
          "user": "6337c75008dfbc73daa232a6",
          "title": "my title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2022-10-01T09:44:32.108Z",
          "__v": 0
        },
        {
          "_id": "63380c0616ed3efb394d0da1",
          "user": "6337c75008dfbc73daa232a6",
          "title": "my title",
          "description": "Please wake  early",
          "tag": "personal",
          "date": "2022-10-01T09:44:38.890Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(noteinitial);
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;