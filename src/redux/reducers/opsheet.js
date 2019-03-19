const opsheetItems = (state = [], action) => {
    switch (action.type) {
        case 'ADD_OPSHEET_ITEM':
            return [
                ...state,
                {
                    id: action.payload.id,
                    content: action.payload.content,
                }
        ]
        default:
            return state
    }
}
  
export default opsheetItems
