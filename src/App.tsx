import '@aws-amplify/ui-react/styles.css'
import './App.css'
import { getApi } from './util'
import { Authenticator } from '@aws-amplify/ui-react'

function App() {
  getApi();

  return (
    <>
    <header>

    </header>
    <main>

    <Authenticator>
      {({signOut, user}) => (
        <>
        <p>Hello, {user?.username}</p>
        <button onClick={signOut}>Sign out</button>
        </>
      )}
    </Authenticator>
    </main>    
    </>
  )
}

export default App
