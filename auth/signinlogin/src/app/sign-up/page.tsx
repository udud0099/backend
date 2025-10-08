"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    conformPassword: "",
  });

  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json()
    if(res.ok){
      setPending(false)
    }
  };
  return (
    <div>
      SignUp
      <br />
      <br /> <br />
      <div>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            disabled={pending}
            placeholder="full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <br /> <br />
          <Input
            type="email"
            disabled={pending}
            placeholder="full email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <br /> <br />
          <Input
            type="password"
            disabled={pending}
            placeholder="full password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <br /> <br />
          <Input
            type="password"
            disabled={pending}
            placeholder="conform password"
            value={form.conformPassword}
            onChange={(e) =>
              setForm({ ...form, conformPassword: e.target.value })
            }
            required
          />
          <br /> <br />
          <Button disabled={pending}>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
