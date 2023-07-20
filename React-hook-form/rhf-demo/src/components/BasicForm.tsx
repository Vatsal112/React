import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";

type FormValues = {
  username: string;
  email: string;
  password: string;
  social: {
    twitter: string;
    facebook: string;
  };
  phoneNumbers: string[];
  phNumbers: {
    number: string;
  }[];
};
let count = 0;
export const BasicForm = () => {
  count++;
  const form = useForm({
    defaultValues: {
      username: "Basic",
      email: "",
      password: "",
      social: {
        twitter: "",
        facebook: "",
      },
      phoneNumbers: ["", ""],
      phNumbers: [{ number: "" }],
    },
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors, isDirty, isValid } = formState;

  console.log({ isDirty, isValid });
  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  //   useEffect(() => {
  //     const sub = watch((value) => {
  //       console.log(value);
  //     });
  //     return () => sub.unsubscribe();
  //   }, [watch]);

  return (
    <div>
      <h1>Simple Form {count}</h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: "Username is required",
            })}
          />
          <p className="error">{errors.username?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: "E-mail is required",
              },
              pattern: {
                value: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
                message: "Invalid email address",
              },
              validate: (value) => {
                return value !== "admin@admin.com" || "Email not valid";
              },
            })}
          />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Password</label>
          <input
            type="text"
            id="channel"
            {...register("password", {
              required: "Password is required",
            })}
          />
          <p className="error">{errors.password?.message}</p>
        </div>

        {/* <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <input
            type="text"
            id="facebook"
            {...register("social.facebook", {
              required: "Facebook is required",
            })}
          />
          <p className="error">{errors.social?.facebook?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="twitter">Twitter</label>
          <input
            type="text"
            id="twitter"
            {...register("social.twitter", {
              required: "Twitter is required",
            })}
          />
          <p className="error">{errors.social?.twitter?.message}</p>
        </div> */}

        <div className="form-control">
          <label htmlFor="primary-phone">primary-phone</label>
          <input
            type="text"
            id="primary-phone"
            {...register("phoneNumbers.0", {
              required: "primary phone number is required",
            })}
          />
          <p className="error">{errors.phoneNumbers?.[0]?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="secondary-phone">secondary-phone</label>
          <input
            type="text"
            id="secondary-phone"
            {...register("phoneNumbers.1")}
          />
          {/* <p className="error">{errors.social?.twitter?.message}</p> */}
        </div>

        {/* <div>
          <label htmlFor="">List of phone numbers</label>
          <div>
            {fields.map((field, index) => {
              return (
                <div className="form-control" key={field.id}>
                  <input
                    type="text"
                    {...register(`phNumbers.${index}.number` as const)}
                  />
                  {index > 0 && (
                    <button type="button" onClick={() => remove(index)}>
                      Remove
                    </button>
                  )}
                </div>
              );
            })}

            <button type="button" onClick={() => append({ number: "" })}>
              Add Phone Number
            </button>
          </div>
        </div> */}

        <button disabled={!isDirty || !isValid}>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
