import { ThemeProvider } from 'styled-components';
import { Header, Layout } from '~/components';
import { AppProvider } from '~/context';
import { PurchaseCart } from '~/modules';
import { User } from '~/modules/User';
import { GlobalStyles } from '~/theme/global';
import { theme } from '~/theme/theme';

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Header productName='Exemplo useContext e useReducer' />

        <Layout>
          <User />
          <hr />
          <br />

          <PurchaseCart />
        </Layout>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
