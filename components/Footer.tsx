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
                <button className="text-white rounded-full w-5 h-5 text-xs outline outline-1 hover:text-softMagenta">
                    <FontAwesomeIcon icon={faFacebookF} />
                </button>
                <button className="text-white rounded-full w-5 h-5 text-xs outline outline-1 hover:text-softMagenta">
                    <FontAwesomeIcon icon={faTwitter} />
                </button>
                <button className="text-white rounded-full w-5 h-5 text-xs outline outline-1 hover:text-softMagenta">
                    <FontAwesomeIcon icon={faInstagram} />
                </button>
            </div>
        </footer>
    )
}

export default Footer
