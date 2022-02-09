import moment from "moment";

export function formatDate(date: any, format: string) {
  moment.locale("vi");
  switch (format) {
    case "":
      return moment(date).format("DD/MM/YYYY");
    case "year":
      return moment(date).format("YYYY");
    case "DMY":
      return (
        moment(date).format("Do") +
        " tháng " +
        moment(date).format("Mo") +
        ", " +
        moment(date).format("YYYY")
      );
    case "DM":
      return moment(date).format("Do") + " tháng " + moment(date).format("Mo");
    default:
      return moment(date).format(format);
  }
}
