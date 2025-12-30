import React from "react";

type Props = {
  title: string;
  description: string;
};

export default function AuthHeader({ title, description }: Props) {
  return (
    <div className="text-center">
      <h1 className="mb-2 text-2xl font-bold">{title}</h1>
      <p className="text-secondary-foreground text-sm">{description}</p>
    </div>
  );
}
