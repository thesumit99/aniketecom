import EmpData from '../../Components/EmpData.component';
const initialState = {
   empData: EmpData,
   bookmark: []
}
export const bookmarkHandler = (state = initialState, action) => {
   switch (action.type) {
      case "ADDBOOKMARKS":
         const updatedState = state.bookmark
         const availableData = updatedState.includes(action.payload)

         console.log("action.payload", action.payload);
         if (availableData) {
            let newVal = updatedState.filter((value) => {
               return value != action.payload
            });
            return { ...state, bookmark: newVal }
         } else {
            updatedState.push(action.payload)
            console.log("---->", updatedState);
            return { ...state, bookmark: updatedState }
         }
      case "SEARCHBAR":
         // alert(action.payload);
         let filteredEmployee = [];
         filteredEmployee = state.empData.map((employee) => {
            if ((employee.name).includes(action.payload)) {
               return employee;
            }
            return { ...state, empData: filteredEmployee }
         })
      default: return state;
   }
}