"use client";

import { Loader } from "lucide-react";
import { useState } from "react";

const Subscribe = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const [loading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.name) {
      return;
    }

    setIsLoading(true);
    const url =
      "https://script.google.com/macros/s/AKfycbxM5BIjtXhodQkEJ4p3KFk03Q2AJrdn7Ps8lcX6Lv8M9KSXjJeHrN63THQFvLjzOLybSw/exec";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `name=${form.name}&email=${form.email}`,
    })
      .then((res) => res.text())
      .then((data) => {
        setIsLoading(false);
        alert("sent");
        setForm({ name: "", email: "" });
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };
  return (
    <form onSubmit={handleSubmit} className='flex flex-col md:flex-row gap-3'>
      <input
        type='text'
        name='firstName'
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
        id='firstName'
        placeholder='First Name'
        className='w-full md:w-[138px] bg-[#1F1F1F] text-[#757575] h-[42px] p-3 rounded-[10px]'
      />
      <input
        type='email'
        name='email'
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        id='email'
        placeholder='Email'
        className='w-full md:w-[255px] bg-[#1F1F1F] text-[#757575] h-[42px] p-3 rounded-[10px]'
      />
      <button className='bg-white rounded-2xl w-full md:w-[105px] px-4 py-2 hover:opacity-30'>
        {loading ? <Loader className='animate-spin mx-2' /> : "Subscribe"}
      </button>
    </form>
  );
};

export default Subscribe;
