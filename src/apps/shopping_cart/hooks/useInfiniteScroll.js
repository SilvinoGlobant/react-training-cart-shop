import { useState, useEffect } from 'react';

const useInfiniteScroll = (callback) => {
    const [isFetching, setIsFetching] = useState(false);
    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const isButtonNow = window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;

            setIsBottom((isBottom) =>
                isBottom !== isButtonNow ? isButtonNow : isBottom);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [setIsBottom]);

    useEffect(() => {
        if (isBottom && !isFetching) {
            setIsFetching(true);
            setIsBottom(false);
            callback();
        }
    }, [isBottom, isFetching, setIsFetching, setIsBottom, callback]);


    return [isFetching, setIsFetching];
};

export default useInfiniteScroll;