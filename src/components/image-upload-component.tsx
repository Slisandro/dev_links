import React, { useState } from 'react';
import ImageIcon from '../icons/image-icon';

function ImageUploadComponent() {
    const [image, setImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedImage = e.target.files && e.target.files[0];
        if (selectedImage) {
            setImage(selectedImage);
            const imageUrl = URL.createObjectURL(selectedImage);
            setPreviewUrl(imageUrl);
        }
    };

    return (
        <div className="image-upload">
            <div className="preview">
                <input type="file" id="image-profile" accept="image/*" onChange={handleImageChange} hidden />
                {image ? (
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

const PreviewImage = ({ previewUrl }: { previewUrl: string }) =>
    previewUrl ? <img src={previewUrl} alt="Vista previa de la imagen" /> : <></>;

export default ImageUploadComponent