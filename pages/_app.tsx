/**
 *  The App file is rendered on every page
 *  (runs on client/server) and here is used to apply a context provider
 */
import type { AppProps } from 'next/app'
import { BreedsProvider } from 'context/BreedsContext';
import 'styles/global.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <BreedsProvider>
      <Component {...pageProps} />
    </BreedsProvider>
  )
}

export default App
