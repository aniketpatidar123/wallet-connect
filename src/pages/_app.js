import "@/styles/globals.css";
import { Web3ModalProvider } from "@/web3";

export default function App({ Component, pageProps }) {
  return <Web3ModalProvider><Component {...pageProps} /></Web3ModalProvider>
}
