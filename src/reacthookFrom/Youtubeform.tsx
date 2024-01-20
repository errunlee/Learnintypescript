import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormDataType = {
  email: string;
  password: string;
  channel: string;
  socials: {
    fb: string;
    twitter: string;
  };
};
function Youtubeform() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({
    defaultValues: async () => {
      const data = await fetch("http://jsonplaceholder.typicode.com/users/1");
      const res = await data.json();
      return {
        email: res.email,
        password: "",
        channel: res.username,
        socials: {
          fb: "",
          twitter: "",
        },
      };
    },
  });

  const onSubmit = (data: FormDataType) => {
    console.log("form submitted", data);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mx-auto w-1/4 mt-5 border p-2 "
        noValidate
      >
        <label htmlFor="email">Email</label>
        <input
          className="border p-2 bg-slate-900"
          type="text"
          id="email"
          {...register("email", { required: "Email is required" })}
        />
        <p className="text-red-500">{errors.email?.message}</p>
        <label htmlFor="password">Password</label>
        <input
          className="border p-2 bg-slate-900"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Must be at least 8 characters long",
            },
            validate: (fieldValue) => {
              return fieldValue.includes("@") || "Invalid Password";
            },
          })}
          id="password"
        />
        <p className="text-red-500">{errors.password?.message}</p>

        <label htmlFor="Channel">Channel</label>
        <input
          className="border p-2 bg-slate-900"
          type="text"
          {...register("channel", { required: "Channel is required" })}
          id="channel"
        />
        <p className="text-red-500">{errors.channel?.message}</p>

        <label htmlFor="facebook">Facebook</label>
        <input
          className="border p-2 bg-slate-900"
          type="text"
          {...register("socials.fb", { required: "Facebook is required" })}
          id="facebook"
        />
        <p className="text-red-500">{errors.socials?.fb?.message}</p>

        <label htmlFor="twitter">Twitter</label>
        <input
          className="border p-2 bg-slate-900"
          type="text"
          {...register("socials.twitter", { required: "Twitter is required" })}
          id="channel"
        />
        <p className="text-red-500">{errors.socials?.twitter?.message}</p>

        <button type="submit" className="bg-slate-500 mt-2 px-3 py-2 ">
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </>
  );
}

export default Youtubeform;
