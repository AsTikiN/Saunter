import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { addSaunter, removeSaunter, addToFavorites, selectSaunter } from "../redux/actions/index";

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators({addSaunter, removeSaunter, addToFavorites, selectSaunter }, dispatch);
};