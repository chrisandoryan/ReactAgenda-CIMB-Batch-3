import React from "react";
import { Form, Button } from "react-bootstrap";

class AgendaFormClass extends React.Component {
    constructor(props) {
        super(props);
        // panggil parent function via props
        // props.callTestFunction();
    }
    render() {
        return (
            <Form>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Agenda Title" />
                    <Form.Text className="text-muted">
                        Please be as clear as possible.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" placeholder="Enter Agenda Date" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Control type="time" placeholder="Enter Agenda Start Time" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>End Time</Form.Label>
                    <Form.Control type="time" placeholder="Enter Agenda End Time" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default AgendaFormClass;