import React, { useState } from "react";

export const Calendar = () => {
  const year = new Date().getFullYear();
  const month = 0; // Fixed to January (0-indexed)

  // Get the first and last days of January
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  // Days of the week
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  // Generate the calendar days
  const days = [];
  for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
    days.push(null); // Empty slots before the first day of the month
  }
  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    days.push(i);
  }

  // Timeline data for each day
  const timelineData: Record<number, string[]> = {
    29: ["Team Meeting at 10 AM", "Team Lunch at 1 PM", "Client Meeting at 3 PM", "Team Dinner at 7 PM"],
    30: ["Project Deadline at 5 PM"],
    31: ["Annual Review at 3 PM"],
  };

  // State for selected date
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  return (
    <div className="lg:w-[40rem] w-[30rem] h-full p-6">
      <div className="w-full h-full flex flex-col justify-center items-center text-white bg-transparent rounded-xl">
        <div className="text-center w-full">
          <div className="flex items-center justify-between mb-4">
            <div className="text-xl font-semibold text-gray-300">
              January {year}
            </div>
          </div>
          <div className="grid grid-cols-7 text-lg font-medium text-gray-400 mb-2">
            {daysOfWeek.map((day, index) => (
              <div key={index} className="text-center">
                {day}
              </div>
            ))}
          </div>
          <div className="isolate mt-2 grid grid-cols-7 gap-2">
            {days.map((day, index) =>
              day ? (
                <button
                  key={index}
                  type="button"
                  className={`lg:h-16 lg:w-16 sm:h-14 sm:w-14 w-10 h-10 flex items-center justify-center rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
                    timelineData[day]
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                  onClick={() => setSelectedDate(day)}
                >
                  <time
                    dateTime={`${year}-${month + 1}-${day}`}
                    className="text-lg font-semibold"
                  >
                    {day}
                  </time>
                </button>
              ) : (
                <div key={index} className="w-10 h-10"></div> // Empty slots
              )
            )}
          </div>
        </div>
        {selectedDate && (
          <div className="mt-6 w-full bg-gray-700 text-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Timeline for {selectedDate} January {year}</h3>
            {timelineData[selectedDate] ? (
              <ul className="list-disc list-inside">
                {timelineData[selectedDate].map((event, idx) => (
                  <li key={idx} className="text-gray-300">
                    {event}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">No events scheduled for this date.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
