import img1 from '../../assets/images/banner/1.jpg';
import img2 from '../../assets/images/banner/2.jpg';
import img3 from '../../assets/images/banner/3.jpg';
import img4 from '../../assets/images/banner/4.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full my-12 rounded-xl">
            <div id="slide1" className="carousel-item relative w-full h-[600px]">
                <img src={img1} className="w-full" />
                <div className='absolute h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-2/3 flex items-center top-0 left-0'>
                    <div className='text-white space-y-5 p-5 pl-10'>
                        <h2 className='text-5xl font-bold'>Car Repair with us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni unde in atque culpa, sint earum debitis labore repellat nostrum, tenetur eius provident facere animi tempore, officiis assumenda ratione qui vel veniam eum nobis harum hic corporis? Explicabo officiis eius nisi.</p>
                        <button className='btn btn-primary'>Get Started</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 bottom-10  transform  right-10 ">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className='absolute bg-gradient-to-r from-gray-900 to-[rgba(21, 21, 21, 0.00)] h-full flex items-center '>
                    <div className='text-white space-y-5 pl-10 w-2/3'>
                        <h2 className='text-5xl font-bold'>Car Repair with us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni unde in atque culpa, sint earum debitis labore repellat nostrum, tenetur eius provident facere animi tempore, officiis assumenda ratione qui vel veniam eum nobis harum hic corporis? Explicabo officiis eius nisi.</p>
                        <button className='btn btn-primary'>Get Started</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 bottom-10  transform  right-10">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className='absolute h-full flex items-center bg-gradient-to-r from-gray-900 to-[rgba(21, 21, 21, 0.00)]'>
                    <div className='text-white space-y-5 pl-12 w-2/3'>
                        <h2 className='text-5xl font-bold'>Car Repair with us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni unde in atque culpa, sint earum debitis labore repellat nostrum, tenetur eius provident facere animi tempore, officiis assumenda ratione qui vel veniam eum nobis harum hic corporis? Explicabo officiis eius nisi.</p>
                        <button className='btn btn-primary'>Get Started</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 bottom-10  transform  right-10">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute flex justify-end gap-5 bottom-10  transform  right-10">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;