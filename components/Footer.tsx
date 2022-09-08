import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faFacebookF,
    faTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return (
        <footer className="flex justify-center p-10 md:justify-end">
            <div className="flex flex-row space-x-5">
                <button className="text-white rounded-full w-5 h-5 text-xs outline outline-1">
                    <FontAwesomeIcon
                        icon={faFacebookF}
                        className="text-white"
                    />
                </button>
                <button className="text-white rounded-full w-5 h-5 text-xs outline outline-1">
                    <FontAwesomeIcon icon={faTwitter} className="text-white" />
                </button>
                <button className="text-white rounded-full w-5 h-5 text-xs outline outline-1">
                    <FontAwesomeIcon
                        icon={faInstagram}
                        className="text-white"
                    />
                </button>
            </div>
        </footer>
    )
}

export default Footer
