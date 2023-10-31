const Home1 = ({ onBack }) => {
    const handleBack = () => {
        onBack(false);
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-white bg-cover bg-no-repeat bg-center"
            style={{
                backgroundImage: 'url("/test-4.jpg")',
            }}
        >
            <div className="p-8 rounded-lg shadow-lg absolute bg-black bg-opacity-75">
                <h1 className="text-4xl font-extrabold text-[#ff7900] mb-4 ">
                    <span className="text-center block font-frijole pb-3">
                        Join Our Spooky Night...!
                    </span>
                </h1>
                <h1 className="text-4xl font-extrabold text-[#ace894] mb-4">
                    <span className="text-center block font-creepy pb-3 font-thin">
                        HAUNTED HOUSE
                    </span>
                </h1>

                <div className="flex font-mania tracking-wider text-white justify-center">
                    <div className="border-r-2 text-4xl px-4 leading-10 leading-normal ">
                        October
                        <br /> 31st,
                        <br /> 2023
                    </div>
                    <div>
                        <p className="text-gray-300 mb-2 p-2">🌙 7:00 PM onwards</p>
                        <p className="text-gray-300 mb-2 p-2">
                            🏚️ Party House, <br /> &nbsp;&nbsp;&nbsp;1313 Salem Circle
                        </p>
                        <p className="text-gray-300 mb-2 p-2">🎃 SPOOKEY@GMAIL.COM</p>
                    </div>
                </div>
                <div>
                    <br />
                    <h1 className="text-xl text-[#ffc15e] mb-4">
                        <span className=" block font-Algerian pb-3">
                        Your key to a night of eerie enchantment !
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Home1;
