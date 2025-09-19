import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Field from "../common/Field";

const RegistratonForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = async (formData) => {
    try {
      let response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/register`,
        formData
      );

      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      setError("root.random", {
        type: "random",
        message: `Something went wrong: ${error.message}`,
      });
    }
  };

  return (
    <form
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[30px] text-white"
      onSubmit={handleSubmit(submitForm)}
    >
      <Field label="First Name" error={errors.firstName}>
        <input
          {...register("firstName", {
            required: "First Name is Required!",
          })}
          className={`w-full rounded-md border border-[#CCCCCC]/[14%] bg-lighterDark  p-1.5 focus:outline-none lg:p-3 ${
            errors.firstName ? "border-red-500" : "border-gray-200-"
          }`}
          type="firstName"
          name="firstName"
          id="firstName"
        />
      </Field>
      <Field label="Last Name" error={errors.lastName}>
        <input
          {...register("lastName")}
          className={`w-full rounded-md border border-[#CCCCCC]/[14%] bg-lighterDark  p-1.5 focus:outline-none lg:p-3 ${
            errors.lastName ? "border-red-500" : "border-gray-200-"
          }`}
          type="lastName"
          name="lastName"
          id="lastName"
        />
      </Field>
      <Field label="Email" error={errors.email}>
        <input
          {...register("email", {
            required: "Email is Required!",
          })}
          className={`w-full rounded-md border border-[#CCCCCC]/[14%] bg-lighterDark  p-1.5 focus:outline-none lg:p-3 ${
            errors.email ? "border-red-500" : "border-gray-200-"
          }`}
          type="email"
          name="email"
          id="email"
        />
      </Field>
      <Field label="Password" error={errors.password}>
        <input
          {...register("password", {
            required: "password is Required!",
            minLength: {
              value: 8,
              message: "Your password must be 8 at least characters!",
            },
          })}
          className={`w-full rounded-md border border-[#CCCCCC]/[14%] bg-lighterDark  p-1.5 focus:outline-none lg:p-3 ${
            errors.password ? "border-red-500" : "border-gray-200-"
          }`}
          type="password"
          name="password"
          id="password"
        />
      </Field>
      <p>{errors?.root?.random.message}</p>
      <button
        className="auth-input bg-lwsGreen font-bold text-white transition-all hover:opacity-90"
        type="submit"
      >
        Register
      </button>
    </form>
  );
};

export default RegistratonForm;
