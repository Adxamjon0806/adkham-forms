import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateNewForm = () => {
  const { id } = useSelector((state) => state.user);
  const navigate = useNavigate();
  function redirectingToCreat() {
    if (id) {
      navigate("/new-form");
    } else {
      navigate("/registration");
    }
  }
  return (
    <section className="bg-slate-300 px-52 py-6">
      <h4 className="mb-9">Create Form</h4>
      <div>
        <button
          onClick={redirectingToCreat}
          className="w-[250px] h-[170px] rounded-3xl hover:border hover:border-black bg-white text-5xl"
        >
          +
        </button>
        <p>Empty form</p>
      </div>
    </section>
  );
};

export default CreateNewForm;
