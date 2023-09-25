import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";
import PropTypes from 'prop-types';

const DonationCards = ({selectCategory}) => {
    const [donationCard, setDonationCard] = useState([])

    useEffect(() => {
        fetch('/donation.json')
            .then(res => res.json())
            .then(data => setDonationCard(data))
    }, []);

    const filterCards = selectCategory ? donationCard.filter(item => item.category === selectCategory)
    : donationCard;

    return (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 lg:grid-cols-4">
            {
                filterCards.map(item => <DonationCard key={item.id} item={item}></DonationCard>)
            }
        </div>
    );
};

DonationCards.propTypes = {
    selectCategory: PropTypes.string
}

export default DonationCards;