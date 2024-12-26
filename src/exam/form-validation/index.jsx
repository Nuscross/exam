import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const FormValidation = () => {

  const [formValue,setFormValue] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (data) {
      setFormValue(data);
      toast.success("Form submit successfully.");
      reset();
    } 
  }

  const password = watch("password");

  return (
    <section className="flex items-center justify-center flex-col h-screen p-6 bg-black/[0.9]">
      <div className="px-6 py-8 max-w-full w-[360px] border border-solid border-black rounded-lg bg-white">
        <h1 className="mb-5 w-full font-bold text-2xl text-center">Form Register</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >
          <div>
            <label className="block mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className={`p-2 w-full text-sm border border-solid border-black rounded ${errors.firstName && 'border-2 border-red-500'}`}
              { ...register('firstName', { required: "* First Name is required." }) }
            />
            { errors.firstName && 
              <div className="validate-error">{ errors.firstName.message }</div> 
            }
          </div>
          <div>
            <label className="block mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className={`p-2 w-full text-sm border border-solid border-black rounded ${errors.lastName && 'border-2 border-red-500'}`}
              { ...register('lastName', { required: "* Last Name is required." }) }
            />
            { errors.lastName && 
              <div className="validate-error">{ errors.lastName.message }</div> 
            }
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              className={`p-2 w-full text-sm border border-solid border-black rounded ${errors.email && 'border-2 border-red-500'}`}
              { ...register('email', {
                required: "* Email is required.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "* Email address is in an invalid format.",
                },
              })}
            />
            { errors.email && 
              <div className="validate-error">{ errors.email.message }</div> 
            }
          </div>
          <div>
            <label className="block mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={`p-2 w-full text-sm border border-solid border-black rounded ${errors.password && 'border-2 border-red-500'}`}
              { ...register('password', { 
                required: "* Password is required.",
                minLength: {
                  value: 8,
                  message: "* Password must be at least 8 characters",
                },
              })}
            />
            { errors.password && 
              <div className="validate-error">{ errors.password.message }</div> 
            }
          </div>
          <div>
            <label className="block mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className={`p-2 w-full text-sm border border-solid border-black rounded ${errors.confirmPassword && 'border-2 border-red-500'}`}
              { ...register('confirmPassword', { 
                required: "* Confirm Password is required.",
                minLength: {
                  value: 8,
                  message: "* Confirm Password must be at least 8 characters",
                },
                validate: (value) => value === password || "* Passwords do not match.",
              })}
            />
            { errors.confirmPassword && 
              <div className="validate-error">{ errors.confirmPassword.message }</div> 
            }
          </div>
          <button type="submit" className="p-2 text-white bg-blue-700 rounded hover:bg-blue-500">Submit Form</button>
        </form>
      </div>
      { formValue &&
        <div className="flex flex-col gap-2 mt-10 p-6 max-w-full w-[360px] text-white border border-solid border-white rounded-lg">
          <h2 className="font-bold text-xl text-center">Form Result</h2>
          <p>First Name : {formValue.firstName}</p>
          <p>Last Name : {formValue.lastName}</p>
          <p>Email : {formValue.email}</p>
          <p>Password : {formValue.password}</p>
        </div>
      }
    </section>
  )
}

export default FormValidation;