import './App.css';
import { Brand, CTA, Navbar } from './components';
import { Header, Footer, Possibility, Features, WhatGPT3, Blog} from './container'

function App(){
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <Brand></Brand>
      <WhatGPT3></WhatGPT3>
      <Features></Features>
      <Possibility></Possibility>
      <CTA></CTA>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  )
  }
export default App;