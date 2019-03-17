import { ADD_OPSHEET_ITEM } from "./actionTypes";

let nextItemId = 0;

export const addOpsheetItem = content => ({
  type: ADD_OPSHEET_ITEM,
  payload: {
    id: ++nextItemId,
    content
  }
});