import 'bootstrap/dist/css/bootstrap.min.css';
import { SSRProvider } from "react-bootstrap";
import '../styles/globals.css'
import '../styles/globals.css'


export default function App({ Component, pageProps }) {

  
  return(
  <SSRProvider>
    <Component {...pageProps} />
  </SSRProvider>
)
}
