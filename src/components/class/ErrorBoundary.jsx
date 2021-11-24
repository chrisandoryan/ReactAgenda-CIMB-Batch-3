import React from "react";
import { Alert } from "react-bootstrap";


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError() {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        alert("componentDidCatch!");
        console.log(error);
        console.log(info);
        // TODO: send error to analytics / bug tracker
        // sendErrorToBugDeposit(error, info); // fungsi contoh ya
    }

    render() {
        return (
            this.state.hasError === true ? (
                <Alert variant="success">
                    <Alert.Heading>Oh gosh! Error detected.</Alert.Heading>
                    <p>
                        Aww yeah, you successfully read this important alert message. This example
                        text is going to run a bit longer so that you can see how spacing within an
                        alert works with this kind of content.
                    </p>
                    <hr />
                    <p className="mb-0">
                        Whenever you need to, be sure to use margin utilities to keep things nice
                        and tidy.
                    </p>
                </Alert> 
            ) : (
                // tampilin component-component yang berada di bawah ErrorBoundary
                this.props.children
            )
        )
    }
}

export default ErrorBoundary;