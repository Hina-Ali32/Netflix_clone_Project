import Home_bg from '../assets/Home_bg.jpg'
import { useForm } from 'react-hook-form';
import { Link , useNavigate} from 'react-router-dom'; 
export default function SignUpForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
const navigate = useNavigate();
  function onSubmit(data) {
      localStorage.setItem('user', JSON.stringify(data));
      
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
  {/* Header */}
  <p className="text-red-600 font-bold text-3xl md:text-3xl text-center mb-6">
    NETFLIX CLONE
  </p>

  {/* Form container */}
  <div className="bg-neutral-900/90 rounded-2xl w-full max-w-md p-8 shadow-xl">
    <h1 className="text-white text-2xl font-bold tracking-tight mb-6 text-center">
      Sign Up Here!
    </h1>

    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      {/* Full Name field */}
      <div>
        <label className="text-neutral-300 text-sm mb-1 block">Full Name</label>
        <input
          type="text"
          placeholder="sara/Ali"
          className="w-full rounded-md border border-neutral-700 bg-neutral-800 text-white placeholder-neutral-500 px-4 py-3 focus:outline-none focus:border-red-600 transition"
          {...register("fullName", { required: "Full name is required" })}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
        )}
      </div>

      {/* Email field */}
      <div>
        <label className="text-neutral-300 text-sm mb-1 block">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-md border border-neutral-700 bg-neutral-800 text-white placeholder-neutral-500 px-4 py-3 focus:outline-none focus:border-red-600 transition"
          {...register("email", { required: "Email is required"  
  })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Password field */}
      <div>
        <label className="text-neutral-300 text-sm mb-1 block">Password</label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full rounded-md border border-neutral-700 bg-neutral-800 text-white placeholder-neutral-500 px-4 py-3 focus:outline-none focus:border-red-600 transition"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md py-3 mt-2 w-40 self-center transition"
      >
        Sign UP
      </button>
    </form>

    <p className="text-neutral-400 text-sm text-center mt-6">
      Already have an account?{" "}
      <Link to="/login" className="text-white font-semibold hover:underline">
        Login
      </Link>
    </p>
  </div>
</div>
  );
}