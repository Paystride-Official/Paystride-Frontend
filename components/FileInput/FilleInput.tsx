import React, { useState, ChangeEvent } from "react";

type FileInputProps = {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
};

const FileInput: React.FC<FileInputProps> = ({ file, setFile }) => {
  const [error, setError] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    const maxSize = 2 * 1024 * 1024; // 5MB

    if (!selectedFile) return <p>No file selected</p>;

    if (!allowedTypes.includes(selectedFile.type))
      return setError("upload file of format image/jpeg image/png image/gif");

    if (selectedFile.size <= maxSize) {
      setFile(selectedFile);
      setError("");
      return;
    } else {
      setError("File size exceeds 2MB limit.");
    }

    setFile(null);
  };

  return (
    <>
      <input
        type="file"
        accept="image/jpeg, image/png, image/gif"
        onChange={handleChange}
        className="w-full absolute top-0 opacity-0 cursor-pointer "
      />
      {error && <div className="text-red-500">{error}</div>}
    </>
  );
};

export default FileInput;
