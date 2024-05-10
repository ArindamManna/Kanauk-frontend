// FileInput.js
import React, { useEffect, useState } from "react";
import { storage } from "../middleware/firebase";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { crossIcon } from "../asset/staticData";
import Loader from "./Loader";
const Upload = () => {
    const [image, setImage] = useState("");
    const [loader, setLoader] = useState(false);
    const [imageUrl, setImageUrl] = useState([]);

    const handleUpload = () => {
        if (image == null) return;
        const imageRef = ref(storage, `upload/${v4()}`);
        setLoader(true);
        uploadBytes(imageRef, image).then((value) => {
            console.log(value);
            getDownloadURL(value.ref).then((url) => {
                //todo send url to server
                console.log(url);
                setLoader(false);
                setImageUrl((data) => [...data, url]);
            });
        });
    };

    console.log(imageUrl, "imageUrl");

    return (
        <>
            {loader ? <Loader /> : ""}

            <div>
                <div className="uploadDocInputBox">
                    {/* <button className="cancleBtn">
                        <span className="h-5 w-5 block">

                            {crossIcon}
                        </span>

                    </button> */}
                    {/* <p>Drag and Drop your files here</p>
                    <span>OR</span> */}
                    <label for="file1" type="submit" className="btn black-btn">
                        Browse File
                    </label>

                    <input
                        onChange={(e) => {
                            setImage(e.target.files[0]);
                            handleUpload();
                        }}
                        type="file"
                        id="file1"
                        multiple=""
                        className="position-absolute h-100 w-100 top-0 start-0 opacity-0 "
                    />
                </div>
                {/* <input
                type="file"
                onChange={(e) => {
                   
                }}
            /> */}
                {/* <button onClick={handleUpload}>Upload</button> */}
                {imageUrl.map((src) => (
                    <img src={src} alt="" height="200px" width="200px" />
                ))}
            </div>
        </>
    );
};

export default Upload;
