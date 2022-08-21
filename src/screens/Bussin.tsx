import { FaBus } from "react-icons/fa";
import { HiChevronLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { tw } from "twind/css";
import { Layout, ProfileSection, SectionContainer } from "../components";

function LightSection() {
  return (
    <>
      <label htmlFor="favcolor">Select your favorite color:</label>
      <input type="color" id="favcolor" name="favcolor" value="#ff0000" />1
      bussin'
      <button
        className={tw`bg-blue-500 hover:bg-blue-700 mt-4  text-white font-bold py-2 px-4 rounded`}
      >
        Change!
      </button>
    </>
  );
}

function OrderSection() {
  return (
    <>
      <label htmlFor="dog-names">
        Choose a refreshment for when you leave the bus:
      </label>
      <select
        className={tw`bg-white font-bold py-2 px-4 rounded`}
        style={{ marginBottom: 4 }}
        name="dog-names"
        id="dog-names"
      >
        <option value="rigatoni">Coke Can (400 Bussin')</option>
        <option value="dave">Muffin (500 Bussin') </option>
        <option value="pumpernickel" selected>
          Sachet of Raro (100 Bussin')
        </option>
        <option value="reeses">Slice of Cheese (50 Bussin')</option>
      </select>
      <p></p>
      <br></br>
      <br></br>
      <button
        className={tw`bg-blue-500 hover:bg-blue-700 mt-4  text-white font-bold py-2 px-4 rounded`}
      >
        Order!
      </button>
    </>
  );
}

function VoteSection() {
  return (
    <>
      <p>Select a music genre:</p>
      <div className={tw`flex justify-center`}>
        <div>
          <div className={tw`form-check`}>
            <input
              className={tw`form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer`}
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label
              className={tw`form-check-label inline-block text-gray-800`}
              htmlFor="flexRadioDefault1"
            >
              Metal (1 Bussin')
            </label>
          </div>
          <div className={tw`form-check`}>
            <input
              className={tw`form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer`}
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label
              className={tw`form-check-label inline-block text-gray-800`}
              htmlFor="flexRadioDefault2"
            >
              Vaporwave (2 Bussin')
            </label>
          </div>
          <div className={tw`form-check`}>
            <input
              className={tw`form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer`}
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
              checked
            />
            <label
              className={tw`form-check-label inline-block text-gray-800`}
              htmlFor="flexRadioDefault3"
            >
              Showtunes (free)
            </label>
          </div>
        </div>
      </div>
      <button
        className={tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-4 px-4 rounded`}
      >
        Vote!
      </button>
    </>
  );
}

export const Section = ({ children, header }: any) => {
  return (
    <div className={tw`bg-white rounded-lg`}>
      <div
        className={tw`font-bold text-xl text-blueGray-700 p-4 border-b border-blueGray-200`}
      >
        {header}
      </div>
      <div className={tw`p-4 flex flex-col`}>{children}</div>
    </div>
  );
};

export const Bussin = () => {
  return (
    <div className={tw` h-full`}>
      <div
        className={tw`bg-white p-4 text-gray-700 justify-center flex flex-row relative`}
      >
        <Link to="/account" className={tw`absolute left-3 top-3`}>
          <HiChevronLeft size={32} />
        </Link>
        <p className={tw` font-semibold`}>Bussin</p>
      </div>
      <div className={tw`px-4 py-6 flex flex-col gap-y-4`}>
        <div
          className={tw`flex flex-row gap-x-2 p-6 bg-white rounded-lg border-b-4 border-blueGray-700 text-blueGray-700 items-center`}
        >
          <FaBus />
          Traveling on bus 777 along route 42
        </div>
        <Section header="Set the mood lighting">
          <LightSection />
        </Section>
        <Section header="Order Refreshment">
          <VoteSection />
        </Section>
        <Section header="Set the mood (music)">
          <OrderSection />
        </Section>
      </div>
    </div>
  );
};
