import Home_bg from '../assets/Home_bg.jpg'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login} from '../redux/userSlice'
export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
const navigate = useNavigate();
const dispatch = useDispatch();
  function onSubmit(data) {
    
    dispatch(login(data));
    navigate('/dashboard')
  }

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-4 py-8">
       <img
        src={Home_bg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      
      <div className="absolute inset-0 bg-black/70 -z-10" />
      <p className="text-red-600 font-bold text-2xl md:text-3xl text-center mb-6">
        NETFLIX CLONE
      </p>

      <div className="bg-neutral-900 rounded-2xl w-full max-w-md p-8 shadow-xl">
        <h1 className="text-white text-3xl font-extrabold tracking-tight mb-6 text-center">
          Login
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <label className="text-neutral-400 text-xs font-medium uppercase tracking-wide mb-1 block">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-md border border-neutral-700 bg-neutral-800 text-white placeholder-neutral-500 px-4 py-3 focus:outline-none focus:border-red-600 transition"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="text-neutral-400 text-xs font-medium uppercase tracking-wide mb-1 block">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-md border border-neutral-700 bg-neutral-800 text-white placeholder-neutral-500 px-4 py-3 focus:outline-none focus:border-red-600 transition"
              {...register("password", { required: "Password is required" , minLength: {
    value: 6,
    message: "Password must be at least 6 characters"
  }})}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md py-3 px-8 mt-4 self-center transition"
          >
            Login
          </button>
        </form>

        <p className="text-neutral-400 text-sm text-center mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-white font-semibold hover:underline">
            Sign up first
          </Link>
        </p>
      </div>
    </div>
  );
}