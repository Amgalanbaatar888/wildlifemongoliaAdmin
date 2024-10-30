"use client";

import { useStoreModel } from "@/hooks/use-store-model";
import { UserButton } from "@clerk/nextjs";
import { useEffect } from "react";

const SetupPage = () => {
  const onOpen = useStoreModel((state) => state.onOpen);
  const isOpen = useStoreModel((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, []);

  return (
    <div className="p-4">
      Root Page
      <UserButton />
    </div>
  );
};

export default SetupPage;
