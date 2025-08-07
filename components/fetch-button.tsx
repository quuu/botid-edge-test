"use client";

export default function FetchButton() {
  return (
    <button
      onClick={() => {
        fetch("/api/generate", {
          method: "POST",
        });
      }}
    >
      Click me
    </button>
  );
}
