import React from 'react'
import { Container} from 'react-bootstrap'
import Header from './component/Header'
import Footer from './component/Footer'

function App() {
  return (
    
    <div className="App">
     
          <Header />

          <main className="my-3">
            <Container>
              <h1> Welcome to ProShop</h1>
            </Container>
          </main>
          <Footer />
    </div>
  );
}

export default App;
