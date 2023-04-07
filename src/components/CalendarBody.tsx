import React from 'react';

type CalendarBodyProps = {
  currentDate: Date;
};

function CalendarBody({ currentDate }: CalendarBodyProps) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blankDays = Array.from({ length: firstDayOfMonth - 1 }, (_, i) => null);
  const allDays = [...blankDays, ...monthDays];

  const rows = Array.from({ length: Math.ceil(allDays.length / 7) }, (_, i) =>
    allDays.slice(i * 7, i * 7 + 7)
  );

  const today = new Date();

  return (
    <div className="calendar-body">
      <table>
        <thead>
          <tr>
            {daysOfWeek.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((day, j) => (
                <td
                  key={j}
                  className={`${day === null ? 'blank' : ''}${
                    day === today.getDate() &&
                    currentDate.getMonth() === today.getMonth() &&
                    currentDate.getFullYear() === today.getFullYear()
                      ? ' today'
                      : ''
                  }`}
                >
                  {day === null ? '' : day}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CalendarBody;
