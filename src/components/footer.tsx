import {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSquareInstagram, faLinkedin, faSquareFacebook} from '@fortawesome/free-brands-svg-icons'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'

function Footer() {
  const [language, setLanguage] = useState('English')

  const toggleLanguage = () => {
    setLanguage(language === 'English' ? 'Français' : 'English')
  }

  const currentYear = new Date().getFullYear()

  return (
    <div className="mt-20">
      <div className="grid grid-cols-4 text-[25px]">
        <div>
          <h1 className="brand">AdSpot</h1>
          <div className="pb-4 text-[black] flex space-x-6">
            <FontAwesomeIcon
              icon={faSquareInstagram}
              size="lg"
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              size="lg"
            />
            <FontAwesomeIcon
              icon={faSquareFacebook}
              size="lg"
            />
          </div>
          <button
            className="bg-purple text-[white] rounded-lg pl-6 pr-4 py-1 mt-3"
            onClick={toggleLanguage}
          >
            {language}
            <FontAwesomeIcon
              icon={faChevronDown}
              size="xs"
              className="pl-4"
            />
          </button>
        </div>
        <div className=" grid grid-cols-3 col-span-3 gap-4">
          <p>Post a promo</p>
          <p>Payment info</p>
          <p>Lorem ipsum</p>
          <p>Search promos</p>
          <p>Help</p>
          <p>Lorem ipsum</p>
          <p>Messages</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Your profile</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
        </div>
      </div>
      <p className="text-center mt-10">© {currentYear} AdSpot. All rights reserved.</p>
    </div>
  )
}

export default Footer
