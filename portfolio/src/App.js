import { Switch,Route } from 'react-router-dom'
import Navbar from './Componnent/Navbar'
import Profil from './Componnent/Profil'
import Contact from './Componnent/Contact'

const App =()=>{
 
  return(
    <>
      <Navbar />

      <Switch>
        <Route path='/Profil'>
          <Profil />
        </Route>
        <Route path='/Contact'>
          <Contact />
        </Route>
      </Switch>

    </>

  )
}

export default App





