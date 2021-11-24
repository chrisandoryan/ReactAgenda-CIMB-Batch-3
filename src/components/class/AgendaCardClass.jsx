import React from "react";
import { Card, Button } from "react-bootstrap";

class AgendaCardClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.agendaName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.agendaDate} | {this.props.agendaStartTime} - {this.props.agendaEndTime}</Card.Subtitle>
                    <Card.Text>
                        {this.props.agendaDescription}
                    </Card.Text>
                    <Button variant="primary">Edit</Button>
                    <Button variant="danger">Delete</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default AgendaCardClass;