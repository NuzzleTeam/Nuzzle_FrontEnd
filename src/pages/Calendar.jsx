import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <CalendarWrapper>
      <StyledCalendar onChange={handleDateChange} value={date} locale="ko-KR" />
    </CalendarWrapper>
  );
};

export default CalendarPage;

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  font-family: "Pretendard", sans-serif;
`;

const StyledCalendar = styled(Calendar)`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  font-family: "Pretendard";
  margin-top: 80px;

  .react-calendar__navigation {
    background-color: rgba(255, 255, 255, 0.2);
    margin-bottom: 10px;
  }

  .react-calendar__navigation button {
    width: 100%;
    font-size: 1.5rem;
  }

  .react-calendar__navigation__label__labelText {
    font-size: 0.8rem;
  }

  .react-calendar__navigation__label {
    font-size: 20px;
    font-weight: 700;
  }

  .react-calendar__month-view__weekdays {
    background-color: rgba(255, 255, 255, 0.2);
  }

  .react-calendar__tile {
    background-color: transparent;
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    &:hover {
      background-color: rgba(255, 177, 208, 0.4);
    }
  }

  .react-calendar__tile--active {
    background-color: rgba(255, 177, 208, 0.8);
  }

  .react-calendar__tile--now {
    background-color: rgba(255, 177, 208, 0.3);
  }

  .react-calendar__tile--now:hover {
    background-color: rgba(255, 177, 208, 0.4);
  }

  .react-calendar__tile--active:hover {
    background-color: rgba(255, 177, 208, 0.9);
  }

  .react-calendar__tile--active:enabled:focus {
    background-color: rgba(255, 177, 208, 1);
  }
`;

const SelectedDate = styled.p`
  font-size: 18px;
  color: #353535;
  font-weight: bold;
`;
