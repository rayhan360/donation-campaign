
import PropTypes from 'prop-types';
const CardDetails = ({ detailCard }) => {
    const { img, title, description, price, text_color } = detailCard || {}
    return (
        <div>
            <div className='relative'>
                <img src={img} alt=""  className='h-[600px] w-[1500px]'/>
                <div className='bg-black w-full absolute bottom-0 p-5 bg-opacity-60'>
                    <button className='rounded-md' style={{backgroundColor: `${text_color}`, color: "white", padding: "8px"}}>Donate ${price}</button>
                </div>
            </div>
            <div className='space-y-5 my-20'>
                <h1 className='font-bold text-3xl'>{title}</h1>
                <p className='text-sm text-gray-600'>{description}</p>
            </div>
        </div>
    );
};

CardDetails.propTypes = {
    detailCard: PropTypes.object
}

export default CardDetails;