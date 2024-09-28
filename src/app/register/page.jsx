"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Select from 'react-select';

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [role, setRole] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profilePictureUrl, setProfilePictureUrl] = useState("");
  const [isClient, setIsClient] = useState("");

  const optionsRole = [
    { value: "admin", label: "Admin" },
    { value: "user", label: "User" },
  ];


  useEffect(() => {
        setIsClient(true);
  },[]);

  let handleRegister = () => {
    alert("Register Success");
    console.log(role);
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(repeatPassword);
    console.log(profilePictureUrl);
    console.log(phoneNumber);
  };

    let backgroundphoto = "bg-[url('https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover h-screen rounded-lg w-full";
  return (
    <div className="grid lg:flex gap-3 min-h-screen items-center justify-center p-5">
    <div className="w-full">
      <p className="text-xl font-bold text-center">Register Your Account</p>
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-[400px] gap-3 mt-5">
          <Input type="name" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
          <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
          <Input type="passwordRepeat" placeholder="Confirm Password" onChange={(e) => setRepeatPassword(e.target.value)} />
          {isClient && (
              <Select 
              onChange={(event) => setRole(event.value)}
              options={optionsRole} 
              />
          )}
          <Input type="profilePictureUrl" placeholder="Profile Pict URL" onChange={(e) => setProfilePictureUrl(e.target.value)}/>
          <Input type="phoneNumber" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)}/>
          <Button onClick={handleRegister} >Register</Button>
          <p className="text-sm">
            Already have an account?{" "}
            <Link href="/login" className="font-bold text-blue-700 text-sm">
              Login
            </Link>
          </p>
          {/* gua mute bentar yak */}
        </div>
      </div>
    </div>
    <div className={backgroundphoto}></div>
  </div>
  )
}

export default Register