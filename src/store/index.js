import {createStore} from "redux"

var initState={
	classID:0
}

const reducer = (state = initState,action)=>{
	switch(action.type){
		
		default:
			return state
	}
}

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ &&       	window.__REDUX_DEVTOOLS_EXTENSION__())
export default store
