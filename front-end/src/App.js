import React, {useState} from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import ReservationCreate from "./reservations";


/**
 * Defines the root application component.
 * @returns {JSX.Element}
 */

 const [reservations, setReservations] = useState(RecipeData)

function App() {
  return (
    <Switch>
      <Route path="/">
        <Layout />
      </Route>
      <Route path="/reservations/new">
        <ReservationCreate reservations={reservations} setReservations={setReservations }/>
      </Route>
    </Switch>
  );
}

export default App;