import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { validationSchema } from "./Validation";
import { yupResolver } from "@hookform/resolvers/yup";

type FormDataType = {
  email: string;
  password: string;
  channel: string;
  file: File;
  socials: {
    fb: string;
    twitter: string;
  };
  phoneNumbers: string[];
  phNums: {
    number: string;
  }[];
  age: number;
};
function Youtubeform() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: yupResolver(validationSchema),
    defaultValues: async () => {
      const data = await fetch("http://jsonplaceholder.typicode.com/users/1");
      const res = await data.json();
      return {
        email: res.email,
        file: null,
        password: "",
        channel: res.username,
        socials: {
          fb: "",
          twitter: "",
        },
        phoneNumbers: ["", ""],
        phNums: [{ number: "" }],
        age: 0,
      };
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: "phNums",
  });
  const onSubmit = (data: FormDataType) => {
    console.log("form submitted", data);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mx-auto w-1/4 mt-5 border p-2 text-white placeholder-white "
        noValidate
      >
        <label htmlFor="email">Email</label>
        <input
          className="border p-2 bg-slate-900"
          type="text"
          id="email"
          {...register("email")}
        />
        <p className="text-red-500">{errors.email?.message}</p>
        <label htmlFor="password">Password</label>
        <input
          className="border p-2 bg-slate-900"
          type="password"
          {...register("password")}
          id="password"
        />
        <p className="text-red-500">{errors.password?.message}</p>

        <label htmlFor="Channel">Channel</label>
        <input
          className="border p-2 bg-slate-900"
          type="text"
          {...register("channel")}
          id="channel"
        />
        <p className="text-red-500">{errors.channel?.message}</p>

        <input type="file" {...register("file")} id="file" />
        <p className="text-red-500">{errors.file?.message}</p>

        <label htmlFor="facebook">Facebook</label>
        <input
          className="border p-2 bg-slate-900"
          type="text"
          {...register("socials.fb")}
          id="facebook"
        />
        <p className="text-red-500">{errors.socials?.fb?.message}</p>

        <label htmlFor="twitter">Twitter</label>
        <input
          className="border p-2 bg-slate-900"
          type="text"
          {...register("socials.twitter")}
          id="channel"
        />

        <p className="text-red-500">{errors.socials?.twitter?.message}</p>

        <label htmlFor="primary-ph">Primary Phone number</label>
        <input
          className="border p-2 bg-slate-900"
          type="text"
          {...register("phoneNumbers.0")}
          id="primary-ph"
        />
        {/* <p>{errors.phoneNumbers?.0}</p> */}
        <label htmlFor="secondary-ph">Secondary Phone number</label>
        <input
          className="border p-2 bg-slate-900"
          type="text"
          {...register("phoneNumbers.2")}
          id="primary-ph"
        />

        <div>
          {fields.map((field, index) => {
            return (
              <div id={field.id}>
                <input
                  className="bg-slate-900 my-1 border p-3"
                  type="text"
                  {...register(`phNums.${index}.number`)}
                  id=""
                />
              </div>
            );
          })}
        </div>
        <button onClick={() => append({ number: "" })} type="button">
          Add new number
        </button>

        <label htmlFor="age">Age</label>
        <input
          className="border p-2 bg-slate-900"
          type="number"
          {...register("age", {
            valueAsNumber: true,
          })}
          id="primary-ph"
        />
        <button type="submit" className="bg-slate-500 mt-2 px-3 py-2 ">
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </>
  );
}

export default Youtubeform;
