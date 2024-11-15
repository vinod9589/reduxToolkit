// import {createSlice} from "@reduxjs/toolkit"

// const MyData=createSlice({
//     name:"counter",
//     initialState:{
//         countValue:0,
//         data:[{id:"1",name:"shrikanth",address:"indore"}]
//     },

//     reducers:{

//         incrementfn:(state)=>{
//                 state.countValue=state.countValue+1
//         },

//         resetfn:(state)=>{
//             state.countValue=0
//         }
//         ,
//         decrement:(state)=>{
//             if(state.countValue>0){
//                 state.countValue=state.countValue-1
//             }

//         }
//         ,print:(state)=>{
//             state.data=state.data
//         }
//     }

// })
// export default MyData.reducer
// export const{incrementfn,resetfn,decrement,print}=MyData.actions

// import { createSlice } from "@reduxjs/toolkit";

// const users=createSlice({
//     name:"user",
//     initialState:[],
//     reducers:{
//         addUsers(state,actions){},
//         removeUsers(state,actions){},
//         clearAllUsers(state,actions){

//         }
//     }
// })

// export default users.reducer

import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";
export const MyData = createSlice({
  name: "user",
  initialState: userList,
  reducers: {
    addUser: (state, actions) => {
      
      state.push(actions.payload);
      
    },
    deleteUser: (state, actions) => {
      // console.log(userList)

      state.splice(actions.payload, 1);
    },
    updatedata:(state,actions)=>{
      const{ id,fristname,lastname } =actions.payload
      const uu =state.find(userList=>userList.id==id)
      if(uu){
             uu.fristname = fristname
             uu.lastname =lastname
      }
      
      

    }
  },
});

export default MyData.reducer;
export const { addUser, deleteUser,updatedata } = MyData.actions;
