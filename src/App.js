import React from 'react'
import Home from './Home';
import {Switch,Route} from 'react-router-dom';
import FinalPage from './FinalPage';

function App() {
  return (
    <div>

<Switch>
<Route path="/" exact component={Home}/>
<Route path="/details/:id" exact component={FinalPage}/>
</Switch>
    </div>
  )
}

export default App
