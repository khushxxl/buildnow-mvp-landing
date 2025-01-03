"use client";
import React, { useEffect, useState } from "react";
import { DarkModeToggler } from "./dark-mode-toggler";
import Link from "next/link";
import { getAuthenticatedUser, signoutUser } from "@/lib/db/db.actions";

function Navbar() {
  const [user, setUser] = useState<any>(null);

  console.log(user);

  const fetchUser = async () => {
    try {
      const res = await getAuthenticatedUser();

      setUser(res);
    } catch (error) {
      console.error("Error fetching user:", error);
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleSignOut = async () => {
    try {
      await signoutUser();
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className=" flex justify-between items-center p-10 px-10">
      <div>
        <h1 className="text-2xl font-bold tracking-wide">.buildnow</h1>
      </div>

      <div
        className="p-2 px-5 flex items-center gap-2 cursor-pointer"
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(1px)",
          WebkitBackdropFilter: "blur(1px)",
          borderRadius: "9999px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          fontSize: "0.875rem",
        }}
      >
        <img
          src="https://i.ibb.co/yFwjm0j/logo-white.png"
          alt=""
          className="size-4"
        />
        @khushxxl_04
      </div>
    </div>
  );
}

export default Navbar;
