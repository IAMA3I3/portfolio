import htmlIcB from '../assets/htmlc.png'
import htmlIcW from '../assets/htmlcW.png'
import cssIcW from '../assets/cssW.png'
import cssIcB from '../assets/css.png'
import jsIcW from '../assets/jsW.png'
import jsIcB from '../assets/js.png'
import phpIcW from '../assets/phpW.png'
import phpIcB from '../assets/php.png'
import reactIcW from '../assets/reactW.png'
import reactIcB from '../assets/react.png'
import phpmyadminIcW from '../assets/phpmyadminW.png'
import phpmyadminIcB from '../assets/phpmyadmin.png'
import tailwindIcW from '../assets/tailwindW.png'
import tailwindIcB from '../assets/tailwind.png'
import Skill from './Skill'

const Skills = ({ darkMode }) => {

    const skillMap = skillsList.map((item, index) => (
        <div key={index} className="">
            <Skill item={item} darkMode={darkMode} />
        </div>
    ))

    return (
        <div className=' flex justify-center flex-wrap gap-10'>
            {skillMap}
        </div>
    )
}

export default Skills

const skillsList = [
    { 'id': 0, 'title': 'HTML', 'imgB': htmlIcB, 'imgW': htmlIcW },
    { 'id': 1, 'title': 'CSS', 'imgB': cssIcB, 'imgW': cssIcW },
    { 'id': 2, 'title': 'JavaScript', 'imgB': jsIcB, 'imgW': jsIcW },
    { 'id': 3, 'title': 'PHP', 'imgB': phpIcB, 'imgW': phpIcW },
    { 'id': 4, 'title': 'React Js', 'imgB': reactIcB, 'imgW': reactIcW },
    { 'id': 5, 'title': 'Tailwind CSS', 'imgB': tailwindIcB, 'imgW': tailwindIcW },
    { 'id': 6, 'title': 'PhpMyAdmin', 'imgB': phpmyadminIcB, 'imgW': phpmyadminIcW }
]