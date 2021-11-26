import { convertDate } from "../dateConversion";

describe("DateConversion", () => {
    it("should convert date to correct format", () => {
        let dates = [
            "10 November 2021",
            "11-10-2021",
            "11/10/2021"
        ]
        dates.forEach(date => {
            expect(convertDate(date)).toBe("2021-11-10");
        });
    })
})