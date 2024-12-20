import React from "react";

export const Calender = () => {
  return (
    <div className="w-[40rem] h-full p-4"> 
      <div className="w-full h-full flex flex-col justify-center">
        <h2 className="text-base font-semibold leading-6 text-white">
          Event Calender
        </h2>
        <div className="lg:grid-cols-12 gap-2">
          <div className="text-center">
            <div className="flex items-center text-white">
              <div className="flex-auto text-sm font-semibold">January</div>
            </div>
            <div className=" grid grid-cols-7 text-xs leading-6 text-gray-500">
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
              <div>S</div>
            </div>
            <div className="isolate mt-2 grid grid-cols-7 gap-2 rounded-lg text-sm shadow">
              <button
                type="button"
                className="h-20 w-20 rounded-full bg-gray-50 text-gray-400 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2021-12-27"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  27
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-gray-50 text-gray-400 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2021-12-28"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  28
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-gray-50   text-gray-400 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2021-12-29"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  29
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-gray-50   text-gray-400 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2021-12-30"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  30
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-gray-50   text-gray-400 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2021-12-31"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  31
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-white   text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-01-01"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  1
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-white   text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-01-01"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  2
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-white   text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-01-02"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  3
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-white   text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-01-04"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  4
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-white   text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-01-05"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  5
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-white   text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-01-06"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  6
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-white   text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-01-07"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  7
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-white   text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-01-08"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  8
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-white   text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-01-09"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  9
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-red-500   text-gray-900 hover:bg-red-300 focus:z-10"
              >
                <time
                  dateTime="2022-01-10"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  10
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-white   text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-01-11"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  11
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-white   text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-01-12"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  12
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-white   text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-01-13"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  13
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-white   text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-01-14"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  14
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-white   text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-01-15"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  15
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-white   text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-01-16"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  16
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-white   text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-01-17"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  17
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-white   text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-01-18"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  18
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-white   text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-01-19"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  19
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-white   text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-01-20"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  20
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-white   text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-01-21"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  21
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-white   text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-01-22"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full text-gray-900"
                >
                  22
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-white   text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-01-23"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  23
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-white   text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-01-24"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  24
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-white   text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-01-25"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  25
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-white   text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-01-26"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  26
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-white   text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-01-27"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  27
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-white   text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-01-28"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  28
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-white   text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-01-29"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  29
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-white   text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-01-30"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  30
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full  bg-white   text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-01-31"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  31
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-gray-50   text-gray-400 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-02-01"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  1
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-gray-50   text-gray-400 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-02-02"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  2
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-gray-50   text-gray-400 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-02-03"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  3
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-gray-50   text-gray-400 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-02-04"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  4
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20  rounded-full bg-gray-50   text-gray-400 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-02-05"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  5
                </time>
              </button>
 <button
                type="button"
                className="h-20 w-20 rounded-full bg-gray-50   text-gray-400 hover:bg-gray-100 focus:z-10"
              >
                <time
                  dateTime="2022-02-06"
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  6
                </time>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
