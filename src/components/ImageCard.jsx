import PropTypes from 'prop-types';
const ImageCard = ({id, image, title, price, author, icon1, icon2}) => {
    return (
        <div className="rounded-lg bg-white shadow-lg p-2">
            <div className="w-full h-[200px] overflow-hidden rounded-2xl">
                <img
                    src={image}
                    alt="Photo"
                    className="w-full h-full hover:scale-105 transition-all ease-linear duration-300 transform cursor-pointer" />
            </div>
            <p className="font-semibold text-white bg-black w-fit px-5 py-1 rounded-full text-sm mt-3">{author}</p>
            <div className="flex justify-between items-center mt-2 ">
                <div>
                    <h3 className="tex-lg font-semibold">{title}</h3>
                    <p className="text-gray-500">Price: ${price}</p>
                </div >
                <div className="flex gap-5 justify-center items-center">
                    <div className="text-2xl text-black cursor-pointer hover:scale-110  transition-all ease-linear duration-300"> {icon1}</div>
                    <div className="text-2xl text-reds-500 cursor-pointer hover:scale-110  transition-all ease-linear duration-300">{icon2}</div>
                </div>
            </div>
        </div>
    )
};

ImageCard.propTypes = {
    id : PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    icon1: PropTypes.string.isRequired,
    icon2:PropTypes.string.isRequired
}
export default ImageCard;