import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        {/* <CyclesContextProvider> */}
        <Router />
        {/* </CyclesContextProvider> */}
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
