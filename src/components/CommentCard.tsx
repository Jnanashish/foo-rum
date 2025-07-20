import React from 'react'

import likeIcon from '../assets/like_icon.svg'
import replyIcon from '../assets/comment_icon.svg'
import shareIcon from '../assets/share_icon.svg'

interface CommentCardProps {
    userImage?: string;
    userName?: string;
    timestamp?: string;
    commentText?: string;
    currentFeelingIcon?: string;
}

const CommentCard: React.FC<CommentCardProps> = ({
    userImage = "https://i.ibb.co/9mJfDQ55/Rectangle-11.png",
    userName = "Theresa Webb",
    timestamp = "5 mins ago",
    commentText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    currentFeelingIcon = "🥴"
}) => {
    return (
        <div className="bg-[#00000008] rounded-[21px] p-[8px] pb-0 max-w-[568px] h-auto mx-auto">
            <div className='w-full h-full p-[14px] bg-white rounded-[18px] grid grid-cols-[auto_1fr] gap-x-3 gap-y-[10px] border-[1px] border-[#0000001A] border-solid shadow-[0px_4px_9px_0px_#0000000D]'>
                {/* Left column: profile pic and emoji */}
                <div className="flex flex-col items-center gap-[10px] pt-1">
                    <div className="w-[37px] h-[37px] rounded-[7px] overflow-hidden flex-shrink-0">
                        <img
                            src={userImage}
                            alt={userName}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span className="text-2xl h-[30px] w-[30px] flex items-center justify-center bg-[#F2F2F2] rounded-full text-[20px]">{currentFeelingIcon}</span>
                </div>

                {/* Right column: user info and comment */}
                <div className="grid grid-rows-[auto_1fr] h-full gap-y-[8px]">
                    {/* User info row */}
                    <div className="flex items-center gap-[10px] mt-[4px]">
                        <div>
                            <h3 className="font-[600] text-[#000000] text-[13px]">{userName}</h3>
                            <p className="text-[#0808085e] text-[12px]">{timestamp}</p>
                        </div>
                    </div>

                    {/* Comment row */}
                    <div className="mb-[8px]">
                        <p className="text-[#000000] text-[14px] leading-relaxed">
                            {commentText}
                        </p>
                    </div>
                </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-6 h-[42px] px-[15px]">
                <button className=" w-[18px] h-[18px]">
                    <img src={likeIcon} alt="like icon" />
                </button>

                <button className="w-[18px] h-[18px]">
                    <img src={replyIcon} alt="reply icon" />
                </button>

                <button className="w-[18px] h-[18px]">
                    <img src={shareIcon} alt="more icon" />
                </button>
            </div>
        </div>
    )
}

export default CommentCard