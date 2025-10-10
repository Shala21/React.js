import { useState, useEffect, useCallback } from 'react';

const useFilteredTodos = (todos, searchTerm) => {
  const [filteredTodos, setFilteredTodos] = useState(todos);

  /*

  useEffect(() => {
    const filtered = todos?.filter(todo => todo.title.toLowerCase().includes(searchTerm));

    setFilteredTodos(filtered);
  }, [todos, searchTerm]);

  */

  // Using useCallbacvk to memorize function
  const filterTodos = useCallback(() => {
    return todos?.filter(todo => todo.title.toLowerCase().includes(searchTerm));
  }, [todos, searchTerm]);

  useEffect(()=> {
    setFilteredTodos(filterTodos());
  }, [filterTodos]);

  return filteredTodos;
};

export default useFilteredTodos;