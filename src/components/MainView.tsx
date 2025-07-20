import CustomInput from './CustomInput';
import CommentCard from './CommentCard';
import data from '../Data/index.json';

function MainView() {
    const handleSubmitClick = (value: string) => {
        // setInputComment(value);
    };

    return (
        <>
            <div className='flex flex-col items-center justify-center mb-[42px] mt-[146px]'>
                <CustomInput handleSubmitClick={handleSubmitClick}/>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center gap-[24px]">
                {
                    data.map((item, index) => (
                        <CommentCard key={index} {...item} />
                    ))
                }
            </div>
        </>
    );
}

export default MainView; 