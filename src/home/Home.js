import { useState } from "react";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-black bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: 'url("/test-1.jpg")',
      }}
    >
      {/* <div className="mb-28 rounded-lg shadow-lg absolute text-4xl font-serif tracking-wider text-green-300">JOIN US IF YOU ARE DARE...!</div> */}
      <div className="p-8 rounded-lg shadow-lg absolute">
        <h1 className="text-4xl font-extrabold text-[#a8ba9a] mb-4 font-rampart">
          <span className="text-center block font-Algerian pb-3">
            You're Invited to a Spooktacular Night!
          </span>
        </h1>
        <div className="flex font-serif tracking-wider text-white justify-center">
          <div className="border-r-2 text-4xl px-4 leading-10 leading-normal ">
            October
            <br /> 31st,
            <br /> 2023
          </div>
          <div>
            {" "}
            <p className="text-gray-300 mb-2 p-2">🌙 7:00 PM onwards</p>
            <p className="text-gray-300 mb-2 p-2">
              🏚️ Party House, <br /> &nbsp;&nbsp;&nbsp;1313 Salem Circle
            </p>
            <p className="text-gray-300 mb-2 p-2">🎃 SPOOKEY@GMAIL.COM</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={() => {
              setOpen(true);
            }}
            className="bg-orange-500 text-black px-4 py-2 rounded-lg hover:bg-orange-600 mt-6"
          >
            👻 RSVP
          </button>
          {open && (
            <div
              id="defaultModal_1"
              aria-hidden="true"
              className="flex
        overflow-y-auto overflow-x-hidden
        fixed
        justify-center
        items-center
        h-modal
        md:h-full md:inset-0
      "
            >
              <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
                <div className="relative bg-black rounded-lg shadow dark:bg-black text-center" >
                  <div
                    className="
              flex
              justify-between
              text-center
              p-5
              rounded-t
              dark:border-gray-600
            "
                  >
                    <h3
                      className="
                text-xl
                font-semibold
                text-white
                lg:text-2xl
                dark:text-white
              "
                    >
                      HAPPY HALLOWEEN
                    </h3>
                    <button
                      type="button"
                      className="
                text-white
                bg-transparent
                hover:bg-gray-200 hover:text-gray-900
                rounded-lg
                text-sm
                p-1.5
                ml-auto
                inline-flex
                items-center
                dark:hover:bg-gray-600 dark:hover:text-white
              "
                      data-modal-toggle="defaultModal_1"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  <div className="p-6 space-y-6 ">
                    <p className="text-white">
                      "Magic is really very simple, all you've got to do is want something and then let yourself have it."
                    </p>
                    <p className="text-white">—Aggie Cromwell</p>
                  </div>

                  <div
                    className="
              flex
              items-center
              p-6
              space-x-2
              rounded-b
              dark:border-gray-600
            "
                  >
                    <button
                      data-modal-toggle="defaultModal_1"
                      type="button"
                      className="
                text-black
                bg-[#ace894]
               
                focus:ring-4 focus:ring-blue-300
                font-medium
                rounded-lg
                text-sm
                px-5
                py-2.5
                text-center
               
              "
                      onClick={() => { setOpen(false) }}
                    >
                      Confirmed
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;