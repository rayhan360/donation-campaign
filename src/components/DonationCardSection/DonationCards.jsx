import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const DonationCards = () => {
    const [donationCard, setDonationCard] = useState([])

    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setDonationCard(data))
    }, [])

    return (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 lg:grid-cols-4">
            {
                donationCard.map(item => <DonationCard key={item.id} item={item}></DonationCard>)
            }
        </div>
    );
};

export default DonationCards;