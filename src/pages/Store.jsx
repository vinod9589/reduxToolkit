// import { configureStore } from "@reduxjs/toolkit";
// import Slice from "./Slice";


// const store =configureStore(
//     {
//         reducer:{
//             counter:Slice
         
//         }
//     }
// )
// export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import users from "./Slice"


// const Store =configureStore({

//     reducer:{
//         user:users,
//     }

// })

// export default Store


// import {configureStore} from "@reduxjs/toolkit"
// import Slice from "./Slice"
// const Store=configureStore({
//     reducer:{

//         counter:Slice

//     }
    
// })

// export default Store

import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";



const Store = configureStore({
    reducer:{
        user:Slice
        
    }
})

export default Store