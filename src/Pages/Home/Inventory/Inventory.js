import React from "react";
import { useNavigate } from "react-router-dom";

const Inventory = ({ item }) => {
  const navigate = useNavigate();
  const { _id, name, img, description, price, quantity, supplier } = item;
  return (
    <div>
      <section className="shadow-lg rounded-xl border text-white border-transparent hover:border-slate-700 duration-300 ease-in-out">
        <div className="p-2">
          <div
            className="rounded-xl relative overflow-hidden bg-no-repeat bg-cover hover:cursor-pointer"
            data-mdb-ripple="true"
            data-mdb-ripple-color="black"
          >
            <img
              className="w-full rounded-xl hover:scale-110 transition duration-300 ease-in-out"
              src={img}
              alt=""
            />
          </div>
        </div>
        <div className="px-4 pb-4">
          <h3 className="text-right text-2xl font-bold text-cyan-600">
            ${price?.toLocaleString("en-US")}/-
          </h3>
          <hr className="my-2 opacity-20" />
          <h3 className="text-2xl font-semibold">{name}</h3>
          <p
            className="text-xs font-thin mt-2 opacity-70"
            title={`${description}`}
          >
            {description.slice(0, 100)}...
          </p>
          <hr className="my-2 opacity-20" />
          <div className="flex justify-between font-thin">
            {quantity === 0 ? (
              <p className="text-red-500">Stock Out</p>
            ) : (
              <p>Quantity : {quantity}</p>
            )}
            <p>Supplier : {supplier}</p>
          </div>
          <hr className="my-2 opacity-20" />
          <p className="text-left mt-5">
            <button
              onClick={() => navigate(`/inventories/${_id}`)}
              className="hover:bg-cyan-500 border border-cyan-500 py-2 px-8 rounded-md duration-200 ease-in-out"
            >
              Update
            </button>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Inventory;
