import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyDatePicker = ({ selectedDate, setSelectedDate, format = "DD/MM/AAAA" }) => <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} dateFormat={format} />;

export default MyDatePicker;
