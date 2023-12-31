import { useForm, FieldValues } from "react-hook-form";

type AddPayPointProps = {
  onSubmit: (data: FieldValues) => void;
  closeModal: () => void;
};

export const AddPayPoint = ({ onSubmit, closeModal }: AddPayPointProps) => {
  const { handleSubmit, register } = useForm();
  return (
    <div>
      <h1 className="text-xl font-bold text-center capitalize mt-[-1rem] mb-[1rem]">
        Add New Payment point
      </h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] text-[#B9B9B9]">paypoint</p>
            <input
              type="number"
              placeholder="1"
              {...register("paypoint")}
              className="max-w-[5rem] py-2 px-2 outline-none border-[0.889px] border-solid border-[#D9D9D9] rounded-md"
            />
          </div>

          <div>
            <p className="text-[10px] text-[#B9B9B9]">Add staff</p>

            <select
              className=" block border-[0.889px] border-solid border-[#D9D9D9] px-2 py-2 outline-none min-w-[12rem] rounded-md"
              {...register("staff")}
            >
              <option value="active">chidi</option>
              <option value="inactive">Jumat</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4 justify-center w-full mb-2 mt-14">
          <button
            type="submit"
            className="text-white bg-[#091F8E] px-4 py-1 capitalize rounded"
          >
            update
          </button>
          <button
            type="button"
            onClick={() => closeModal()}
            className=" border-[0.615px] border-solid border-[#DDE2FD] px-4 py-1 rounded"
          >
            cancel
          </button>
        </div>
      </form>
    </div>
  );
};
