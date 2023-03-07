import { createStore } from "redux";
const handelclik=(state={mc:""},action)=>{
    switch(action.type){
        case "mc":
            return {mc:action.payload}
        default:
            return state
    }
}
const store =createStore(handelclik)
export default store