import React, { FC } from "react";

interface TitleProps {
  title: string;
  subtitle?: string;
}

const Title: FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <>
      <h1 className="text-4xl font-bold">{title}</h1>
      <h2 className="text-lg font-semibold">{subtitle}</h2>
    </>
  );
};

export default Title;
