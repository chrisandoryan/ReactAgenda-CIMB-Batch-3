import AgendaFunction from "../AgendaFunction";
import { mount } from "enzyme";
import AgendaCardClass from "../../components/class/AgendaCardClass";
import AgendaFormClass from "../../components/class/AgendaFormClass";

describe("Agenda (Function)", () => {
    var component = mount(<AgendaFunction />);
    it("should display 2 agenda cards", () => {
        expect(component.find(AgendaCardClass)).toHaveLength(2);
    })
    it("should delete agenda when delete button is clicked", () => {
        expect(component.find(AgendaCardClass)).toHaveLength(2);
        component.find("#btnDelete").at(0).simulate("click")
        component.find("#btnDelete").at(1).simulate("click")
        expect(component.find(AgendaCardClass)).toHaveLength(0);
    })
    it("should add agenda when submit button is clicked", () => {
        expect(component.find(AgendaCardClass)).toHaveLength(0)
        component.find("#inpTitle").first().simulate("input", {
            target: {
                value: "Testing Agenda"
            }
        })
        component.find("#inpDate").first().simulate("change", {
            target: {
                value: "2021-05-13"
            }
        })
        component.find("#inpStartTime").first().simulate("change", {
            target: {
                value: "13:00"
            }
        })
        component.find("#inpEndTime").first().simulate("change", {
            target: {
                value: "15:00"
            }
        })
        component.find("#inpDescription").first().simulate("change", {
            target: {
                value: "Testing addAgenda from JEST"
            }
        })
        component.find(AgendaFormClass).simulate("submit", {
            target: {
                title: { value: "" },
                date: { value: "" },
                start_time: { value: "" },
                end_time: { value: "" },
                description: { value: "" },
            }
        });
        expect(component.find(AgendaCardClass)).toHaveLength(1);
    })
})