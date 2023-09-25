import { useEffect, useState } from "react";
import DonationDetails from "./DonationDetails";




const Donation = () => {
    const [donate, setDonate] = useState([])
    const [showBtn, setShowBtn] = useState(4)
    const [notData, setNotData] = useState(false)
    console.log(donate.length);

    useEffect(() => {
        const donateItems = JSON.parse(localStorage.getItem("donation"));

        if (donateItems) {
            setDonate(donateItems)
        } else {
            setNotData("No Data Found")
        }

    }, [])
    return (
        <div>
            {
                notData ? (<p className="h-[80vh] flex justify-center items-center text-bold text-3xl">{notData}</p>)
                    : (
                        <div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                {
                                    donate.slice(0, showBtn).map(donate => <DonationDetails key={donate.id} donate={donate}></DonationDetails>)
                                }
                            </div>
                            <div className={showBtn < donate.length ? 'block' : 'hidden'}>
                                <div className="text-center mt-5">
                                    <button onClick={() => setShowBtn(donate.length)}
                                        className="bg-[#009444] text-white px-5 py-2 mb-3 rounded-sm">
                                        view all
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    );
};

export default Donation;