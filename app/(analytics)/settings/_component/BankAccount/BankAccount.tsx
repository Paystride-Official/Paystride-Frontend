import Header from "@/app/(analytics)/_components/HeaderStat/Header";
import React from "react";

type Props = {};

const BankAccount = (props: Props) => {
  const bankStat = [
    {
      name: "Active count",
      amount: "3",
    },
  ];
  return (
    <section>
      <Header headerStat={bankStat} />
    </section>
  );
};

export default BankAccount;
