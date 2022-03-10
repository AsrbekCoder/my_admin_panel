const initialstate = {
  items: [],
};

const getProduct = (state = initialstate, action) => {
  switch (action.type) {
    case "SEND_POST":
      return { ...state, items: action.payload };

    default:
      return state;
  }
};

export default getProduct;
