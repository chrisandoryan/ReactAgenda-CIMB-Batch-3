import React from "react";
import { Card, Button } from "react-bootstrap";

import styles from "../../assets/css/card.module.css";

class AgendaCardClass extends React.Component {
    constructor(props) {
        super(props);
    }

    handleEditClick = () => {
        let agendaIndex = this.props.agendaId;
        this.props.callEnableEditMode(agendaIndex);
    }

    handleDeleteClick = () => {
        let agendaIndex = this.props.agendaId;
        this.props.callDeleteAgenda(agendaIndex);
    }

    render() {
        return (
            <div className={styles['agenda-card']}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{this.props.agendaName}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.props.agendaDate} | {this.props.agendaStartTime} - {this.props.agendaEndTime}</Card.Subtitle>
                        <Card.Text>
                            {this.props.agendaDescription}
                        </Card.Text>
                        <Button onClick={this.handleEditClick} variant="primary">Edit</Button>
                        <Button onClick={this.handleDeleteClick} variant="danger">Delete</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default AgendaCardClass;