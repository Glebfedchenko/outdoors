import { toursData } from "../../components/Tours/tourdata";

export const tours = (state = toursData, action) => {
  switch (action.type) {
    case "ACTION_TYPE":
      return;
    default:
      return state;
  }
};
