import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";

// Redux-thunk

const BASE_URL = `https://635f7b4b3e8f65f283b3f3e0.mockapi.io/usersdb`;

type User = {
   name: string,
   password: string,
}

const userLogin = createAsyncThunk('user/login',
   async (user: User, { rejectWithValue }) => {
     const response = await fetch (
      BASE_URL,
      {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(user),
      }
     );
     // Convert response to JSON
     const data = await response.json();

     // Reject if loading less then 2 / 3 or more secs
     if (response.status < 2000 || response.status >= 3000) {
      return rejectWithValue(data);
    }
    // Return result if success
    return data;
  }
);

export default userLogin;