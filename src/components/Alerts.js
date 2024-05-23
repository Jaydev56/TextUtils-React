import React from "react";

export default function Alerts(props){
    return(
    <div style={{height: '50px'}}>
    {props.alert &&
    <div style={{textAlign: "center"}} className={`alert alert-${props.alert.alert} fade-shadow`} role="alert" >
    <div >{props.alert.msg}</div>
    </div>}
    </div>
    )
}