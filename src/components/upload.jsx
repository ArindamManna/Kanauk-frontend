// FileInput.js
import React, { useEffect, useState } from "react";
import { storage } from "../middleware/firebase";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
const Upload = () => {
    const [image, setImage] = useState("");
    const [imageUrl, setImageUrl] = useState([]);

    const handleUpload = () => {
        if (image == null) return;
        const imageRef = ref(storage, `upload/${v4()}`);
        uploadBytes(imageRef, image).then((value) => {
            console.log(value);
            getDownloadURL(value.ref).then((url) => {
                //todo send url to server
                console.log(url);
                setImageUrl((data) => [...data, url]);
            });
        });
    };

    // useEffect(() => {
    //     listAll(ref(storage, "files")).then((imgs) => {
    //         console.log(imgs);
    //         imgs.items.forEach((val) => {
    //             getDownloadURL(val).then((url) => {
    //                 setImageUrl((data) => [...data, url]);
    //             });
    //         });
    //     });
    // }, []);

    console.log(imageUrl, "imageUrl");

    return (
        <div>
            <input
                type="file"
                onChange={(e) => {
                    setImage(e.target.files[0]);
                }}
            />
            <button onClick={handleUpload}>Upload</button>
            {imageUrl.map((src) => (
                <img src={src} alt="" height="200px" width="200px" />
            ))}
        </div>
    );
};

export default Upload;
