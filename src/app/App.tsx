import { ThemeProvider } from 'styled-components';
import { AppProvider } from '~/context';
import { Example, Test } from '~/modules';
import { GlobalStyles } from '~/theme/global';

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={{}}>
        <GlobalStyles />

        <Example />
        <hr />
        <Test />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
