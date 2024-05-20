// FileInput.js
import React, { useEffect, useState } from "react";
import { storage } from "../middleware/firebase";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { crossIcon } from "../asset/staticData";
import Loader from "./Loader";
const Upload = ({ updateFormdata, currentImage, deleteImage }) => {
    const [loader, setLoader] = useState(false);
    const [imageUrl, setImageUrl] = useState([]);

    const handleUpload = (image) => {
        if (image == null) return;
        const imageRef = ref(storage, `upload/${v4()}`);
        setLoader(true);
        uploadBytes(imageRef, image).then((value) => {
            console.log(value);
            getDownloadURL(value.ref).then((url) => {
                //todo send url to server
                console.log(url);
                setLoader(false);
                // setImageUrl((prev) => [...prev, url]);
                updateFormdata(url);
            });
        });
    };

    // console.log(imageUrl, "imageUrl");

    return (
        <>
            {loader ? <Loader /> : ""}
            {currentImage?.url == "" ?
                <div >
                    <label class="form-label">upload Images one by one :</label>
                    <div className="uploadDocInputBox">
                        <button className="cancleBtn" type="button" onClick={() => { deleteImage() }}>
                            <span className="h-5 w-5 block mb-0">

                                {crossIcon}
                            </span>
                        </button>

                        <label for="file1" type="submit" className="btn black-btn">
                            Browse File
                        </label>

                        <input
                            onChange={(e) => {
                                handleUpload(e.target.files[0]);
                            }}
                            type="file"
                            id="file1"
                            multiple=""
                            className="position-absolute h-100 w-100 top-0 start-0 opacity-0 "
                        />
                    </div>
                </div> :
                <div className="relative">
                    <button className="cancleBtn absolute top-2 bg-white text-[#bdbdbd] rounded-full right-2" type="button" onClick={() => { deleteImage() }}>
                        <span className="h-5 w-5 block mb-0">

                            {crossIcon}
                        </span>
                    </button>
                    <img src={currentImage?.url} alt="" />
                </div>}
        </>
    );
};

export default Upload;
