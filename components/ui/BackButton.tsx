import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="mb-6 flex items-center gap-2 text-gray-400 hover:text-white transition cursor-pointer"
    >
      <ArrowLeft /> <span className="font-bold">Back</span>
    </button>
  );
};

export default BackButton;
