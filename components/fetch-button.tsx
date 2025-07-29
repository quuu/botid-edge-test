"use client";

export default function FetchButton() {
  return (
    <button
      onClick={() => {
        fetch("/api/post-data", {
          method: "POST",
        });
      }}
    >
      Click me
    </button>
  );
}
