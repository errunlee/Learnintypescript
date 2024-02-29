import { SubmitHandler, useForm } from "react-hook-form";
import {
  IFormData,
  useGetPrevTransplantsQuery,
  usePostNewTransplantMutation,
} from "./kidneyApi";

const KidneyForm = () => {
  const form = useForm({
    defaultValues: {
      sellerName: "",
      kidneyPrice: null,
      receiverName: "",
    },
  });

  const { handleSubmit, register } = form;

  const onsubmit: SubmitHandler<IFormData> = (values) => {
    postNewTransplant(values);
  };

  const { isLoading, isError, data } = useGetPrevTransplantsQuery("");

  const [postNewTransplant] = usePostNewTransplantMutation();
  return (
    <div>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="flex flex-col border border-black items-center gap-2 py-3"
      >
        <input
          type="text"
          {...register("sellerName", { required: true })}
          placeholder="Seller name"
          className="border px-2 py-3"
        />

        <input
          type="text"
          {...register("kidneyPrice")}
          placeholder="Kidney Price"
          className="border px-2 py-3"
        />

        <input
          type="text"
          {...register("receiverName")}
          placeholder="Receiver name"
          className="border px-2 py-3"
        />

        <button type="submit" className="bg-slate-500 px-4 py-2 text-white">
          Sell now!!
        </button>
      </form>

      <section className="mt-4 p-3">
        <h1 className="text-3xl">Previous Reports</h1>
        <article className="flex gap-3">
          {isLoading ? <p>loading......</p> : null}
          {isError ? <p>error......</p> : null}
          {!isLoading &&
            !isError &&
            data?.map((each: IFormData, i: number) => {
              return (
                <div key={i} className="border p-4">
                  <h1>Seller: {each.sellerName}</h1>
                  <h1>Sold at: {each.kidneyPrice}</h1>
                  <h1>Received by: {each.receiverName}</h1>
                </div>
              );
            })}
        </article>
      </section>
    </div>
  );
};

export default KidneyForm;
