import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import AuthInfo from "../../hooks/AuthInfo";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const Register = () => {
  const { googleSign, createUserEmail } = AuthInfo();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [previewUrl, setPreviewUrl] = useState("");

  const imgbbKey = import.meta.env.VITE_IMGBB_KEY;

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = e.target;
    const formD = new FormData(data);
    const form = Object.fromEntries(formD.entries());
    const pattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const verify = pattern.test(form.password);

    if (!verify) {
      setError(true);
      return;
    } else {
      setError(false);
      const { name, email, password } = form;

      // ensure image uploaded
      if (!previewUrl) {
        toast.error("Please upload a profile photo");
        return;
      }

      const details = { name, email, photo_url: previewUrl };

      try {
        await createUserEmail(email, password);
        await axios.post(
          "https://restaurant-management-server-bay.vercel.app/users",
          details
        );
        toast.success("Registration successful!");
        navigate("/");
      } catch (err) {
        toast.error(err.message);
      }
    }
  };

  const handleFileUpload = async (file) => {
    if (!file) return;
    setUploading(true);
    setUploadProgress(0);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${imgbbKey}`,
        formData,
        {
          onUploadProgress: (progressEvent) => {
            const percent = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percent);
          },
        }
      );
      setPreviewUrl(res.data.data.display_url);
      toast.success("Photo uploaded successfully!");
    } catch {
      toast.error("Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <title>Register</title>
      <div className="w-full max-w-md bg-gray-100 rounded-lg shadow-lg p-6 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Create an Account
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Please register to continue
          </p>
        </div>

        <form className="space-y-4 text-black" onSubmit={handleRegister}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {error && (
              <p className="mt-1 font-bold text-red-500">
                Must have uppercase, lowercase & at least 6 characters
              </p>
            )}
          </div>

          {/* --- Professional File Upload Section --- */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Profile Photo
            </label>

            {!previewUrl ? (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center bg-white hover:border-blue-500 transition">
                <input
                  type="file"
                  accept="image/*"
                  id="photoUpload"
                  className="hidden"
                  onChange={(e) => handleFileUpload(e.target.files[0])}
                />
                <label
                  htmlFor="photoUpload"
                  className="cursor-pointer text-gray-600"
                >
                  <p className="mb-2">Drag & drop or click to upload</p>
                  <span className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Choose File
                  </span>
                </label>
              </div>
            ) : (
              <div className="relative w-32 h-32 mx-auto">
                <img
                  src={previewUrl}
                  alt="Profile Preview"
                  className="w-32 h-32 rounded-full object-cover shadow-md"
                />
                <label
                  htmlFor="photoUpload"
                  className="absolute bottom-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 rounded-md cursor-pointer hover:bg-blue-700"
                >
                  Change
                </label>
                <input
                  type="file"
                  accept="image/*"
                  id="photoUpload"
                  className="hidden"
                  onChange={(e) => handleFileUpload(e.target.files[0])}
                />
              </div>
            )}

            {uploading && (
              <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            )}
          </div>
          {/* --- End File Upload Section --- */}

          <button
            type="submit"
            disabled={uploading}
            className={`w-full font-semibold py-2 px-4 rounded-md transition duration-200 ${
              uploading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {uploading ? "Uploading..." : "Register"}
          </button>
        </form>

        <div>
          <button
            onClick={() =>
              googleSign()
                .then(() => navigate("/"))
                .catch(() => {})
            }
            className="btn bg-white text-black w-full border-[#e5e5e5]"
          >
            Register with Google
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Login here
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
