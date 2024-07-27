import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    data : "kkkkkkkkkkk",
}

export const listSlice = createSlice({
    name : "iot",
    initialState,
    reducers : {
        // addlist : (state,action)=>{
        //     console.log("hello")
        //     const x =Math.floor( Math.random()*100000000 )
        //     const item ={
        //         id : x ,
        //         task: action.payload
        //     }
        //     state.todos.push(item)
        // },
        // removetodo : (state,action)=>{
        //     console.log("hhhh")
        // state.todos = state.todos.filter((task)=>{
        //     if(task.id !== action.payload){
        //         return(task)
        //     }
        // })},
        UpdateStatus : (state,action)=>{
            state.data = action.payload;
            console.log(state.data)
        },
        // updatetask : (state,action) =>{
        //     if(state.onUpdate){
        //         let index = state.todos.findIndex(task =>{
        //             return task.id === state.onUpdate
        //         })
        //         state.todos[index].task = action.payload
        //         state.onUpdate = null
        //     }
        // }
        
    }
})

export const { UpdateStatus } = listSlice.actions;
// export const {addlist} = listSlice.actions;

export default listSlice.reducer;