import { ThemeProvider } from 'styled-components';
import { AppProvider } from '~/context';
import { PurchaseCart } from '~/modules';
import { User } from '~/modules/User';
import { GlobalStyles } from '~/theme/global';

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={{}}>
        <GlobalStyles />

        <User />
        <hr />

        <PurchaseCart />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
