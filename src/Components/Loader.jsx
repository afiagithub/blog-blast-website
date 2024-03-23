import { ScaleLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <ScaleLoader size={100} color="purple"></ScaleLoader>            
        </div>
    );
};

export default Loader;