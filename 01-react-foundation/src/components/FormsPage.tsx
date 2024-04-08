import React from "react";
import { useForm } from "react-hook-form";

type FormInputs = {
  email: string;
  password: string;
};

export const FormsPage = () => {
  const { register, handleSubmit, formState, watch } = useForm<FormInputs>({
    defaultValues: {
      email: "luchobertero@gmail.com",
      password: "ABC123",
    },
  });

  const onSubmit = (myForm: FormInputs) => {
    console.log(myForm);
  };

  console.log(watch("email"));

  return (
    <>
      <form
        action="
  "
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3>Formularios</h3>
        <div style={{ display: "flex", flexDirection: "column" }} className="">
          <input
            type="text"
            name=""
            placeholder="Email"
            id=""
            {...register("email", { required: true })}
          />
          <input
            type="text"
            name=""
            placeholder="Password"
            id=""
            {...register("password")}
          />
          <button type="submit">Ingresar</button>
        </div>
      </form>

      <pre>{JSON.stringify(formState, null, 2)}</pre>
    </>
  );
};
