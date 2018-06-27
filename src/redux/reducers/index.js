import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import features from './features';
import stories from './stories';
import tours from './tours';

const reducer = combineReducers({
  router: routerReducer,
  form: formReducer,
  features,
  stories,
  tours,
});
export default reducer;
