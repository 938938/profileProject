import { RouterProvider } from 'react-router-dom';
import { routers } from './router';
import GlobalStyle from './Style/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={routers} />
    </>
  );
};

export default App;
