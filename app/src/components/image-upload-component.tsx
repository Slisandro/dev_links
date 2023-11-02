import React, { useState } from 'react';
import ImageIcon from '../icons/image-icon';
import { useDispatch, useSelector } from 'react-redux';
import { UserProfileState } from '../redux/reducers/user-profile-reducers';
import { setImage as setImageAction } from '../redux/reducers/user-profile-reducers';

function ImageUploadComponent() {
    const dispatch = useDispatch();
    const { image }: UserProfileState = useSelector((state: { userProfileReducers: UserProfileState }) => state.userProfileReducers);
    const [currentImage, setImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(image);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedImage = e.target.files && e.target.files[0];
        if (selectedImage) {
            setImage(selectedImage);
            const imageUrl = URL.createObjectURL(selectedImage);
            setPreviewUrl(imageUrl);
            dispatch(setImageAction({ url: imageUrl, file: selectedImage }))
        }
    };

    return (
        <div className="image-upload">
            <div className="preview">
                <input type="file" id="image-profile" accept="image/*" onChange={handleImageChange} hidden />
                {currentImage ? (
                    <label htmlFor="image-profile" className="change-image">
                        <ImageIcon color={"#ffffff"} />
                        Change Image
                    </label>
                ) : (
                    <label htmlFor="image-profile" className="upload-image">
                        <ImageIcon color={"#633CFF"} />
                        + Upload Image
                    </label>
                )}
                <PreviewImage previewUrl={previewUrl} />
            </div>
            <p>{image ? "Image uploaded" : "Image not uploaded"}</p>
        </div>
    );
};

const PreviewImage = ({ previewUrl }: { previewUrl: string | null }) =>
    previewUrl ? <img src={previewUrl} alt="Vista previa de la imagen" /> : <></>;

export default ImageUploadComponent