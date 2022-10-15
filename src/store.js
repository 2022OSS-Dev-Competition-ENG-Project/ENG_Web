import { configureStore, createSlice } from '@reduxjs/toolkit'


let user = createSlice({
  name : 'user',
  initialState: 'Kim'
})

export default configureStore({
  reducer: { 
    user : user.reducer
  }
}) 