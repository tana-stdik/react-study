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
  ]

  let messagesData = [
    {id: 1, message: "Hi!"},
    {id: 2, message: "Haw are you?"},
    {id: 3, message: "I'm happy!"},
    {id: 4, message: "I'm like moved!"},
    {id: 5, message: "Yo!"},
  ]
  return (
    <main>
      <div className={c.maine__dialogs}>
        <div className={c.dialogs}>
          <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
          <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
          <Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>
          <Dialog name={dialogsData[3].name} id={dialogsData[3].id}/>
          <Dialog name={dialogsData[4].name} id={dialogsData[4].id}/>
          <Dialog name={dialogsData[5].name} id={dialogsData[5].id}/>
        </div>
        <div className={c.messages}>
          <Message message={messagesData[0].message}/>
          <Message message={messagesData[1].message}/>
          <Message message={messagesData[2].message}/>
          <Message message={messagesData[3].message}/>
          <Message message={messagesData[4].message}/>
        </div>
      </div>
    </main>
  );
}

export default Messages;