export const ADDBOOKMARKS = "ADDBOOKMARKS";
export const SEARCHBAR = "SEARCHBAR";

export const togleBookmarks = (id) => {
    return {
        type: ADDBOOKMARKS,
        payload: id
    }

}
export const searchHandler = (srchval) => {
    return {
        type: SEARCHBAR,
        payload: srchval
    }
}

