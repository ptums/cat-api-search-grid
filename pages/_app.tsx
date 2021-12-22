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
