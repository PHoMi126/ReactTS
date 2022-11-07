import axios from "axios";

const fetchUser = () => {
  return (dispatch: any) => {
    axios
    .get(`https://635f7b4b3e8f65f283b3f3e0.mockapi.io/data`)
    .then(({ data }) => {
      dispatch({ type: "FETCH_USER", payload: data });
      console.log(data);
    });
  };
};
export default fetchUser;
