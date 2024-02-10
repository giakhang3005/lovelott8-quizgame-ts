import { useState } from "react"
import "./UpdateRequire.scss"

type Props = {}

const UpdateRequire = (props: Props) => {
    const [showProg, setShowProg] = useState<boolean>(false)
    const handleUpdate = () => {
        setShowProg(true)

        setTimeout(() => {
            window.location.reload();
        }, 1000 * 3.3)
    }
    return (
        <div className='updaterequire'>
            <p>Hiện tại web LoveLott đã có bản cập nhật vá lỗi và bổ sung chức năng, bạn vui lòng cập nhật để có trải nghiệm tốt nhất</p>
            <p>Lưu ý: </p>
            <ol>
                <li>Thời gian cập nhật ước tính: <b>5 giây</b></li>
                <li><b>Dữ liệu</b> của bạn <b>sẽ được giữ nguyên</b> sau khi cập nhật</li>
            </ol>
            <button onClick={handleUpdate}>CẬP NHẬT</button>
            {showProg && <div className="loader2"></div>}
        </div>
    )
}

export default UpdateRequire