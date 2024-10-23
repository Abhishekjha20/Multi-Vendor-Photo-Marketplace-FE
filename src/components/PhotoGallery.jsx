import Pic1 from "../assets/Pic1.jpg"
const PhotoGallery = () => {
    return (
        <div className="my-20 bg-white flex flex-col justify-center items-center">
            <h3 className="tex-3xl font-semibold my-14"> photo </h3>

            {/* All my photos listed in inside this div */}
            <div>

                {/* Image Card */}
                <div>
                    <img
                        src={Pic1}
                        alt="Photo"
                        className="w-full h-full hover:scale-105 transition-all ease-linear duration-300 transform cursor-pointer" />
                </div>

            </div>
        </div>
    )
}

export default PhotoGallery