import { ThemeProvider } from 'styled-components';
import Theme from './constants/uiTheme';
import GlobalStyle from './styles/GlobalStyles';
import UserState from './context/user/UserState';
import Start from './Components/Start';

const App = () => {
    return(
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <UserState>
          <Start />
        </UserState>
      </ThemeProvider>
    )
}


export default App
