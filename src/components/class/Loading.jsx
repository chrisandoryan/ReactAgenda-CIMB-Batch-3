import React from "react";
import { Spinner } from "react-bootstrap";

class Loading extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        // di-trigger ketika component Loading dicabut dari UI
        alert("componentWillUnmount!")
    }

    render() {
        return (
            <div>
                <Spinner animation="grow" />
            </div>
        )
    }
}

export default Loading;