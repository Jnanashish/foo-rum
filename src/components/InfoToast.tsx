import React, { useState, useEffect, useRef } from 'react';

interface ToastData {
    message: string;
    x: number;
    y: number;
    id: string;
}

interface InfoToastProps {
    duration?: number;
}

const InfoToast: React.FC<InfoToastProps> = ({
    duration = 1000
}) => {
    const [toast, setToast] = useState<ToastData | null>(null);
    const timeoutsRef = useRef<{ hide?: NodeJS.Timeout }>({});

    const showToast = (element?: HTMLElement) => {
        if (timeoutsRef.current.hide) {
            clearTimeout(timeoutsRef.current.hide);
        }

        const id = Date.now().toString();
        let x = 0;
        let y = 0;

        if (!!element) {
            const rect = element.getBoundingClientRect();
            x = rect.left + rect.width / 2; // Center horizontally on the element
            y = rect.top; // Position above the element
        } else {
            // fallback to center of screen
            x = window.innerWidth / 2;
            y = window.innerHeight / 2;
        }
        const message = "Function not implemented";
        const newToast: ToastData = { message, x, y, id };

        setToast(newToast);


        timeoutsRef.current.hide = setTimeout(() => {
            setToast(null);
        }, duration);
    };

    // expose showToast function globally for easy access
    useEffect(() => {
        (window as any).showInfoToast = showToast;
        return () => {
            delete (window as any).showInfoToast;
        };
    }, []);

    return (
        <>
            {toast && (
                <div
                    className="fixed z-50 pointer-events-none"
                    style={{
                        left: `${toast.x - 95}px`,
                        top: `${toast.y - 40}px`,
                        transform: 'translateX(0)',
                    }}
                >
                    <div className={` bg-red-50  px-4 py-2 rounded-lg  flex items-center gap-2 transition-all duration-300 ease-in-out relative `} >
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-50  rotate-45"></div>
                        <span className="text-blue-700 text-xs font-bold">😔</span>
                        <span className="text-[10px] text-[#FF0000] font-[500]">{toast.message}</span>
                    </div>
                </div>
            )}
        </>
    );
};



export default InfoToast;
