import LoginForm from '@/components/LoginForm'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Login page",
  description: "Generated by create next app",
};

const Login = () => {
  return (
    <div>
        <LoginForm/>
    </div>
  )
}

export default Login