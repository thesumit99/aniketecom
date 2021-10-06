import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchHandler } from './../Store/actions/AddBookmark.action';
const Header = () => {
    const [searchlist, setSearchList] = useState([])
    const [datalist, setDataList] = useState([])
    const [inputData, setInputData] = useState()
    let myData = useSelector((state) => state.bookmarkHandler.bookmark)
    const mySearchStore = useSelector((state) => state.searchHandler.Search1)

    const searchDispatch = useDispatch();

    // useEffect(() => {
    //     setSearchList(mySearchStore)
    //     setDataList(myData)
    //     searchDispatch(searchHandler(inputData))
    // }, [searchlist, datalist])


    const search = (e) => {
        let seacrchQuery = e.target.value;
        searchDispatch(searchHandler(seacrchQuery))
    }


    console.log("===============>", mySearchStore);


    return (
        <div className="jumbotron">
            <h1>Logo</h1><h1 className="float-right">Bookmarks({datalist.length})</h1>
            <div>
                <form>
                    <input type="text" placeholder="serach...." className="form-control" onChange={search} />
                </form>
            </div>
            <div className="col-md-12">

            </div>
        </div>
    )
}

export default Header;
