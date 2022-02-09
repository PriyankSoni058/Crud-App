import NavBar from './Components/Navbar';
import ShivInfotech from './Components/ShivInfotech';
import AllUsers from './Components/AllUsers';
import AddUsers from './Components/AddUsers';
import NotFound from './Components/Notfound';
import EditUser from './Components/EditUser';
import { BrowserRouter, Route, Switch } from  'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
      <Route exact path="/" component={ShivInfotech} />
      <Route exact path="/all" component={AllUsers} />
      <Route exact path="/add" component={AddUsers} />
      <Route exact path="/edit/:id" component={EditUser} />
      <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
