import { message } from "antd";
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

    const checkDevTool = () => {

        // Process prevent & prevent noti spam
        const preventDevTool = (e: any) => {
            // Stop browser open dev tool
            e.preventDefault();

            // Save Noti progress into localStorage
            if (!(localStorage.getItem('useDevTools') === "true")) {

                // Display message
                message.error('Vui lòng không can thiệp web bằng Dev Tools')

                // Save status & Clear stats after 2.2s in localstorage
                localStorage.setItem('useDevTools', "true")
                const notiTimeOut = setTimeout(() => {
                    localStorage.removeItem('useDevTools')
                    clearTimeout(notiTimeOut)
                }, 1000 * 2.2)
            }
        }

        //prevent open context menu
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        })

        document.addEventListener('keydown', (e: any) => {
            // Prevent F12
            if (e.code === 'F12') {
                preventDevTool(e)
            }


            //User are holding Cmd on Mac or Ctrl on Window + Shift/Opt/Return
            if (e.metaKey && (e.altKey || e.shiftKey)) {
                // Check if the key pressed is 'i' or 'c'
                if (e.key === 'i' || e.code === 'KeyI' || e.key === 'c' || e.code === 'KeyC' || e.key === 'j' || e.code === 'KeyJ') {
                    preventDevTool(e)
                }
            }
        })

    }

    const preventCopy = () => {
        document.addEventListener('copy', (e) => {
            e?.clipboardData?.setData('text/plain', 'Coc Sai Gon Communication Club - https://www.facebook.com/cocsaigonfuhcm');
            e.preventDefault(); 
        });
    }

    return { checkDevice, checkDevTool, preventCopy }
}