import { useState, useRef } from "react";
import { FaRegImage } from 'react-icons/fa';
import { BtnUpload, ImagePreview, UploadBtnArea } from "./styled";

function ImageUploadButton() {
    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleButtonClick = () => {
      fileInputRef.current.click();
    };
  
    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      setSelectedImage(URL.createObjectURL(selectedFile));
    };
  
    return (
        <>

            <UploadBtnArea>

                <BtnUpload  onClick={handleButtonClick}>
                    <FaRegImage size={23} />
                    Adicionar imagem  
                </BtnUpload >

                <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
                />

                <ImagePreview>
                    <h1> Pré-visualização </h1>
                    {selectedImage && <img src={selectedImage} alt="Uploaded" />}
                </ImagePreview>

            </UploadBtnArea>
            
        </>
    );
  }
  
  export default ImageUploadButton;