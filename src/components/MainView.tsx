import CustomInput from './CustomInput';
import CommentCard from './CommentCard';
import data from '../Data/index.json';
import LoginForm from './LoginForm';

import Modal from './Modal';
import { useContext, useState } from 'react';
import UserContext from '../context/userContext';

function MainView() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [comments, setComments] = useState(data);
    const user = useContext(UserContext);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    }

    const handleSubmitClick = (value: string) => {
        const newComment = {
            "userImage": user?.user?.profilePicture || "https://i.ibb.co/Jj2hcmW1/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-wi.jpg",
            "userName": user?.user?.email || "",
            "timestamp": new Date().toLocaleString(),
            "commentText": value,
            "currentFeelingIcon": "🥴"
        }
        setComments([newComment, ...comments]);
    };

    return (
        <>
            <div className='flex flex-col items-center justify-center mb-[42px] mt-[146px]'>
                <CustomInput handleModalOpen={handleModalOpen} handleSubmitClick={handleSubmitClick} />
            </div>
            <div className="flex flex-1 flex-col items-center justify-center gap-[24px]">
                {
                    comments.map((item, index) => (
                        <CommentCard key={index} {...item} />
                    ))
                }
            </div>
            <Modal isOpen={isModalOpen} onClose={handleModalOpen}>
                <LoginForm />
            </Modal>
        </>
    );
}

export default MainView; 