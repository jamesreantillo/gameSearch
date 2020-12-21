import axios from 'axios';
import { gamesDetailsURL, gamesScreenShotURL } from '../api';

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: 'LOADING_DETAIL',
  });
  const detailData = await axios.get(gamesDetailsURL(id));
  const screenShotData = await axios.get(gamesScreenShotURL(id));
  dispatch({
    type: 'GET_DETAIL',
    payload: {
      game: detailData.data,
      screen: screenShotData.data,
    },
  });
};
