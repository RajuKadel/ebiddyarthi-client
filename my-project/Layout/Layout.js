import { Navbar, Sidebar } from "../components"
import { useSelector } from 'react-redux'
import { Toaster } from 'react-hot-toast';
const Layout = ({ children }) => {
    const { activeSidebar, isUser, isAdmin } = useSelector((state) => state)
    console.log(activeSidebar);
    return (
        <>
            <Toaster />
            {isUser && !isAdmin && (
                <Sidebar />
            )}
            <div >
                {isUser && !isAdmin && (
                    <Navbar />
                )}
                <div>
                    <div className='mt-12 pr-5'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout