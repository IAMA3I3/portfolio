import Project from "./Project"
import abdubelVid from '../assets/projects/abdubel.mp4'
import abdubelImg1 from '../assets/projects/abdubel1.png'
import dashboard1 from '../assets/projects/dashboard1.mp4'
import dashboardimg1 from '../assets/projects/dashboardimg1.png'
import gallaryapp1 from '../assets/projects/gallaryapp1.mp4'
import gallaryappimg1 from '../assets/projects/gallaryapp1.png'
import dashboardVid from '../assets/projects/dashboardvid.mp4'
import gate from '../assets/projects/gateinitiative01.mp4'
import digworldImg from '../assets/projects/digworld.png'
import digWorldVid from '../assets/projects/medigworld.mp4'
import searchimg from '../assets/projects/searchimg.png'
import searchimgVid from '../assets/projects/searchimg.mp4'
import uploadchar from '../assets/projects/uploadchar.mp4'
import todoVid from '../assets/projects/Todo.mp4'
import complianceDrive from '../assets/projects/complianceDrive.mp4'
import stopshopDashboard from '../assets/projects/stopshopDashboard.mp4'
import stopshop360Vid from '../assets/projects/stopshop360.mp4'
import stopshop1 from '../assets/projects/stopshop1.png'
import stopshop2 from '../assets/projects/stopshop2.png'
import stopshop3 from '../assets/projects/stopshop3.png'
import archomezVid from '../assets/projects/ArcHomez.mp4'
import archomez1 from '../assets/projects/archomez1.png'
import archomez2 from '../assets/projects/archomez2.png'
import archomez3 from '../assets/projects/archomez3.png'
import archomez4 from '../assets/projects/archomez4.png'
import tripstoreImg1 from '../assets/projects/tripstore.png'
import tripstoreImg2 from '../assets/projects/tripstore1.png'
import tripstoreImg3 from '../assets/projects/tripstore2.png'
import tripstoreVid1 from '../assets/projects/tripstore.mp4'
import tripstoreVid2 from '../assets/projects/tripstore1.mp4'
import tripstoreVid3 from '../assets/projects/tripstore2.mp4'

const Projects = () => {

    const projectMap = projectList.map((item, index) => (
        <div key={index} className="">
            <Project item={item} projectList={projectList} index={index} />
        </div>
    ))

    return (
        <div className=" w-full py-20 bg-blue-500/30 dark:bg-slate-800/70" id="projects">
            <div className=" container">
                <div className=" text-3xl mb-4">Projects</div>
                <div className=" grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {projectMap}
                </div>
            </div>
        </div>
    )
}

export default Projects

const projectList = [
    { 'title': 'Tripstore Shop App', 'img': tripstoreImg1, 'vid': '', 'isVid': false, 'hasLink': false, 'link': '' },
    { 'title': 'Tripstore Shop App', 'img': tripstoreImg2, 'vid': '', 'isVid': false, 'hasLink': false, 'link': '' },
    { 'title': 'Tripstore Shop App', 'img': tripstoreImg3, 'vid': '', 'isVid': false, 'hasLink': false, 'link': '' },
    { 'title': 'Tripstore Shop App', 'img': '', 'vid': tripstoreVid1, 'isVid': true, 'hasLink': false, 'link': '' },
    { 'title': 'Tripstore Shop App', 'img': '', 'vid': tripstoreVid2, 'isVid': true, 'hasLink': false, 'link': '' },
    { 'title': 'Tripstore Shop App', 'img': '', 'vid': tripstoreVid3, 'isVid': true, 'hasLink': false, 'link': '' },
    { 'title': 'Real Estate Website', 'img': archomez1, 'vid': '', 'isVid': false, 'hasLink': true, 'link': 'https://archomez.com/' },
    { 'title': 'Real Estate Website', 'img': archomez2, 'vid': '', 'isVid': false, 'hasLink': true, 'link': 'https://archomez.com/' },
    { 'title': 'Real Estate Website', 'img': archomez3, 'vid': '', 'isVid': false, 'hasLink': true, 'link': 'https://archomez.com/' },
    { 'title': 'Real Estate Website', 'img': archomez4, 'vid': '', 'isVid': false, 'hasLink': true, 'link': 'https://archomez.com/' },
    { 'title': 'Real Estate Website', 'img': '', 'vid': archomezVid, 'isVid': true, 'hasLink': true, 'link': 'https://archomez.com/' },
    { 'title': 'Shop App Landing Page', 'img': stopshop1, 'vid': '', 'isVid': false, 'hasLink': true, 'link': 'https://stopshop360-sepia.vercel.app/' },
    { 'title': 'Shop App Landing Page', 'img': stopshop2, 'vid': '', 'isVid': false, 'hasLink': true, 'link': 'https://stopshop360-sepia.vercel.app/' },
    { 'title': 'Shop App Landing Page', 'img': stopshop3, 'vid': '', 'isVid': false, 'hasLink': true, 'link': 'https://stopshop360-sepia.vercel.app/' },
    { 'title': 'Shop App Landing Page', 'img': '', 'vid': stopshop360Vid, 'isVid': true, 'hasLink': false, 'link': '' },
    { 'title': 'Cloud Storage', 'img': '', 'vid': complianceDrive, 'isVid': true, 'hasLink': false, 'link': '' },
    { 'title': 'Shop App Dashboard', 'img': '', 'vid': stopshopDashboard, 'isVid': true, 'hasLink': false, 'link': '' },
    { 'title': 'Digital world', 'img': digworldImg, 'vid': '', 'isVid': false, 'hasLink': false, 'link': '' },
    { 'title': 'Digital world', 'img': '', 'vid': digWorldVid, 'isVid': true, 'hasLink': false, 'link': '' },
    { 'title': 'GateInitiative website', 'img': '', 'vid': gate, 'isVid': true, 'hasLink': false, 'link': '' },
    { 'title': 'Gallary', 'img': gallaryappimg1, 'vid': '', 'isVid': false, 'hasLink': false, 'link': '' },
    { 'title': 'Gallary', 'img': '', 'vid': gallaryapp1, 'isVid': true, 'hasLink': false, 'link': '' },
    { 'title': 'Abdubel', 'img': abdubelImg1, 'vid': '', 'isVid': false, 'hasLink': false, 'link': '' },
    { 'title': 'Abdubel', 'img': '', 'vid': abdubelVid, 'isVid': true, 'hasLink': false, 'link': '' },
    { 'title': 'Dashboard design', 'img': dashboardimg1, 'vid': '', 'isVid': false, 'hasLink': false, 'link': '' },
    { 'title': 'Dashboard design', 'img': '', 'vid': dashboard1, 'isVid': true, 'hasLink': false, 'link': '' },
    { 'title': 'Dashboard design', 'img': '', 'vid': dashboardVid, 'isVid': true, 'hasLink': false, 'link': '' },
    { 'title': 'Search image pixabay api', 'img': searchimg, 'vid': '', 'isVid': false, 'hasLink': false, 'link': '' },
    { 'title': 'Search image pixabay api', 'img': '', 'vid': searchimgVid, 'isVid': true, 'hasLink': false, 'link': '' },
    { 'title': 'Create character profile', 'img': '', 'vid': uploadchar, 'isVid': true, 'hasLink': false, 'link': '' },
    { 'title': 'Todo web app', 'img': '', 'vid': todoVid, 'isVid': true, 'hasLink': false, 'link': '' },
]