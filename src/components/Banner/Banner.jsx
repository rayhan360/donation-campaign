import banner from '../../assets/banner_bg.jpeg'
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div className='relative'>
                <img src={banner} className='h-[500px] w-[1500px]' alt="" />
                <div className="hero h-full absolute left-0 top-0 bg-white bg-opacity-80" >
                    <div className="hero-content text-center mb-36">
                        <div className="">
                            <h1 className="text-5xl font-bold">I Grow By Helping People In Need</h1>
                            <div className='mt-10'>
                                <input type="text" placeholder="Search here..." className="p-3 w-full max-w-xs"  style={{ borderRadius: "10px 0 0 10px"}}/>
                                <button className='bg-[#FF444A] p-3 text-white' style={{borderRadius: "0 10px 10px 0"}}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;