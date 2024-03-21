

import { useEffect, useState } from "react"


export const useScrollTop = (threshold = 10) => {
    const [secrolled, setSclolled] = useState(false);

    useEffect(() => {
        const handelScroll = () => {
            if (window.screenY > threshold) {
                setSclolled(true)
            } else {
                setSclolled(false)
            }
        }

        window.addEventListener("scroll", handelScroll);
        return () => window.removeEventListener("scroll", handelScroll)
    }, [threshold]);

    return secrolled
}