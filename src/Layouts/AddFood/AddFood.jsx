import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import AuthInfo from "../../hooks/AuthInfo";
import { useNavigate } from "react-router";

const AddFood = () => {
  const { user, cUser } = AuthInfo();
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const navigate = useNavigate();
  const imgbbKey = import.meta.env.VITE_IMGBB_KEY;

  const handleImageUpload = async (file) => {
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
      setImageUrl(res.data.data.display_url);
      Swal.fire({
        icon: "success",
        title: "Image uploaded successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Image upload failed",
        text: err.message,
      });
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!imageUrl) {
      Swal.fire({
        icon: "warning",
        title: "Please upload an image first",
        showConfirmButton: true,
      });
      return;
    }

    const data = new FormData(e.target);
    const form = Object.fromEntries(data.entries());
    form.imageUrl = imageUrl;
    form.purchaseCount = 0;

    axios
      .post("https://restaurant-management-server-bay.vercel.app/foods", form)
      .then((d) => {
        if (d.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Your food has been saved",
            showCancelButton: true,
            confirmButtonText: "Go to My Foods",
            cancelButtonText: "Stay Here",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/myfoods");
            } else {
              e.target.reset();
              setImageUrl("");
              setUploadProgress(0);
            }
          });
        }
      });
  };

  return (
    <div className="bg-base-100 dark:bg-base-200 min-h-screen py-10 px-4 flex items-center justify-center text-base-content">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl bg-base-100 dark:bg-base-200 shadow-xl rounded-2xl p-10 border border-base-300 space-y-6"
      >
        <h1 className="text-3xl font-bold text-primary text-center">
          🍔 Add Food Item
        </h1>

        <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-medium">Food Name</label>
            <input
              type="text"
              name="foodName"
              placeholder="e.g. Sushi"
              required
              className="w-full px-4 py-2 rounded-md border border-base-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* --- File Upload --- */}
          <div>
            <label className="block mb-2 font-medium">Image</label>
            <input
              type="file"
              accept="image/*"
              id="foodImageUpload"
              className="hidden"
              onChange={(e) => handleImageUpload(e.target.files[0])}
            />

            {!imageUrl ? (
              <div className="border-2 border-dashed border-base-300 rounded-lg p-6 text-center bg-base-200 hover:border-primary transition">
                <label
                  htmlFor="foodImageUpload"
                  className="cursor-pointer text-gray-600"
                >
                  <p className="mb-2">
                    {uploading ? "Uploading..." : "Click or drag to upload"}
                  </p>
                  <div className="btn btn-primary btn-sm">Choose File</div>
                </label>

                {uploading && (
                  <div className="mt-3 w-full bg-base-300 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                )}
              </div>
            ) : (
              <div className="relative w-32 h-32 mx-auto">
                <img
                  src={imageUrl}
                  alt="Food Preview"
                  className="w-32 h-32 object-cover rounded-md shadow-md"
                />
                <label
                  htmlFor="foodImageUpload"
                  className="absolute bottom-0 right-0 bg-primary text-white text-xs px-2 py-1 rounded-md cursor-pointer hover:bg-primary-focus"
                >
                  Change
                </label>
              </div>
            )}
          </div>
          {/* --- End File Upload --- */}

          <div>
            <label className="block mb-2 font-medium">Category</label>
            <input
              type="text"
              name="category"
              placeholder="e.g. Fast Food, Dessert"
              required
              className="w-full px-4 py-2 rounded-md border border-base-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Quantity</label>
            <input
              type="number"
              name="quantity"
              min="1"
              placeholder="e.g. 15"
              required
              className="w-full px-4 py-2 rounded-md border border-base-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Price ($)</label>
            <input
              type="number"
              step="0.01"
              name="price"
              placeholder="e.g. 10.99"
              required
              className="w-full px-4 py-2 rounded-md border border-base-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Origin Country</label>
            <input
              type="text"
              name="origin"
              placeholder="e.g. Japan"
              required
              className="w-full px-4 py-2 rounded-md border border-base-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Added By (Name)</label>
            <input
              type="text"
              name="addedByName"
              defaultValue={
                user
                  ? user.emailVerified
                    ? user.displayName
                    : cUser && cUser.name
                  : ""
              }
              readOnly
              className="w-full px-4 py-2 bg-base-200 rounded-md border border-base-300"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Added By (Email)</label>
            <input
              type="email"
              name="addedByEmail"
              defaultValue={user?.email}
              readOnly
              className="w-full px-4 py-2 bg-base-200 rounded-md border border-base-300"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Short Description</label>
            <textarea
              name="description"
              rows="4"
              placeholder="Ingredients, preparation steps, etc."
              required
              className="w-full px-4 py-2 rounded-md border border-base-300 focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>
        </fieldset>

        <div className="text-center pt-4">
          <button
            type="submit"
            disabled={uploading}
            className={`btn btn-primary px-8 py-3 rounded-lg shadow ${
              uploading ? "btn-disabled" : ""
            }`}
          >
            ➕ Add Food
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFood;
