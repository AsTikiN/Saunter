import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import {} from "../"
//@ts-ignore
import { addSaunter, removeSaunter, addToFavorites, selectSaunter } from "../redux/actions/index.ts";

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators({addSaunter, removeSaunter, addToFavorites, selectSaunter }, dispatch);
};