import React from 'react';
import c from './Messages.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {

  let path = "/dialogs/" + props.id;

  return (
    <div className={c.activ}>
            <NavLink to={path}>{props.name}</NavLink>
            </div>  
  )
}

const Message = (props) => {
  return (
    <div className={c.message}>{props.message}</div>
  )
}

const Messages = (props) => {

  let dialogsData = [
    {id: 1, name: "Tania"},
    {id: 2, name: "Nata"},
    {id: 3, name: "Lesha"},
    {id: 4, name: "Andrey"},
    {id: 5, name: "Nikola"},
    {id: 6, name: "Lev"}
  ];

  let messagesData = [
    {id: 1, message: "Hi!"},
    {id: 2, message: "Haw are you?"},
    {id: 3, message: "I'm happy!"},
    {id: 4, message: "I'm like moved!"},
    {id: 5, message: "Yo!"},
  ];

  let dialogsElements = 
  dialogsData.map( d => <Dialog name={d.name} id={d.id}/>);
  let messagesElements =
  messagesData.map( m => <Message message={m.message}/>);
  return (
    <main>
      <div className={c.maine__dialogs}>
        <div className={c.dialogs}>
          {dialogsElements}
        </div>
        <div className={c.messages}>
           {messagesElements}
        </div>
      </div>
    </main>
  );
}

export default Messages;