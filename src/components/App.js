import TransportationRequests from "./TransportationRequests";
import Map from "./Map";
import { useState } from "react";

const initialRoutes = [
  {
    startLat: 40.16577098614023, startLng: 44.28563057940129, startName: 'Vagharshapat',
    endLat: 40.127659918618065, endLng: 44.73004047370724, endName: 'Gharni'
  },
  {
    startLat: 40.32047631808703, startLng: 44.480477651161095, startName: 'Ashtarak',
    endLat: 40.189047526231334, endLng: 44.504357760617864, endName: 'Erevan'
  },
  {
    startLat: 39.95925629402136, startLng: 44.54614864802275, startName: 'Artashat',
    endLat: 39.91554351998659, endLng: 44.71570722075674, endName: 'Vedi'
  },
  {
    startLat: 40.073235321099325, startLng: 44.26147517877637, startName: 'Jrarat',
    endLat: 40.56125502803682, endLng: 44.75864194479583, endName: 'Hrazdan'
  }
]

function App() {
  const [selected, setSelected] = useState({});
  const [routes, setRoutes] = useState([...initialRoutes])

  return (
    <div className="app">
      <TransportationRequests routes={routes} selected={selected} selectRoute={setSelected} setRoutes={setRoutes} />
      <Map activeRoute={routes[selected]} />
    </div>
  );
}

export default App;
