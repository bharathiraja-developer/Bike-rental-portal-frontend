const initialState = {
  username: "",
  name: "",
  mobile: "",
  address: "",
  password: "",
  token: "",
};

const userreducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNIN":

    default:
      return state;
  }
};

export default userreducer;
