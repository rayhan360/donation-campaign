import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <div className="flex flex-col gap-10 justify-center items-center h-[600px]">
            <p className="text-5xl">Ooppppsss !!!!!</p>
            <h1 className="text-5xl"> Page Not Found</h1>
            <Link className="btn" to="/">go back</Link>
        </div>
        </div>
    );
};

export default ErrorPage;