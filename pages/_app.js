import '@/styles/globals.css'
import connectMongo from "../Database/connections";


export default function App({ Component, pageProps }) {
 
  connectMongo()
  return <Component {...pageProps} />
}
