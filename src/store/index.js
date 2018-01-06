import {createStore} from "redux"

//初始数据
var initState = {
  listData:[]
}

const reducer = (state=initState,action)=>{
  switch(action.type){
    case "PRO_LIST_DATA":
    //action.payload.listData 获取到的商品数据
    var newState =  JSON.parse(JSON.stringify(state)) //newstate  = 拷贝state// Object.assign({},state)
    newState.listData = action.payload.listData
    return newState

    default:
    return state
  }
}

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ &&       	window.__REDUX_DEVTOOLS_EXTENSION__())
export default store

