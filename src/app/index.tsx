import Routing from 'pages';

import withProviders from './providers';

import './index.scss';

export function App() {
  return <Routing />;
}

export const WrappedApp = withProviders(App);
