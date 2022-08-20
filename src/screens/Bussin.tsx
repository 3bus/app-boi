import { tw } from "twind/css";
import { Layout, ProfileSection, SectionContainer } from "../components";

function LightSection() {
  return (
    <div className={tw`flex flex-col  p-6 bg-white	 rounded-lg`}>
      <b>Set the mood lighting</b>
      <label htmlFor="favcolor">Select your favorite color:</label>
      <input type="color" id="favcolor" name="favcolor" value="#ff0000" />1
      bussin'
      <button
        className={tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
      >
        Change!
      </button>
    </div>
  );
}

function OrderSection() {
  return (
    <div className={tw`flex flex-col  p-6 bg-white	 rounded-lg`}>
      <b>Order Refreshment</b>
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
        className={tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
      >
        Order!
      </button>
    </div>
  );
}

function VoteSection() {
  return (
    <div className={tw`flex flex-col  p-6 bg-white	 rounded-lg`}>
      <b>Set the mood (music)</b>
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
        className={tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
      >
        Vote!
      </button>
    </div>
  );
}

export const Bussin = () => {
  return (
    <Layout hasSearch={false}>
      You are traveling on bus 777 on route 42
      <SectionContainer>
        <LightSection />
      </SectionContainer>
      <SectionContainer>
        <VoteSection />
      </SectionContainer>
      <SectionContainer>
        <OrderSection />
      </SectionContainer>
    </Layout>
  );
};
