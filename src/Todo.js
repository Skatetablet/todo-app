import { List, ListItem, ListItemAvatar, ListItemText, Modal } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import "./Todo.css"
import React, { useState } from 'react'
import db from "./firebase"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function Todo(props) {

    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const updateTodo = () => {
        db.collection("todos").doc(props.todo.id).set({
            todo: input
        }, {merge: true});
        setOpen(false);
    }

    return (
        <>
        <Modal 
            open={open}
            onClose={handleClose}>
                <div className={classes.paper}>
                    <h1>Update task</h1>
                    <input type="text" placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
                    <button className="button" onClick={updateTodo}>Update task</button>
                </div>
            </Modal>
        <List className="todo-list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Dummy Timeline" />
            </ListItem>
            <button className="button"  onClick={e => setOpen(true)}>Edit</button>
            <DeleteIcon className="delete" onClick={event => db.collection("todos").doc(props.todo.id).delete()}></DeleteIcon>

        </List >
        </>
    )
}

export default Todo
