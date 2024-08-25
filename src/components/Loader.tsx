import './loader.css'
const Loader = () => {
    return (
        <div className='!flex !justify-center !items-center !w-full !h-[100vh]'>
            <div className="dot-spinner ">
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
            </div>
        </div>
    )
}
export default Loader