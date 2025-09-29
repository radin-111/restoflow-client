import React, { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";
import AuthInfo from "../../hooks/AuthInfo";
import MySingleFood from "../../Components/MySingleFood";

const Myfoods = () => {
  const { user } = AuthInfo();
  const data = useLoaderData();

  // Filter foods added by the logged-in user
  const myfoods = data.filter((d) => d.addedByEmail === user.email);
  const [foods, setFoods] = useState(myfoods);

  // Optional: Keep state in sync if loader data changes
  useEffect(() => {
    setFoods(myfoods);
  }, [data, user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://restaurant-management-server-bay.vercel.app/delete/${id}`
          )
          .then((res) => {
            if (res.data.deletedCount) {
              // Update the UI using the current state
              setFoods((prevFoods) =>
                prevFoods.filter((food) => food._id !== id)
              );
              Swal.fire({
                title: "Deleted!",
                text: "Your food has been deleted.",
                icon: "success",
              });
            }
          })
          .catch(() => {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong while deleting.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="max-w-11/12 mx-auto lg:max-w-8/12 my-10 space-y-4">
      {foods.length === 0 ? (
        <AddFoodPrompt />
      ) : (
        foods.map((food) => (
          <MySingleFood
            key={food._id}
            myfood={food}
            handleDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
};

// Component for "No food added" UI
function AddFoodPrompt() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">No food added</h1>
      <br />
      <Link to="/addfood" className="btn btn-primary">
        Add Food
      </Link>
    </div>
  );
}

export default Myfoods;
