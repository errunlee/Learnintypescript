import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string().required("email is required"),
  password: Yup.string().when("email", (email, schema) => {
    if (email[0].length > 0) return schema.required("password is required");
    return schema;
  }),
  //   channel: Yup.string().when(["email", "password"], (deps, schema) => {
  //     if (deps[1].includes("@"))
  //       return schema.required("Channel is required now!");
  //     return schema;
  //   }),

  channel: Yup.string().when(["email", "password"], {
    is: (email: string, password: string) => {
      return email && !password;
    },
    then: (schema) => schema.required("Channel is requireddddd"),
  }),
  file: Yup.mixed().required("Please selet a file"),
});
