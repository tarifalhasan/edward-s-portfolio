'use client';

import Button from '@/components/common/Button';
import InputTextField from '@/components/common/InputTextFiled';

import React, { useState, FormEvent, ChangeEvent } from 'react';

const Inquire = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
  };
  return (
    <div className=" lg:flex  justify-between">
      <h2 className=" basis-[45%]">
        <span className=" text-primary">#</span>inquire-here
      </h2>
      <div className="s basis-[55%]">
        <form className=" pt-5 grid gap-3 lg:gap-6" onSubmit={handleSubmit}>
          <div className=" grid gap-3 lg:gap-6 grid-cols-2">
            <InputTextField
              label="Name"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <InputTextField
              label="Email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="grid">
            <InputTextField
              label="Title"
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div className="grid">
            <InputTextField
              label="Message"
              type="text"
              multiline
              rows={4}
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-transparent border border-primary text-white px-5 flex flex-wrap items-center py-1.5"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inquire;
