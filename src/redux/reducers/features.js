import { featureData } from "../../components/Features/featureData";
export const features = (state = featureData, action) => {
  switch (action.type) {
    case "ACTION_TYPE":
      return;
    default:
      return state;
  }
};
