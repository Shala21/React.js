// import { useState, useEffect, useCallback } from 'react';

//const useFilteredTodos = (todos, searchTerm) => {
//  const [filteredTodos, setFilteredTodos] = useState(todos);

/*

useEffect(() => {
  const filtered = todos?.filter(todo => todo.title.toLowerCase().includes(searchTerm));

  setFilteredTodos(filtered);
}, [todos, searchTerm]);

*/

// Using useCallback for performance optimization
/*

const filterTodos = useCallback(() => {
  return todos?.filter(todo => todo.title.toLowerCase().includes(searchTerm));
}, [todos, searchTerm]);
*/

// useMemo 
import { useMemo } from "react";

const useFilteredTodos = (todos, searchTerm) => {
  const filteredTodos = useMemo(() => {
    const term = searchTerm;
    return (todos || []).filter(todo => todo.title.toLowerCase().includes(term));
  }, [todos, searchTerm]);

  return filteredTodos;
};

export default useFilteredTodos;