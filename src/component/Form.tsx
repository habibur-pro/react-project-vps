import React, { useState } from "react";

const Form = () => {
  const [user, setUser] = useState<{ name: string; email: string }>({
    name: "",
    email: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(user);
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setUser({ ...user, [inputName]: inputValue });
  };
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="border"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          className="border"
          onChange={handleChange}
        />
        <button className="px-3 py-1.5 rounded bg-blue-500 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
