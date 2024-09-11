import React, { useState, useEffect } from "react";
import Select from "react-select";
import styled from "styled-components";

const years = Array.from({ length: 100 }, (_, i) => ({
  value: 2024 - i,
  label: 2024 - i,
}));
const months = Array.from({ length: 12 }, (_, i) => ({
  value: i + 1,
  label: i + 1,
}));
const days = Array.from({ length: 31 }, (_, i) => ({
  value: i + 1,
  label: i + 1,
}));

const CustomDatePicker = ({ selectedDate, onChange }) => {
  const [year, setYear] = useState(selectedDate.getFullYear());
  const [month, setMonth] = useState(selectedDate.getMonth() + 1);
  const [day, setDay] = useState(selectedDate.getDate());

  useEffect(() => {
    onChange(new Date(year, month - 1, day));
  }, [year, month, day, onChange]);

  const handleYearChange = (option) => setYear(option.value);
  const handleMonthChange = (option) => setMonth(option.value);
  const handleDayChange = (option) => setDay(option.value);

  return (
    <DatePickerWrapper>
      <Select
        options={years}
        value={years.find((y) => y.value === year)}
        onChange={handleYearChange}
        placeholder="Year"
      />
      <Select
        options={months}
        value={months.find((m) => m.value === month)}
        onChange={handleMonthChange}
        placeholder="Month"
      />
      <Select
        options={days}
        value={days.find((d) => d.value === day)}
        onChange={handleDayChange}
        placeholder="Day"
      />
    </DatePickerWrapper>
  );
};

export default CustomDatePicker;

const DatePickerWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
