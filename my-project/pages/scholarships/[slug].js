import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Ugcdetail from '../../components/ugcDetail/Ugcdetail'
import Mahatmadetail from '../../components/Mahatmadetail/Mahatmadetail'
import Garibdetail from '../../components/Garibdetail/Garibdetail'
const ScholarshipDetail = () => {
    const { activeSidebar, token } = useSelector(state => state)
    const router = useRouter()
    const { slug } = router.query
    useEffect(() => {
        if (!token) {
            router.push('/auth')
        }
    }, [])
    return (
        <div
            className={`transition-all ease-out duration-700 pt-5 px-2 mt-12 bg-slate-100 ${activeSidebar ? 'lg:ml-64' : ''
                }`}
        >
            {slug === 'ugc' ? <Ugcdetail /> : null}
            {slug === 'mahatma-gandhi' ? <Mahatmadetail /> : null}
            {slug === 'garib-tatha-jehendar' ? <Garibdetail /> : null}
        </div>
    )
}
export default ScholarshipDetail;