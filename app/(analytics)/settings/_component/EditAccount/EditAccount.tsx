import React from "react";
import { useForm, FieldValues } from "react-hook-form";

type Props = {
  singleRow: {
    [key: string]: any;
  };
  closeModal: () => void;
  //onSubmit: (data: FieldValues) => void;
};

const EditAccount = ({ singleRow, closeModal }: Props) => {
  return (
    <main>
      <h1 className="text-center font-bold capitalize text-3xl">
        Edit Account
      </h1>

      <div className="flex justify-center">
        <p className="text-lg text-red-500 font-semibold mb-3">
          Edit account procedure is not yet available. <br /> Please try again
          later.
        </p>
      </div>
    </main>
  );
};

export default EditAccount;
