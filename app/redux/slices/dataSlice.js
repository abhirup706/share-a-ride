import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: null,
    username:null
}

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
        state.data = action.payload
    },
    setUserName: (state,action) => {
      state.username = action.payload
    }
  }
})

export const { setData } = dataSlice.actions
export const {setUserName} = dataSlice.actions

export const selectData = state => state.data.data
export const selectUserName = state => state.data.username

export default dataSlice.reducer