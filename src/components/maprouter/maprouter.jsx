import React, {useEffect} from "react";
import "./maprouter.css";
import {Button} from "../button/button";
import {getAddressList} from "../../actions";
import {connect} from "react-redux";


export const MapRouter = ({getAddress, address, address1, address2}) => {

    useEffect(() => {
        getAddress()
    }, [])

    return (
        <div className="map-router">
            <select>
                {address.list.map((item) => (
                    <option name={address1} value={item} key={{item}}>{item}</option>
                ))}
            </select>
            <select>
                {address.list.map((item) => (
                    <option name={address2} value={item} key={{item}}>{item}</option>
                ))}
            </select>
            <Button value="Вызвать такси"/>
        </div>
    );
};

export const MapRouterWithConnect = connect(
    state => ({address: state.address}),
    {getAddress: getAddressList}
)(MapRouter)
