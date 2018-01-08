import {createStore} from "redux"

var initState={
	classID:0,
	listData:[],
	classData:[]
}

const reducer = (state = initState,action)=>{
	switch(action.type){
		case "PRO_LIST_DATA":
		var newState = JSON.parse(JSON.stringify(state))
		newState.listData = action.payload.listData
		return newState
		
		case "PRO_CLASS_DATA":
		var newState = JSON.parse(JSON.stringify(state))
		
		newState.classData = action.payload.classData
		return newState
		
		
		default:
			return state
	}
}

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ &&       	window.__REDUX_DEVTOOLS_EXTENSION__())
export default store