import toursData from '../../components/Tours/tourdata';

const tours = (state = toursData, action) => {
  switch (action.type) {
    case 'ACTION_TYPE':
      return;
    default:
      // eslint-disable-next-line
      return state;
  }
};
export default tours;
