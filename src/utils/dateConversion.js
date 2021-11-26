import moment from "moment";

const convertDate = (strDate) => {
    let date = ""
    // kalau value strDate kosong, jangan convert pake moment
    if (strDate) {
        date = moment(strDate).format("YYYY-MM-DD");
    }
    return date;
}

const convertTime = (strTime) => {

}

export { convertDate, convertTime }

