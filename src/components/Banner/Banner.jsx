// import { useState } from 'react';
import banner from '../../assets/banner_bg.jpeg'

import DonationCards from '../DonationCardSection/DonationCards';
import { useState } from 'react';
const Banner = () => {

    const [search, setSearch] = useState('');
    const [selectCategory, setSelectCategory] = useState('')
   
    const handleSearch = () => {
        setSelectCategory(search)
    } 

    return (
        <div>
            <div className='relative'>
                <img src={banner} className='h-[500px] w-[1500px]' alt="" />
                <div className="hero h-full absolute left-0 top-0 bg-white bg-opacity-80" >
                    <div className="hero-content text-center mb-36">
                        <div className="flex flex-col h-[60vh] justify-center">
                            <h1 className="text-2xl md:text-5xl font-bold">I Grow By Helping People In Need</h1>
                            <div className='mt-10'>
                                <input id='search-field' type="text" placeholder="Search here..." className="p-3 md:w-full md:max-w-xs"  style={{ borderRadius: "10px 0 0 10px"}} value={search} onChange={(e)=> setSearch(e.target.value)}/>
                                <button className='bg-[#FF444A] p-3 text-white' style={{borderRadius: "0 10px 10px 0"}} 
                                onClick={handleSearch}
                                >Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DonationCards selectCategory={selectCategory}></DonationCards>
        </div>
    );
};

export default Banner;