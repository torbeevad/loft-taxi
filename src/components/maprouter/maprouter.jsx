import React, {useEffect} from "react";
import "./maprouter.css";
import {Button} from "../button/button";
import {getAddressList} from "../../actions";
import {connect} from "react-redux";


export const MapRouter = ({getAddress, address}) => {

    useEffect(() => {
        console.log('address:', address)
        getAddress(address)
    })

    return (
        <div className="map-router">
            <select>
                <option value="value1">Значение 1</option>
            </select>
            <select>
                <option value="value1">Значение 2</option>
            </select>
            <Button value="Вызвать такси"/>
        </div>
    );
};

export default connect(
    state => ({address: state.address}),
    {getAddress: getAddressList}
)
