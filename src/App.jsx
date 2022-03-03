
import Header from './components/Header'
import Card from './components/Card'
import './App.css'
import {Provider} from 'react-redux'
import generateStore from './redux/store'

function App() {
 
    const store = generateStore()

  return (
    <>
     <Header />
    <div className="container">
    <Provider store={store}>
     
      <Card />
      
    
    </Provider>
    </div>
    
    </>
  
  )
}

export default App
