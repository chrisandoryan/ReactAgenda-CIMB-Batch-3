import React from "react";
import { Form, Button } from "react-bootstrap";

class AgendaFormClass extends React.Component {
    constructor(props) {
        super(props);
        // panggil parent function via props
        // props.callTestFunction();
        this.state = {
            agendaName: "",
            agendaDate: "",
            agendaStartTime: "",
            agendaEndTime: "",
            agendaDescription: ""
        }
        // React v2018/19 (old) perlu binding function untuk bisa dijadiin event handler
        this.handleOnKeyPress = this.handleOnKeyPress.bind(this)
    }

    // handle onKeyDown
    handleOnKeyDown = (e) => {
        console.log(e);
        // karakter yang terakhir diketik
        let key = e.key;
        // value dari input box nya
        let inputValue = e.target.value;
        console.log('keyDown', key)
        console.log('inpValueDown', inputValue)
    }

    // handle onKeyUp
    handleOnKeyUp = (e) => {
        console.log("Current State: ", this.state);
        let key = e.key;
        let inputValue = e.target.value;
        console.log('keyUp', key)
        console.log('inpValueUp', inputValue)
        this.setState({
            agendaName: inputValue
        })
    }

    // handle onKeyPress
    handleOnKeyPress(e) {
        // alert("KeyPress detected!")
        console.log(e)
    }

    // handleOnFocus
    handleOnFocus = (e) => {
        console.log("Focus detected!")
    }

    handleAgendaNameInput = (e) => {
        let agendaName = e.target.value;
        this.setState({
            agendaName: agendaName
        })
    }

    handleAgendaDateChange = (e) => {
        let agendaDate = e.target.value;
        this.setState({
            agendaDate: agendaDate
        })
    }

    handleAgendaStartTimeChange = (e) => {
        let agendaStartTime = e.target.value;
        this.setState({
            agendaStartTime: agendaStartTime
        })
    }

    handleAgendaEndTimeChange = (e) => {
        let agendaEndTime = e.target.value;
        this.setState({
            agendaEndTime: agendaEndTime
        })
    }

    handleAgendaDescriptionInput = (e) => {
        let agendaDescription = e.target.value;
        this.setState({
            agendaDescription
        })
    }

    resetAgendaForm = (e) => {
        // Reset form inputs
        e.target.title.value = "";
        e.target.date.value = "";
        e.target.start_time.value = "";
        e.target.end_time.value = "";
        e.target.description.value = "";
    }

    handleAgendaSubmit = (e) => {
        e.preventDefault();
        
        let agendaObject = {
            agendaName: this.state.agendaName,
            agendaDate: this.state.agendaDate,
            agendaStartTime: this.state.agendaStartTime,
            agendaEndTime: this.state.agendaEndTime,
            agendaDescription: this.state.agendaDescription
        }

        this.props.callAddAgenda(agendaObject);
        this.resetAgendaForm(e);
    }

    componentDidMount() {
        
    }

    componentDidUpdate() {
    }

    render() {
        return (
            <Form onSubmit={this.handleAgendaSubmit}>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Agenda Title" onInput={this.handleAgendaNameInput} name="title" />
                    <Form.Text className="text-muted">
                        Please be as clear as possible.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Date</Form.Label>
                    <Form.Control onChange={this.handleAgendaDateChange} type="date" placeholder="Enter Agenda Date" name="date" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Control onChange={this.handleAgendaStartTimeChange} type="time" placeholder="Enter Agenda Start Time" name="start_time" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>End Time</Form.Label>
                    <Form.Control onChange={this.handleAgendaEndTimeChange} type="time" placeholder="Enter Agenda End Time" name="end_time" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Description</Form.Label>
                    <Form.Control onInput={this.handleAgendaDescriptionInput} as="textarea" rows={3} name="description" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Save
                </Button>   
            </Form>
        )
    }
}

export default AgendaFormClass;