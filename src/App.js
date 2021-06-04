import './App.css'
import { ThemeProvider } from 'styled-components'
import theme from './assets/style/theme'
import Home from './components/Home'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
