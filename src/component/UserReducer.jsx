import { createSlice } from "@reduxjs/toolkit";
import userList from "./Data";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      console.log(action);
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, date } = action.payload;
      const use = state.find((user) => user.id == id);
      if (use) {
        use.name = name;
        use.date = date;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const use = state.find((user) => user.id == id);
      if (use) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});
export const { addUser } = userSlice.actions;
export const { updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
