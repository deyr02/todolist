import * as React from 'react';
import { SyntheticEvent, useState } from 'react';

interface item {
  text: string;
  id: Date;
}



export const Todo =()=> {

const [items, setItems] = useState<item[]>([]);
  const [text, setText] = useState('');

  const handlechange = (e: any) => setText(e.target.value);

  const handleSubmit = (e:SyntheticEvent) => {
    e.preventDefault();

    const newItem:item = {
      text: text,
      id: new Date(),
    }
    setText('');
    setItems(items.concat(newItem));


  }

  return (
    <>
      <h1>ToDos</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id.toString()}>{item.text} </li>
        ))}
      </ul>
      
      <form onSubmit={(e:SyntheticEvent)=>handleSubmit(e)}>
        <label htmlFor="new-todo">What needs to be done?</label>
        <br />
        <input value= {text} onChange={handlechange} />
        <button>Add{items.length + 1}</button>
      </form>

    </>

  );
}