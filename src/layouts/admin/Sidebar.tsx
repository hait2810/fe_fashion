import { BiCategory, BiHome, BiLogOut } from 'react-icons/bi'
import { CgProductHunt } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import useUserStore from '../../store/userStore'
export const Sidebar = () => {
    const { clearUser } = useUserStore()
    return (
        <>
            <div className="min-h-screen flex flex-row bg-gray-100">
                <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
                    <div className="flex items-center justify-center h-20 shadow-md">
                        <h1 className="text-3xl uppercase text-indigo-500">Admin</h1>
                    </div>
                    <ul className="flex flex-col py-4">
                        <li>
                            <Link to="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><BiHome /></span>
                                <span className="text-sm font-medium">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="category" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><BiCategory /></span>
                                <span className="text-sm font-medium">Danh mục</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="products" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><CgProductHunt /></span>
                                <span className="text-sm font-medium">Sản phẩm</span>
                            </Link>
                        </li>
                        {/* <li>
                            <Link to="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><BiNotification /></span>
                                <span className="text-sm font-medium">Notifications</span>
                                <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
                            </Link>
                        </li> */}
                        <li>
                            <Link to={""} onClick={clearUser} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><BiLogOut /></span>
                                <span className="text-sm font-medium">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}