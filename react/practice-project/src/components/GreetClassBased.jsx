import React from "react";


class GreetClassBased extends React.Component{
    render(){
        return(
            <h1>Welcome {this.props.user} from Class based Component</h1>
        )
    }
}

export default GreetClassBased