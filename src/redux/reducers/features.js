import featureData from '../../components/Features/featureData';

const features = (state = featureData, action) => {
  switch (action.type) {
    case 'ACTION_TYPE':
      return;
    default:
      // eslint-disable-next-line
      return state;
  }
};
export default features;
