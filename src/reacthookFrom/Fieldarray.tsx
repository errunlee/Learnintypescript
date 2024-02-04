import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

function Fieldarray() {
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
      phone: [{ number: "" }],
    },
  });
  const { control, register } = form;

  const { fields, append } = useFieldArray({
    control,
    name: "phone",
  });

  const onSubmit = (values: any) => {
    console.log(values);
  };
  console.log(fields);
  return (
    <div>
      <h2>FieldArray with Submit</h2>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <input
          type="text "
          className="border border-black"
          {...register("username")}
          placeholder="email"
        />
        <input
          type="text "
          className="border border-black"
          {...register("password")}
          placeholder="passworde"
        />
        {fields.map((field, index) => {
          return (
            <input
              className="border-black"
              key={field.id}
              type="number"
              {...register(`phone.${index}.number`)}
            ></input>
          );
        })}
      </form>
    </div>
  );
}

export default Fieldarray;
