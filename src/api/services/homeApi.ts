import { HOME_SCREEN_UI } from '../../data/category/home/home';
import { mockDelay } from '../../utils/utils';

export const homeApi = {
  getHomeUI: async (): Promise<any> => {
    await mockDelay();
    return HOME_SCREEN_UI;
  },
};
