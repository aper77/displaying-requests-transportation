import TransportationRequests from "./TransportationRequests";
import Map from "./Map";
import { useState } from "react";

const initialRoutes = [
  {
    loadingAddressLat: 40.16577098614023, loadingAddressLng: 44.28563057940129, loadingAddressName: 'Vagharshapat',
    unloadingAddressLat: 40.127659918618065, unloadingAddressLng: 44.73004047370724, unloadingAddressName: 'Gharni'
  },
  {
    loadingAddressLat: 40.32047631808703, loadingAddressLng: 44.480477651161095, loadingAddressName: 'Ashtarak',
    unloadingAddressLat: 40.189047526231334, unloadingAddressLng: 44.504357760617864, unloadingAddressName: 'Erevan'
  },
  {
    loadingAddressLat: 39.95925629402136, loadingAddressLng: 44.54614864802275, loadingAddressName: 'Artashat',
    unloadingAddressLat: 39.91554351998659, unloadingAddressLng: 44.71570722075674, unloadingAddressName: 'Vedi'
  },
  {
    loadingAddressLat: 40.073235321099325, loadingAddressLng: 44.26147517877637, loadingAddressName: 'Jrarat',
    unloadingAddressLat: 40.56125502803682, unloadingAddressLng: 44.75864194479583, unloadingAddressName: 'Hrazdan'
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
