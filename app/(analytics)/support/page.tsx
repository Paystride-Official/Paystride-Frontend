"use client";
import React from "react";

const Support = () => {
  return (
    <div className="ml-4 ">
      <div>
        <p className="text-black text-[24px] font-semibold leading-9">
          Need Help?
        </p>
      </div>

      <div className="lg:grid-cols-2 grid gap-8">
        <div>
          <div>
            <p className="text-black text-[18.856px] font-semibold leading-9">
              Please fill out the form below.
            </p>
          </div>

          <div className="flex justify-between gap-3">
            <div>
              <p className="text-black text-[16px] font-semibold leading-9">
                First Name <span className="text-red-700">*</span>
              </p>
              <input
                className="text-gray-700 font-medium leading-tight py-[4px] px-[16px] h-[43px] outline-none"
                type="text"
              />
            </div>

            <div>
              <p className="text-black text-[16px] font-semibold leading-9">
                Last Name <span className="text-red-700">*</span>
              </p>
              <input
                className="text-gray-700 font-medium leading-tight py-[10px] px-[4px] h-[43px] gap-[8px] outline-none items-center"
                type="text"
              />
            </div>
          </div>

          <div>
            <p className="text-black text-[16px] font-semibold leading-9 ">
              Email <span className="text-red-700">*</span>
            </p>
            <input
              className="text-gray-700 font-medium leading-tight py-[4px] px-[16px] h-[43px] w-[418px] outline-none"
              type="text"
            />
          </div>

          <div>
            <p className="text-black text-[16px] font-semibold leading-9">
              Topic <span className="text-red-700">*</span>
            </p>
            <input
              className="text-gray-700 font-medium leading-tight py-[10px] px-[15px] h-[43px] outline-none"
              type="text"
            />
          </div>

          <div>
            <p className="text-black text-[16px] font-semibold leading-9">
              Message <span className="text-red-700">*</span>
            </p>
            <textarea className="rounded-sm border-1 border-gray-300 dark:border-gray-700 bg-white h-[203px] w-full outline-none" />
          </div>

          <div className="mt-10">
            <button className="bg-[#091F8E] py-[10px] px-[15px] text-white rounded-b">
              Send Message
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-10">
        <div className="shadow-lg h-[700px] w-[500px] py-10">
          <div className="flex justify-center gap-5">
            <p className="font-bold text-center">Past Issues</p>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
<path d="M13 1L7 7L1 1" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-[8rem] mt-10">
              <div>
                <p className="text-gray-600 my-4">Subject</p>
                <p>Payment Point</p>
                <p className="my-4">Transactions</p>
                <p>Other</p>
              </div>
              <div>
                <p className="text-gray-600 my-4">Status</p>
                <p>Pending</p>
                <p className="text-green-700 my-4">Resolved</p>
                <p className="text-green-700">Resolved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Support;
