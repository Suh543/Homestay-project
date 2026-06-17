"use client";

import { useState } from "react";
import {
  Button,
  Input,
  Modal,
  Toast,
  Loader,
} from "../components/ui";

export default function ComponentsDemo() {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleToast = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">UI Components Demo</h1>

      <div>
        <h2 className="mb-2 font-semibold">Button</h2>
        <Button text="Show Toast" onClick={handleToast} />
      </div>

      <div>
        <h2 className="mb-2 font-semibold">Input</h2>
        <Input placeholder="Enter your email" type="email" />
      </div>

      <div>
        <h2 className="mb-2 font-semibold">Loader</h2>
        <Loader size="medium" />
      </div>

      <div>
        <h2 className="mb-2 font-semibold">Modal</h2>
        <Button
          text="Open Modal"
          onClick={() => setShowModal(true)}
        />
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      >
        <p>This is a demo modal.</p>
      </Modal>

      {showToast && (
        <Toast message="Action completed successfully!" />
      )}
    </div>
  );
}