// import { LOADING, GET_NOTES, ERROR } from '../actions/notesActions'
// Nov-21 refactored to import new actions
import { LOADING, GETTING_NOTES, GET_NOTES, ERROR } from '../actions/notesActions'
// --OR-- import * as actionTypes from '../actions'; LOADS ALL ACTIONS IN ../actions/index.js

// const initialState = {
//   notes: [],
//   error: '',
//   loading: false
// };
// Nov-21 refactored initialState
const initialState = {
  notes: [],
  error: null,
  loading: false,
  // added on Nov-21
  gettingNotes: false,
  updatingNote: false,
  creatingNote: false,
  deletingNote: false
  // isHidden: false  // deactivated for this version
};

// export default (state = initialState, action) => {
//   switch(action.type){
//     case LOADING:
//       return Object.assign({}, state, {loading: true})
//     case GET_NOTES:
//       return Object.assign({}, state, {notes: action.notes, loading: false, error: ''})
//     case ERROR:
//       return Object.assign({}, state, {error: action.errorMessage, loading: false})
//     default:
//       return state
//   }
// }

// Nov-21 refactored switch
// ** may want to 
export default (state = initialState, action) => {
  switch(action.type){
    case LOADING:
      return Object.assign({}, state, {loading: true})
      // case GETTING_NOTES:
      // return Object.assign({}, state, {notes: action.notes, loading: true});
    case GET_NOTES:
      return Object.assign({}, state, {notes: action.notes, loading: false, error: ''})
    case ERROR:
      return Object.assign({}, state, {error: action.errorMessage, loading: false})
    default:
      return state
  }
}