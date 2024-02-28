import React from "react";
import { useDeltePaymentPoint } from "../../_slice/query";

type Props = {
  singleRow: {
    [key: string]: any;
  };
  closeModal: () => void;
};

const DeletePaypoint = ({ singleRow, closeModal }: Props) => {
  const { mutateAsync: deletePaypoint } = useDeltePaymentPoint();

  const handleDeletePaypoint = async () => {
    const response = await deletePaypoint({ id: singleRow.key });
  };

  return (
    <section className="flex flex-col gap-2 text-center">
      <h1 className="font-bold text-xl">
        Are you sure you want to delete this paypoint?
      </h1>
      <div className="flex gap-4 justify-center w-full mb-2 mt-8">
        <button
          onClick={handleDeletePaypoint}
          className="text-white bg-[#091F8E] px-4 py-1 capitalize rounded"
        >
          Confirm
        </button>
        <button
          onClick={closeModal}
          className=" border-[0.615px] border-solid border-[#DDE2FD] px-4 py-1 rounded"
        >
          cancel
        </button>
      </div>
    </section>
  );
};

export default DeletePaypoint;
