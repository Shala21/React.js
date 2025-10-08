import { useState, useEffect } from 'react';

const useFilteredTodos = (todos, searchTerm) => {
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    const filtered = todos?.filter(todo => todo.title.toLowerCase().includes(searchTerm));

    setFilteredTodos(filtered);
  }, [todos, searchTerm]);

  return filteredTodos;
};

export default useFilteredTodos;