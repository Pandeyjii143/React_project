import { createContext, useReducer } from "react";

export const TodoItemContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      {
        name: action.payload.itemName,
        date: action.payload.itemDeuDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name != action.payload.itemName,
    );
  }
  return newTodoItems;
};

const TodoItemContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

  const addNewItem = (itemName, itemDeuDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDeuDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };
  return (
    <TodoItemContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {" "}
      {children}
    </TodoItemContext.Provider>
  );
};
export default TodoItemContextProvider;
