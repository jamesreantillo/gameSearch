import axios from 'axios';
import { gamesDetailsURL, gamesScreenShotURL } from '../api';

export const loadDetail = (id) => async (disptach) => {
  const detailData = await axios.get(gamesDetailsURL(id));
  const screenShotData = await axios.get(gamesScreenShotURL(id));
  disptach({
    type: 'GET_DETAIL',
    payload: {
      game: detailData.data,
      screen: screenShotData.data,
    },
  });
};
