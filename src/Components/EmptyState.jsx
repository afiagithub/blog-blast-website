import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const EmptyState = ({ msg, address, label }) => {
    return (
        <div className="min-h-[calc(100vh-148px)] flex flex-col justify-center items-center gap-4">
            <h2>{msg}</h2>
            <Link to={address} className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">{label}</span>
            </Link>
        </div>
    );
};

EmptyState.propTypes = {
    msg: PropTypes.string,
    address: PropTypes.string,
    label: PropTypes.string
}

export default EmptyState;