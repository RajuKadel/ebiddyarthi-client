import { Navbar, Sidebar } from "../components"
import { useSelector } from 'react-redux'
import { Toaster } from 'react-hot-toast';
const Layout = ({ children }) => {
    const { token } = useSelector((state) => state)
    return (
        <>
            <Toaster />
            {token && (
                <Sidebar />
            )}
            <div >
                {token && (
                    <Navbar />
                )}
                <div>
                    <div className='mt-12 pr-5  '>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout