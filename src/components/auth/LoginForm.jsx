import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Field from "../common/Field";

const LoginForm = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
    const user = { ...formData };
    setAuth({ user });
    navigate("/");
  };

  return (
    <form
      className="text-white border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
      onSubmit={handleSubmit(submitForm)}
    >
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
      <Field>
        <button className="w-full rounded-md border border-[#CCCCCC]/[14%] bg-lighterDark  p-1.5 focus:outline-none lg:p-3 bg-[#00D991] font-bold  transition-all hover:opacity-90">
          Login
        </button>
      </Field>
    </form>
  );
};

export default LoginForm;
