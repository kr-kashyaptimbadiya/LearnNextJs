"use client";
export default function Page({ params }) {
  console.log({ params });
  return <h1>Name:{params.employee}</h1>;
}
