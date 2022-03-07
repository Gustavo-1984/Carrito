
import Header from './components/Header'
import Card from './components/Card'
import './App.css'
import {Provider} from 'react-redux'
import generateStore from './redux/store'

function App() {
 
    const store = generateStore()

  return (
    <>
     
    
    <Provider store={store}>
    <Header />
    <div className="container">
      <Card />
      
      </div>
    </Provider>
   
    
    </>
  
  )
}

export default App
