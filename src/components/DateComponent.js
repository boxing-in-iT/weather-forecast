import React from "react";
import moment from "moment";

const DateComponent = ({ date }) => {
  const formattedDate = moment(date).format("YYYY-MM-DD");
  const currentDate = moment().format("YYYY-MM-DD");

  if (formattedDate === currentDate) {
    return <div>Сегодня</div>;
  }

  const dayOfWeek = moment(date).format("dddd");

  return <div>{dayOfWeek}</div>;
};

export default DateComponent;
