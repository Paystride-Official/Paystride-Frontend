import React from "react";
import { useDeleteSettlementAccount } from "@/app/(analytics)/settlement/_slice/query";
import { toast } from "react-toastify";

type Props = {
  singleRow: {
    [key: string]: any;
  };
  closeModal: () => void;
};

const DeleteAccount = ({ singleRow, closeModal }: Props) => {
  console.log(singleRow);
  const { mutateAsync: deleteSettlement } = useDeleteSettlementAccount();

  const handleDeletePaypoint = async () => {
    const response = await deleteSettlement({ id: singleRow.key });
    response.success
      ? toast.success("Deleted Successfully")
      : toast.error(response.error.message);
  };

  return (
    <section className="flex flex-col gap-2 text-center">
      <h1 className="font-bold text-xl">
        Are you sure you want to delete this account?
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

export default DeleteAccount;
