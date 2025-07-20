import CustomInput from './CustomInput';
import CommentCard from './CommentCard';
import data from '../Data/index.json';
import LoginForm from './LoginForm';

import Modal from './Modal';
import { useState } from 'react';

function MainView() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [comments, setComments] = useState(data);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    }

    const handleSubmitClick = (value: string) => {
        const newComment = {
            "userImage": "https://i.ibb.co/9mJfDQ55/Rectangle-11.png",
            "userName": "Theresa Webb",
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