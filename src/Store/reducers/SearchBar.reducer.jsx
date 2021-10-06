import Card from '../../Components/Card.component';
import EmpData from './../../Components/EmpData.component';
const initialState = {
    empData: EmpData,
    Search1: []
}
export const searchHandler = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCHBAR":

            const updatedInpute = state.Search1;
            console.log(">>>>>>>>", updatedInpute);
            console.log(".............", updatedInpute);
            const myEmpDatas = state.empData
            //    console.log("???????????????????",updatedInpute);
            let newFun = [];
            newFun = myEmpDatas.filter((searchtring) => {
                if ((searchtring.name).includes(action.payload)) {
                    // console.log("*********************111", emval);
                    return searchtring;
                }
                return { ...state, Search1: [...updatedInpute, newFun] }
            })
            return { ...state, Search1: newFun }

        default: return state;



    }

}
