import React from "react";


function TransportationRequests({ routes, selected, selectRoute, setRoutes }) {

    const onChangeName = (index, e) => {
        const tempRoutes = [...routes];
        tempRoutes[index][e.target.name] = e.target.value;
        setRoutes(tempRoutes);
    }

    // const onAddRoutes = () => {
    //     const tempRoutes = [...routes];
    //     tempRoutes.push({
    //         startLat: 40.16577098614023, startLng: 44.28563057940129, startName: '',
    //         endLat: 40.127659918618065, endLng: 44.73004047370724, endName: ''
    //     })
    //     setRoutes(tempRoutes);
    // }


    return (
        <div className="responses">
            <table>
                <tr>
                    <th>From Address</th>
                    <th>To Address</th>
                </tr>
                <tbody>
                    {routes.map((item, index) => {
                        const isActive = selected === index;
                        return (
                            <tr onClick={() => selectRoute(index)} key={index} className={isActive ? 'active' : ''}>
                                <td>
                                    startLat:  <input type="text" name='startLat' value={item.startLat} onChange={(e) => onChangeName(index, e)}></input>
                                    endLat: <input type="text" name='endLat' value={item.endLat} onChange={(e) => onChangeName(index, e)}></input>
                                </td>
                                <td>
                                    startLng:  <input type="text" name='startLng' value={item.startLng} onChange={(e) => onChangeName(index, e)}></input>
                                    endLng   <input type="text" name='endLng' value={item.endLng} onChange={(e) => onChangeName(index, e)}></input>
                                </td>
                                <td>
                                    start: <input type="text" name='startName' value={item.startName} onChange={(e) => onChangeName(index, e)}></input>
                                    end:  <input type="text" name='endName' value={item.endName} onChange={(e) => onChangeName(index, e)}></input>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div >
    )
}

export default TransportationRequests;