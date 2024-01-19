'use client'

import './Loader.css';

import { FC } from "react";

export const Loader: FC = () => {

  return (
    <div className="lds-ripple">
      <div/>
      <div/>
    </div>
  );
}