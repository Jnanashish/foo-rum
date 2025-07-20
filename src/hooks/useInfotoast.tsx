export const useInfoToast = () => {
    const showToast = (element?: HTMLElement | MouseEvent) => {
        if ((window as any).showInfoToast) {
            (window as any).showInfoToast(element);
        }
    };

    return { showToast };
};