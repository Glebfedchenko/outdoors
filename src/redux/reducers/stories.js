import storyData from '../../components/Stories/storydata';

const stories = (state = storyData, action) => {
  switch (action.type) {
    case 'ACTION_TYPE':
      return;
    default:
      // eslint-disable-next-line
      return state;
  }
};
export default stories;
