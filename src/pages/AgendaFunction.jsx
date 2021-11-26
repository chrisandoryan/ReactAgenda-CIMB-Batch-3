import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AgendaCardClass from "../components/class/AgendaCardClass";
import AgendaFormClass from "../components/class/AgendaFormClass";
import Loading from "../components/class/Loading";

import "../assets/css/agenda.css";

function AgendaFunction(props) {
    const [isLoading, setIsLoading] = useState(true)
    const [editMode, setEditMode] = useState(false)
    const [agendaToEdit, setAgendaToEdit] = useState(null)
    const [agendaToEditIndex, setAgendaToEditIndex] = useState(-1)
    const [agendas, setAgendas] = useState([
        {
            agendaName: "Monthly Meeting",
            agendaDate: "November 12, 2021",
            agendaStartTime: "11:00",
            agendaEndTime: "12:00",
            agendaDescription: "Harap hadir tepat waktu karena akan ada si bos."
        },
        {
            agendaName: "Weekly Shopping",
            agendaDate: "November 21, 2021",
            agendaStartTime: "15:00",
            agendaEndTime: "14:00",
            agendaDescription: "Beli ayam kalkun."
        }
    ])

    const addAgenda = (agendaObject) => {
        setAgendas([...agendas, agendaObject]);
    }

    const deleteAgenda = (agendaIndex) => {
        if (agendaIndex <= agendas.length) {
            let tempAgendas = [...agendas];
            tempAgendas.splice(agendaIndex, 1);
            setAgendas(tempAgendas);
        } else {
            console.log("Error while deleting agenda.");
        }
    }

    const editAgenda = (agendaIndex, agendaObject) => {
        let tempAgendas = [...agendas];
        tempAgendas[agendaIndex] = agendaObject;
        setAgendas(tempAgendas);
        disableEditMode();
    }

    const enableEditMode = (agendaIndex) => {
        let toEdit = {...agendas[agendaIndex]};
        console.log(toEdit);
        setAgendaToEdit(toEdit);
        setAgendaToEditIndex(agendaIndex);
        setEditMode(true);
    }

    const disableEditMode = () => {
        setAgendaToEdit({});
        setAgendaToEdit(-1);
        setEditMode(false);
    }

    // eq. componentDidMount
    useEffect(() => {
        setTimeout(() => { 
            setIsLoading(false);
        }, 5000)
    }, [])

    return (
        <div>
            {
                isLoading === true ? (
                    <Loading darkMode={true} />
                ) : (
                    null
                )
            }
            <Container>
                <Row>
                    <Col xs={12} md={4} lg={4}>
                        <div className="">
                            <h2>What do you want to do?</h2>
                        </div>
                        <div className="agendaForm">
                            <AgendaFormClass editMode={editMode} {...agendaToEdit} agendaIndex={agendaToEditIndex} callAddAgenda={addAgenda} callEditAgenda={editAgenda} />
                        </div>
                    </Col>
                    <Col xs={12} md={8} lg={8}>
                        <div className="">
                            <h2>Your Agenda</h2>
                        </div>
                        <div className="agendaList">
                            {
                                agendas.map((agenda, index) => {
                                    return (
                                        <AgendaCardClass {...agenda} callDeleteAgenda={deleteAgenda} callEnableEditMode={enableEditMode} agendaId={index} />
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

export default AgendaFunction;