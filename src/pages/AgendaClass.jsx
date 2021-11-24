import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AgendaCardClass from "../components/class/AgendaCardClass";
import AgendaFormClass from "../components/class/AgendaFormClass";
import AgendaNavbar from "../components/class/AgendaNavbar";
import Loading from "../components/class/Loading";

class AgendaClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            agendas: [
                {
                    agendaName: "Monthly Meeting",
                    agendaDate: "11 November 2021",
                    agendaStartTime: "11.00",
                    agendaEndTime: "12:00",
                    agendaDescription: "Harap hadir tepat waktu karena akan ada si bos."
                },
                {
                    agendaName: "Weekly Shopping",
                    agendaDate: "12 November 2021",
                    agendaStartTime: "15.00",
                    agendaEndTime: "14:00",
                    agendaDescription: "Beli ayam kalkun."
                }
            ]
        }
    }

    componentDidMount() {
        // simulate crash/error
        throw new Error("Dhuar! Ada error gan!");
        
        alert("componentDidMount!");
        // TODO: Load API
        setTimeout(() => {
            // update data didalam state
            this.setState({
                isLoading: false
            })
        }, 5000)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('PP', prevProps);
        console.log('PS', prevState);
        alert('componentDidUpdate!')
    }

    testFunction = () => {
        alert("Terpanggil!")
    }

    // responsible to display things on the UI
    render() {  
        return (
            <div>
                {
                    this.state.isLoading === true ? (
                        <Loading />
                    ) : (
                        null
                    )
                }
                <div className="header">
                    <AgendaNavbar />
                </div>
                <Container>
                    <Row>
                        {/* xs => layar hp (xtra small), md=> layar tab dsb (medium), lg => layar laptop, pc, dsb (large) */}
                        <Col xs={12} md={4} lg={4}>
                            <div className="agendaForm">
                                <AgendaFormClass callTestFunction={this.testFunction} />
                            </div>
                        </Col>
                        <Col>
                            <div className="agendaList">
                                {
                                    this.state.agendas.map((agenda, index) => {
                                        return (
                                            // Alt 1: props passing with variable
                                            // <AgendaCardClass dataAgenda={agenda} ></AgendaCardClass>
                                            // Alt 2: props passing using spread function
                                            <AgendaCardClass {...agenda}></AgendaCardClass>
                                        )
                                    })
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AgendaClass;

