import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';
import reportWebVitals from './reportWebVitals';

import App from './components/App';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
  rootElement,
);
reportWebVitals(console.info); // eslint-disable-line no-console
