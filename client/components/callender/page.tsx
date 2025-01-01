import React, { useState } from "react";

export const Calendar = () => {
  const year = new Date().getFullYear();
  const month = 0; // Fixed to January (0-indexed)

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  const days = [];
  for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
    days.push(null);
  }
  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    days.push(i);
  }

  const timelineData: Record<number, string[]> = {
    29: [
      "Team Meeting at 10 AM",
      "Team Lunch at 1 PM",
      "Client Meeting at 3 PM",
      "Team Dinner at 7 PM",
    ],
    30: ["Project Deadline at 5 PM"],
    31: ["Annual Review at 3 PM"],
  };

  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  return (
    <div className="flex justify-center items-center py-10">
      <div className="bg-gray-900 bg-opacity-60 max-w-fit rounded-lg shadow-lg p-8">
        {/* Calendar Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">January {year}</h1>
          <div className="grid grid-cols-7 text-lg text-gray-400 mt-4">
            {daysOfWeek.map((day, index) => (
              <div key={index} className="text-center font-medium">
                {day}
              </div>
            ))}
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-4 text-center">
          {days.map((day, index) =>
            day ? (
              <button
                key={index}
                type="button"
                className={`h-16 w-16 flex flex-col items-center justify-center rounded-md text-lg font-semibold transition-all ${
                  timelineData[day]
                    ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md"
                    : "bg-gray-700 bg-opacity-60 text-gray-300 hover:bg-gray-600"
                } ${
                  selectedDate === day
                    ? "border-4 border-indigo-500 shadow-lg"
                    : ""
                }`}
                onClick={() => setSelectedDate(day)}
              >
                {day}
                {timelineData[day] && (
                  <span className="w-2 h-2 mt-1 rounded-full bg-yellow-400"></span>
                )}
              </button>
            ) : (
              <div key={index} className="h-16 w-16"></div>
            )
          )}
        </div>

        {/* Timeline Section */}
        {selectedDate && (
          <div className="mt-8 bg-gray-800 bg-opacity-60 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-white mb-4">
              Timeline for {selectedDate} January {year}
            </h3>
            {timelineData[selectedDate] ? (
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {timelineData[selectedDate].map((event, idx) => (
                  <li key={idx}>{event}</li>
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
