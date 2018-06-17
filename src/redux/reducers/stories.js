import { storyData } from "../../components/Stories/storydata";
export const stories = (state = storyData, action) => {
  switch (action.type) {
    case "ACTION_TYPE":
      return;
    default:
      return state;
  }
};
