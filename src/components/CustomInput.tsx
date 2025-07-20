import React, {useState} from 'react';

import dropdownIcon from '../assets/chevron_down.svg';
import textBoldIcon from '../assets/text-bold.svg';
import trashIcon from '../assets/trash.svg';
import scriptIcon from '../assets/script.svg';
import quotesIcon from '../assets/quotes.svg';
import listOrderedIcon from '../assets/list-ordered.svg';
import listUnorderedIcon from '../assets/list-unordered.svg';
import textUnderlineIcon from '../assets/text-underline.svg';
import textItalicIcon from '../assets/text-italic.svg';

import emotionSmileIcon from '../assets/emotion-smile.svg';
import sendIcon from '../assets/send.svg';
import videoCameraIcon from '../assets/video-camera.svg';
import micIcon from '../assets/mic.svg';
import plusIcon from '../assets/plus.svg';

interface CustomInputProps {
    handleSubmitClick: (value: string) => void;
}

const CustomInput = ({ handleSubmitClick }: CustomInputProps) => {
    const [inputComment, setInputComment] = useState<string>("");


    // show info toast 
    const showInfoToast = (event: React.MouseEvent<HTMLButtonElement>) => {
        (window as any).showInfoToast(event.currentTarget);
    };

    // send comment to parent
    const handleSubmit = () => {
        if (!!inputComment) {
            handleSubmitClick(inputComment);
            setInputComment("");
        }
    };

    return (
        <div className='max-w-[568px] w-full p-[7px] bg-[#00000008] rounded-[21px]'>
            <div className='w-full h-full bg-white rounded-[18px] border-[1px] border-[#0000001A] border-solid shadow-[0px_4px_9px_0px_#0000000D]'>
                {/* Top Toolbar section */}
                <div className='flex items-center justify-between px-2 py-2'>
                    <div className='flex items-center bg-[#00000008] rounded-[10px] p-[6px]'>
                        <span onClick={showInfoToast} className='cursor-pointer flex items-center gap-[5px] bg-white rounded-[7px] px-[8px] py-[6px] text-[12px] font-[500] text-[#000000CF] shadow-[0px_1px_7px_0px_#00000017]'>
                            <p>Paragraph</p>
                            <img src={dropdownIcon} alt="dropdown icon" />
                        </span>

                        {/* Formatting Buttons */}
                        <div className='flex items-center ml-[16px] border-r-[1px] border-[#0000001A] border-solid gap-[16px]'>
                            <button onClick={showInfoToast} className='w-[14px] h-8 flex items-center justify-center rounded'>
                                <img src={textBoldIcon} alt="text bold icon" />
                            </button>
                            <button onClick={showInfoToast} className='w-[14px] h-8 flex items-center justify-center rounded'>
                                <img src={textItalicIcon} alt="text italic icon" />
                            </button>
                            <button onClick={showInfoToast} className='w-[14px] h-8 flex items-center justify-center mr-[16px]'>
                                <img src={textUnderlineIcon} alt="text underline icon" />
                            </button>
                        </div>

                        {/* List Buttons */}
                        <div className='flex items-center ml-4 border-r-[1px] border-[#0000001A] border-solid'>
                            <button onClick={showInfoToast} className='w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-700'>
                                <img src={listOrderedIcon} alt="list ordered icon" />
                            </button>
                            <button onClick={showInfoToast} className='w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-700  mr-[16px]'>
                                <img src={listUnorderedIcon} alt="list unordered icon" />
                            </button>
                        </div>

                        {/* Quote and Code Buttons */}
                        <div className='flex items-center ml-4 gap-[16px] mr-[24px]'>
                            <button onClick={showInfoToast} className='w-[14px] h-8 flex items-center justify-center'>
                                <img src={quotesIcon} alt="quotes icon" />
                            </button>
                            <button onClick={showInfoToast} className='w-[14px] h-8 flex items-center justify-center'>
                                <img src={scriptIcon} alt="script icon" />
                            </button>
                        </div>
                    </div>

                    {/* Delete Button */}
                    <button
                        className='w-[40px] h-[40px] flex items-center justify-center rounded-[10px] bg-[#FF000026]'
                        onClick={showInfoToast}
                    >
                        <img className='w-[16px] h-[16px]' src={trashIcon} alt="trash icon" />
                    </button>
                </div>

                {/* Main Content Area */}
                <div className='px-3 py-2 min-h-[120px]'>
                    <div className='flex items-start'>
                        <span className='mt-[2px] h-[18px] w-[18px] flex items-center justify-center'><img src={emotionSmileIcon} alt="emotion smile icon" /></span>
                        <textarea className='ml-[8px] w-full h-full resize-none outline-none border-none bg-transparent font-[500] text-[14px] text-[#000000] placeholder:text-[#00000066]' placeholder='How are you feeling today?' value={inputComment} onChange={(e) => setInputComment(e.target.value)} />
                    </div>
                </div>

                {/* Bottom Action Bar */}
                <div className='flex items-center justify-between px-3 py-3 border-t border-[#D9D9D9]'>
                    <div className='flex items-center space-x-3 gap-[10px]'>
                        <button onClick={showInfoToast} className='w-[30px] h-[30px] flex items-center justify-center bg-[#0000000F] rounded-[10px]'>
                            <img className='w-[18px] h-[18px]' src={plusIcon} alt="mic 2 icon" />
                        </button>
                        <button onClick={showInfoToast} className='w-[18px] h-[18px] flex items-center justify-center'>
                            <img src={micIcon} alt="mic icon" />
                        </button>
                        <button onClick={showInfoToast} className='w-[18px] h-[18px] flex items-center justify-center'>
                            <img src={videoCameraIcon} alt="video camera icon" />
                        </button>
                    </div>

                    {/* Send Button */}
                    <button onClick={handleSubmit} className='w-[24px] h-[24px]'>
                        <img src={sendIcon} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CustomInput;