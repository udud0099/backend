"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const Signin = () => {
  return (
    <div>
      Signin
      <br />
      <br /> <br />
      <div>
        <form action="">
          <Input
            type="email"
            disabled={false}
            placeholder="full email"
            value={"form.name"}
            onChange={() => {}}
            required
          />
          <br /> <br />
          <Input
            type="password"
            disabled={false}
            placeholder="full password"
            value={""}
            onChange={() => {}}
            required
          />
          <br /> <br />
          <Button>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
