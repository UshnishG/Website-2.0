"use client";

import React, { useEffect, useState } from "react";

export const Calendar = () => {
  const [year, setYear] = useState<number | null>(null);
  const [days, setDays] = useState<(number | null)[]>([]);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  const timelineData: Record<number, { time: string; event: string }[]> = {
    25: [
        { time: "Till 11:59 PM", event: "Form Submission Deadline" },
    ],
    28: [
        { time: "Till 12:00 PM", event: "Round 1 PPT Submission Deadline" },
    ],
    29: [
        { time: "10:00 AM", event: "Hackathon Orientation" },
        { time: "03:00 PM", event: "Hackathon Start" },
    ],
    30: [
        { time: "03:00 PM", event: "Hackathon End" },
    ],
    31: [
        { time: "09:00 AM", event: "Open Mic" },
        { time: "02:00 PM", event: "Prize Distribution" },
    ],
};


  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const firstDayOfMonth = new Date(currentYear, 0, 1);
    const lastDayOfMonth = new Date(currentYear, 1, 0);

    const calculatedDays: (number | null)[] = [];
    for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
      calculatedDays.push(null);
    }
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      calculatedDays.push(i);
    }

    setYear(currentYear);
    setDays(calculatedDays);
  }, []);

  if (!year) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex justify-center items-center py-10 px-4">
      <div className="bg-gray-900 bg-opacity-60 max-w-full md:max-w-lg rounded-lg shadow-lg p-4 sm:p-8">
        {/* Calendar Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            January {year}
          </h1>
          <div className="grid grid-cols-7 text-sm sm:text-lg text-gray-400 mt-4">
            {daysOfWeek.map((day, index) => (
              <div key={index} className="text-center font-medium">
                {day}
              </div>
            ))}
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2 sm:gap-4 text-center">
          {days.map((day, index) =>
            day ? (
              <button
                key={index}
                type="button"
                className={`h-12 w-12 sm:h-16 sm:w-16 flex flex-col items-center justify-center rounded-md text-sm sm:text-lg font-semibold transition-all ${
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
              <div key={index} className="h-12 w-12 sm:h-16 sm:w-16"></div>
            )
          )}
        </div>

        {/* Modernized Timeline Section */}
        {selectedDate && (
          <div className="mt-6 sm:mt-8 bg-gray-800 bg-opacity-60 p-4 sm:p-6 rounded-lg shadow-lg">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
              Timeline for {selectedDate} January {year}
            </h3>
            {timelineData[selectedDate] ? (
              <div className="space-y-4">
                {timelineData[selectedDate].map((entry, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between bg-gray-700 bg-opacity-80 p-4 rounded-lg shadow-md"
                  >
                    <div className="text-sm sm:text-base font-semibold text-white">
                      {entry.time}
                    </div>
                    <div className="text-sm sm:text-base text-gray-300">
                      {entry.event}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center gap-4 bg-gray-700 bg-opacity-80 p-4 rounded-lg shadow-md">
                <span className="material-icons text-gray-400 text-3xl"></span>
                <p className="text-gray-400 text-sm sm:text-base">
                  No events scheduled for this date.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
