import React from "react";


function TransportationRequests({ routes, selected, selectRoute, setRoutes }) {

    const onChangeName = (index, e) => {
        const tempRoutes = [...routes];
        tempRoutes[index][e.target.name] = e.target.value;
        setRoutes(tempRoutes);
    }

    return (
        <div className="responses">
            <table>
                <tr>
                    <th><h6>Loading Address</h6></th>
                    <th><h6>Unloading Address </h6></th>
                </tr>
                <tbody>
                    {routes.map((item, index) => {
                        const isActive = selected === index;
                        return (
                            <tr onClick={() => selectRoute(index)} key={index} className={isActive ? 'active' : 'default'}>

                                <td>
                                    <input type="text" name='loadingAddressName' value={item.loadingAddressName} onChange={(e) => onChangeName(index, e)}></input>
                                    <td>
                                        Loading Address Lat:  <input type="text" name='loadingAddressLat' value={item.loadingAddressLat} onChange={(e) => onChangeName(index, e)}></input>
                                        Unloading Address Lat: <input type="text" name='unloadingAddressLat' value={item.unloadingAddressLat} onChange={(e) => onChangeName(index, e)}></input>
                                    </td>
                                </td>
                                <td className="td-resize">
                                    <input type="text" name='unloadingAddressName' value={item.unloadingAddressName} onChange={(e) => onChangeName(index, e)}></input>
                                    <td>
                                        Loading Address Lng:  <input type="text" name='loadingAddressLng' value={item.loadingAddressLng} onChange={(e) => onChangeName(index, e)}></input>
                                        Unloading Address Lng:   <input type="text" name='unloadingAddressLng' value={item.unloadingAddressLng} onChange={(e) => onChangeName(index, e)}></input>
                                    </td>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <p>If you want  to change loading  place address you can changing loading addres lat,loading address lng the same way with unloading.
                I do not finde free google map Geocoder api,for seraching with address in place of lat,lng.Thanks</p>
        </div >
    )
}

export default TransportationRequests;