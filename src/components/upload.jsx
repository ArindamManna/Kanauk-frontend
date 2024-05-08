// FileInput.js
import React, { useState } from "react";
import { storage } from "../middleware/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
const Upload = () => {
    const [image, setImage] = useState(null);

    const handleUpload = () => {
        if (image == null) return;
        const imageRef = ref(storage, `upload/${v4()}`);
        uploadBytes(imageRef, image);
    };

    return (
        <div>
            <input
                type="file"
                onChange={(e) => {
                    setImage(e.target.files[0]);
                }}
            />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default Upload;
