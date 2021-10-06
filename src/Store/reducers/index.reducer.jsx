import { combineReducers } from 'redux'
import { bookmarkHandler } from './Bookmark.reducer';
import {searchHandler}from './SearchBar.reducer';
export const rootReducer = combineReducers({
    bookmarkHandler,
    searchHandler
})
