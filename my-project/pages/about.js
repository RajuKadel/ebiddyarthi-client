import Head from "next/head"
import { useSelector } from "react-redux"
import { useRouter } from "next/router"
import { useEffect } from "react"
import Image from "next/image"
import Introperson from "../components/IntroPerson/Introperson"
const data = [
  {
    description: `My name is Mahesh Raj Joshi. I am studying Electrical
    Engineering at Eastern Regional Campus (IOE).I have
    recently brought an application named “ E-Bidhyarthi”
    into existence with the support of my seniors /junior and
    friends. The main aim of this platform is to provide easy
    access to information about scholarship programs & create
    the information flow of research based educational system
    and the way to approach those programs effortlessly.`,
    image: '/mahesh.jpg',
    position: 'Founder, Content Creator & Manager',
    name: 'Mahesh Raj Joshi',
    colour: 'red'
  }, {
    description: ' Student of Mechanical engineering at IOE Purwanchal Campus Dharan,Co-founder and data analyst of the great digital learning platform e-bidhyarthi. Actually I handles most of the works on this platform to make the decision, arrangement of data, prediction and consequences of upcoming updates. ',
    image: '/lekhnath.jpg',
    position: 'Co-founder',
    name: 'Lekhnath Neupane',
    colour: 'cyan'
  },
  {
    description: ' Developer of E-biddyarthi at Web Platform,Student of Computer Engineering at IOE Purwanchal Campus,Dharan.I am so grateful to be part of this platform as a web developer and a support member.Wishing a successful moments forward to the core team for their outstanding motive and support to juniors.',
    image: '/neww.jpg',
    name: 'Raju kadel',
    position: 'Web Developer / Member',
    colour: 'green'
  },
  {
    description: 'Agricultural engineering student at IOE ERC . Team leader of higher himalaya project which is finalist of Qing innovation challenge and  attended ICYA (Germany) as a finalist of YCRAC organized by FAO and IAAS.',
    image: '/winnerdai.jpg',
    name: 'Samir Tiwari',
    position: 'Co-founder',
    colour: 'slate'
  }, {
    description: 'Developer of E- Bidhyarthi Mobile App currently studying 3rd year BEI Engineering.',
    image: '/app.jpg',
    name: 'Shyam Kishor Pandit',
    position: 'CO-founder',
    colour: 'yellow'
  }
]
const about = () => {
  const router = useRouter()
  const { activeSidebar, token } = useSelector((state) => state)
  useEffect(() => {
    if (!token) {
      router.push('/auth')
    }
  }, [])
  return (
    <div className={`transition-all px-2  ease-out duration-700 bg-slate-100 ${activeSidebar ? 'lg:ml-64' : ''
      }`}>
      <Head>
        <title>About</title>
      </Head>
      <div className="mb-5 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5">
          <div className="flex items-center space-x-2 pb-2">
            <div className="relative h-12 w-12">
              <Image src={'/logo.jpg'} layout={'fill'} />
            </div>
            <span >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ebiddyarthi</h5>
            </span>
          </div>
          <p className="mb-3 italic font-normal text-gray-700 dark:text-gray-400 normal-case">
            E-bidhyarthi is a digital platform that acts as a medium to provide services to specified people to apply for scholarship programs being provided by different organizations and institutions through a single app. In short, it is a digital scholarship application app. Moreover, it is an advanced app that collects information about different organizations and their scholarship programs. It links these things with this e-scholar app to simplify the paperwork and save time that is being wasted just by waiting in the long queue. Simply, it is the development in digitalization following the time to make the daily life of people easy to get all the research, well information and access to apply to the scholarship programs. This platform is mainly centric on Nepalese students.also we provide notification about job opportunities like contain writing ,App developer ,UI designer etc
          </p>
          <h2 className='underline w-fit font-medium px-1'>Mission of E-bidhyarthi</h2>
          <p className="mb-3 font-normal text-gray-700 italic dark:text-gray-400 normal-case">
            The main aim of this platform is to provide easy access to information about scholarship programs and the way to approach those programs effortlessly. In addition, it simplifies to reach out the research regarding those programs and readily provides information related to national and international scholarship programs. Not only this it also notifies about these things through the app.
          </p>
          <h2 className='underline font-medium w-fit px-1'>  Vision of E-scholar</h2>
          <p className="mb-3 italic font-normal text-gray-700 dark:text-gray-400 normal-case">
            It wants to connect the service provider and the targeted groups through a digital platform for the easy and convenient distribution of the opportunity to the actual needy people. It wants to provide service to the necessitous people. That’s platform provide job opportunities ,research paper ,and notify about available grand & challenge it’s help the student for improving their performance on various field and fixed their presence on national or international field .also  we are concern to promoting submitted  research.
          </p>
        </div>
        <div>
        </div>
      </div>
      <div className="max-w-90vw overflow-hidden">
        {data.map((item, index) => (
          <div key={index}>
            <Introperson colour={item.colour} description={item.description} image={item.image} position={item.position} name={item.name} />

          </div>
        ))}
      </div>


    </div>
  )
}

export default about