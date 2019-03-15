import { ADD_OPSHEET_ITEM} from "./actionTypes";

let nextTodoId = 0;

export const addOpsheetItem = content => ({
  type: ADD_OPSHEET_ITEM,
  payload: {
    id: ++nextTodoId,
    content
  }
});