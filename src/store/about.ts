import { Store } from '../core/heropy';

interface State {
  photo: string;
  name: string;
  email: string;
  blog: string;
  github: string;
  repository: string;
}

export default new Store<State>({
  photo: 'https://avatars.githubusercontent.com/u/79249376?v=4',
  name: 'JIGU / SeoJiSu',
  email: 'jseo9732@gmail.com',
  blog: 'https://velog.io/@jseo9732',
  github: 'https://github.com/jseo9732',
  repository: 'https://github.com/jseo9732/vanillajs-movie-app',
});
