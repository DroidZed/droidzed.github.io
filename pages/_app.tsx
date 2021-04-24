import 'tailwindcss/tailwind.css'

function App({ Component, pageProps }: { Component: any, pageProps: any }): JSX.Element {
  return <Component {...pageProps} />
}

export default App
