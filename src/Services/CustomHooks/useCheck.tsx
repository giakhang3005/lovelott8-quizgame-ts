export const useCheck = () => {
    const checkDevice = () => {
        //Check phone
        const isPhone = /iPhone|Android|Windows Phone|IPad|IPod/.test(navigator.userAgent);
        const isTablet = /Tablet|iPad/i.test(navigator.userAgent);

        if (isPhone || isTablet) {
            return (window.innerHeight < window.innerWidth);
        }

        return false
    }

    return { checkDevice }
}