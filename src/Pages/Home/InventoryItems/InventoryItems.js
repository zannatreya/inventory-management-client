import React from "react";
import { useNavigate } from "react-router-dom";
import Inventory from "../Inventory/Inventory";

const InventoryItems = ({ inventories }) => {
  const navigate = useNavigate();

  return (
    <div className="mt-10  py-10 px-4 md:px-20">
      <section>
        <h1 className="text-2xl text-center text-white md:text-5xl font-bold">
          Your <span className="text-cyan-500">Inventories</span>
        </h1>
        <p className="mt-3 w-full text-center md:w-1/2 text-white mx-auto opacity-70 font-thin">
          If you want to update any Item, please click Update button.
        </p>
        <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {inventories.slice(0, 6).map((item) => (
            <Inventory key={item._id} item={item} />
          ))}
        </div>
        <button
          onClick={() => navigate("/inventories/manage")}
          className="hover:bg-cyan-500  text-white bg-cyan-600 py-3 px-10 rounded-md duration-200 ease-in-out"
        >
          Manage Inventories
        </button>
      </section>
    </div>
  );
};

export default InventoryItems;
