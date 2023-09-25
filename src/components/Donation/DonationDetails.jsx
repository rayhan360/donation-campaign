/* eslint-disable react/no-unknown-property */

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const DonationDetails = ({ donate }) => {
    const { id,thumbnail, title, category, card_bg_color, category_bg_color, text_color, price } = donate || {}

    return (
        <div>
            <div style={{ backgroundColor: `${category_bg_color}` }} className="flex max-w-[36rem] flex-row rounded-xl bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={thumbnail}
                        className="h-full"
                    />
                </div>
                <div className="p-6">
                    <button style={{ backgroundColor: `${card_bg_color}`, color: `${text_color}` }} className='px-3 py-1 mb-3 rounded-lg'>{category}</button>

                    <h4 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    <p style={{ color: `${text_color}` }} className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased font-medium">
                        ${price}.00
                    </p>
                    <Link className="inline-block" to={`/donation/${id}`}>
                        <button style={{backgroundColor: `${text_color}`}} className="text-white p-2 rounded-sm">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

DonationDetails.propTypes = {
    donate: PropTypes.object
}

export default DonationDetails;