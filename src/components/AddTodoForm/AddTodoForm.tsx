import React, { ChangeEvent, useState } from 'react';
import { Button } from '../common/Button/Button';

type TypeProps = {
  addTodo: (text: string) => void;
};

export const AddTodoForm = React.memo(function ({ addTodo }: TypeProps) {
  const [text, setText] = useState('');

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTodo(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={onChangeHandler}
        placeholder="What needs to be done..."
        value={text}
        autoComplete="off"
      />
      <Button type="submit">Create task</Button>
    </form>
  );
});
