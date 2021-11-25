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
        // throw new Error("Dhuar! Ada error gan!");
        
        // alert("componentDidMount!");
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
        // alert('componentDidUpdate!')
    }

    testFunction = () => {
        alert("Terpanggil!")
    }

    addAgenda = (agendaObject) => {
        console.log("AO", agendaObject)
        // Note: state adalah immutable => tidak bisa dirubah langsung
        // Cara 1: simpen current state ke temp variable
        // let agendas = this.state.agendas;
        // agendas.push(agendaObject);
        // this.setState({
        //     agendas: agendas
        // });

        // Cara 2: Spread syntax/spread function (...)
        this.setState({
            agendas: [...this.state.agendas, agendaObject]
        })
    }

    deleteAgenda = (agendaIndex) => {
        if (agendaIndex <= this.state.agendas.length) {
            let agendas = [...this.state.agendas];
            agendas.splice(agendaIndex, 1);
            this.setState({
                agendas: agendas
            })
        } else {
            console.log("Error while deleting agenda.");
        }
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
                <Container>
                    <Row>
                        {/* xs => layar hp (xtra small), md=> layar tab dsb (medium), lg => layar laptop, pc, dsb (large) */}
                        <Col xs={12} md={4} lg={4}>
                            <div className="agendaForm">
                                <AgendaFormClass callTestFunction={this.testFunction} callAddAgenda={this.addAgenda} />
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
                                            <AgendaCardClass {...agenda} callDeleteAgenda={this.deleteAgenda} agendaId={index}></AgendaCardClass>
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

