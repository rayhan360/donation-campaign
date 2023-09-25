import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PropTypes from 'prop-types';
const CardDetails = ({ detailCard }) => {
    const { id, img, title, description, price, text_color } = detailCard || {}




    const handleAddToDonate = () => {
        const addedDonate = [];

        const donateItems = JSON.parse(localStorage.getItem("donation"));

        if(!donateItems){
            addedDonate.push(detailCard);
            localStorage.setItem("donation", JSON.stringify(addedDonate));

            toast.success("Good Job! Your donation has been successfully")
        }else{
            const isExist = donateItems.find(donate => donate.id === id);

            if(!isExist){
                addedDonate.push(...donateItems, detailCard)
                localStorage.setItem("donation", JSON.stringify(addedDonate));
                toast.success("Good Job! Your donation has been successfully")
            }
        }
    }
    return (
        <div>
            <div className='relative'>
                <img src={img} alt=""  className='h-[600px] w-[1500px]'/>
                <div className='bg-black w-full absolute bottom-0 p-5 bg-opacity-60'>
                    <button onClick={handleAddToDonate} className='rounded-md' style={{backgroundColor: `${text_color}`, color: "white", padding: "8px"}}>Donate ${price}</button>
                </div>
            </div>
            <div className='space-y-5 my-20'>
                <h1 className='font-bold text-3xl'>{title}</h1>
                <p className='text-sm text-gray-600'>{description}</p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

CardDetails.propTypes = {
    detailCard: PropTypes.object
}

export default CardDetails;