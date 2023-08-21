import { FaBookOpen, FaArrowLeft} from 'react-icons/fa';
import { AreaInput, BtnBack, BtnPublish, BtnSection, LabelInput, MainContent, TextArea, TitleInput } from './styled';
import ImageUploadButton from '../UploadImage/UploadImage';

function CreatePost() {

    return (
     <> 
        <MainContent>

            <BtnSection>
                <BtnBack> 
                    <FaArrowLeft size={20} />
                </BtnBack>

                <BtnPublish> 
                    <FaBookOpen size={20} />
                    Publicar 
                </BtnPublish>
            </BtnSection>

            <AreaInput>
                <LabelInput placeholder='tess'> Título do post </LabelInput>
                <TitleInput/>
            </AreaInput>

            <AreaInput>
                <LabelInput> Conteúdo </LabelInput>
                <TextArea />
            </AreaInput>

            <ImageUploadButton />
            
        </MainContent>
    </>
    );
}
  
export default CreatePost;
  