import React, { useState } from 'react';

const TodoInput = ({ addList }) => {
  const [inputText, setInputText] = useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addList(inputText);
      setInputText('');
    }
  };

  return (
    <input
      type="text"
      placeholder="Add new todo..."
      value={inputText}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
    />
  );
};

export default TodoInput;

