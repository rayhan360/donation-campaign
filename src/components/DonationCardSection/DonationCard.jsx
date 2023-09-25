import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const DonationCard = ({ item }) => {
    const {id, img, title, category, category_bg_color, card_bg_color, text_color } = item || {}
    return (
        <Link to={`/donation/${id}`}>
            <div className={`relative flex max-w-[24rem] flex-col rounded-xl bg-white  shadow-md`} style={{backgroundColor: `${category_bg_color}`}}>
                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img
                        src={img}
                        alt="ui/ux review check"
                        className='w-full'
                    />
                </div>
                <div className="p-6">
                    <button style={{backgroundColor: `${card_bg_color}`, color: `${text_color}`}} className='px-3 py-1 mb-3 rounded-lg'>{category}</button>
                    <h4 className={`font-sans text-xl font-semibold`} style={{color: `${text_color}`}}>
                        {title}
                    </h4>
                </div>

            </div>
        </Link>
    );
};

DonationCard.propTypes = {
    item: PropTypes.object.isRequired
}

export default DonationCard;