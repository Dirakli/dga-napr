import React, { useState } from "react";
import { useThemeContext } from "@/app/context/theme";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const { nightMode }: any = useThemeContext();

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.message.trim() === ""
    ) {
      // If any required field is empty, you can handle it accordingly (e.g., show an error message)
      console.log("Please fill in all required fields");
    } else {
      // Assuming you have a function to handle form submission, replace the following line accordingly
      // For demonstration purposes, let's simulate a successful submission
      const isSubmissionSuccessful = true;

      if (isSubmissionSuccessful) {
        setFormData({
          name: "",
          surname: "",
          email: "",
          message: "",
        });
        setSuccessMessage("შეტყობინება წარმატებით გაიგზავნა");
      }
    }
  };

  return (
    <div
      className={`${
        nightMode ? "bg-gray-200" : "bg-neutral-800"
      } "w-full mb-6 mt-10 p-10 rounded-lg  `}
    >
      <h1 className="text-base cursor-pointer rounded-sm text-custom-light-blue">
        დაგვიკავშირდით
      </h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <div className="flex justify-between">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="სახელი"
              value={formData.name}
              onChange={handleChange}
              className="bg-transparent border-b-2 w-[48%] h-14 border-white placeholder-custom-gray text-custom-gray text-xs font-bold"
            />
            <input
              type="text"
              id="surname"
              placeholder="გვარი"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              className="bg-transparent border-b-2 w-[48%] h-14 border-white placeholder-custom-gray text-custom-gray text-xs font-bold"
            />
          </div>
        </div>

        <div className="mb-4">
          <input
            type="email"
            id="email"
            placeholder="ელფოსტა"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-transparent border-b-2 w-full h-14 border-white placeholder-custom-gray text-custom-gray text-xs font-bold"
          />
        </div>

        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            placeholder="შეტყობინება"
            value={formData.message}
            onChange={handleChange}
            className="bg-transparent border-b-2 w-full border-white h-36 placeholder-custom-gray text-custom-gray text-xs font-bold"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 button-from flex justify-center items-center text-xs text-white w-full h-[45px] rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          გაგზავნა
        </button>
        {successMessage && (
          <p className="text-red-500 text-xs mt-2">{successMessage}</p>
        )}
      </form>
    </div>
  );
};

export default Form;
