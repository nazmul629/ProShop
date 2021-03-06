import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './component/Header'
import Footer from './component/Footer'
import HomeScreen from './screen/HomeScreen'
import ProductScreen from './screen/ProductScreen'
import CartScreen from './screen/CartScreen'

function App() {
  return (
    
    <Router>
          <Header />

          <main className="my-3">
            <Container> 
              <Route path="/" component = { HomeScreen } exact   />
               <Route path="/product/:id" component= {ProductScreen} />
               <Route path="/cart/:id?" component= {CartScreen} />

            </Container>
          </main>
          <Footer />
    </Router>
  );
}

export default App;
