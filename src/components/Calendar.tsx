import React, { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';
import './Calendar.css';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => {
    const prevMonthDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1
    );
    setCurrentDate(prevMonthDate);
  };

  const handleNextMonth = () => {
    const nextMonthDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1
    );
    setCurrentDate(nextMonthDate);
  };

  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth() + 1

  return (
    <div className="calendar">
      <CalendarHeader
        title={`${currentYear}/${currentMonth}`}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />
      <CalendarBody year={currentYear} month={currentMonth} />
    </div>
  );
}

export default Calendar;
