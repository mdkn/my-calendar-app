import React from 'react';

type CalendarHeaderProps = {
  title: string;
  onPrevMonth: () => void;
  onNextMonth: () => void;
};

function CalendarHeader({
  title,
  onPrevMonth,
  onNextMonth,
}: CalendarHeaderProps) {
  return (
    <div className="calendar-header">
      <h2>{title}</h2>
      <div>
        <button onClick={onPrevMonth}>Prev</button>
        <button onClick={onNextMonth}>Next</button>
      </div>
    </div>
  );
}

export default CalendarHeader;
