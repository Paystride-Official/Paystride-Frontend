import Header from "@/app/(analytics)/_components/HeaderStat/Header";
import React from "react";

type Props = {};

const Staff = (props: Props) => {
  const staffStat = [
    {
      name: "Employee",
      amount: "9",
    },
    {
      name: "Department",
      amount: "3",
    },
  ];
  return (
    <section>
      <Header headerStat={staffStat} />
    </section>
  );
};

export default Staff;
