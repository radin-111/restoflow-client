import React from "react";
import { Navigate, useLoaderData, useNavigate } from "react-router";
import AuthInfo from "../../hooks/AuthInfo";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateFood = () => {
  const [data] = useLoaderData();
  const {
    category,
    description,
    foodName,
    imageUrl,
    origin,
    price,
    quantity,
    _id,
    addedByEmail,
  } = data;
  const { user, cUser } = AuthInfo();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const form = Object.fromEntries(formData.entries());

    axios
      .put(
        `https://restaurant-management-server-bay.vercel.app/update/${_id}`,
        form
      )
      .then((r) => {
        if (r.data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Your food has been updated",
            showCancelButton: true,
            confirmButtonText: "Go to My Food",
            cancelButtonText: "Stay Here",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/myfoods");
            }
          });
        }
      });
  };

  return (
    <div className="bg-gradient-to-br from-indigo-100 via-white to-indigo-200 min-h-screen py-10 px-4 flex items-center justify-center">
      {user?.email == addedByEmail ? (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-5xl bg-white shadow-xl rounded-2xl p-10 border border-indigo-200 space-y-6"
        >
          <h1 className="text-3xl font-bold text-indigo-700 text-center">
            🍔 Update Food Item
          </h1>

          <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Food Name
              </label>
              <input
                type="text"
                name="foodName"
                defaultValue={foodName}
                placeholder="e.g. Sushi"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Image URL
              </label>
              <input
                type="url"
                name="imageUrl"
                defaultValue={imageUrl}
                placeholder="https://image.url"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Category
              </label>
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="e.g. Fast Food, Dessert"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                defaultValue={quantity}
                min="1"
                placeholder="e.g. 15"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Price ($)
              </label>
              <input
                type="number"
                defaultValue={price}
                step="0.01"
                name="price"
                placeholder="e.g. 10.99"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Origin Country
              </label>
              <input
                type="text"
                name="origin"
                defaultValue={origin}
                placeholder="e.g. Japan"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Added By (Name)
              </label>
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
                className="w-full px-4 py-2 bg-gray-100 rounded-md border border-gray-300"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Added By (Email)
              </label>
              <input
                type="email"
                name="addedByEmail"
                defaultValue={user?.email}
                readOnly
                className="w-full px-4 py-2 bg-gray-100 rounded-md border border-gray-300"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2 font-medium text-gray-700">
                Short Description
              </label>
              <textarea
                name="description"
                defaultValue={description}
                rows="4"
                placeholder="Ingredients, preparation steps, etc."
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>
          </fieldset>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition duration-300"
            >
              Update Food
            </button>
          </div>
        </form>
      ) : (
        <Navigate to={"/notallowed"}></Navigate>
      )}
    </div>
  );
};

export default UpdateFood;
