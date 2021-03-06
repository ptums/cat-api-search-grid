/**
 *  This component displays an animated loader icon when waiting for the API call to finish
 */
import PulseLoader from "react-spinners/PulseLoader";

const Loader = () => (
  <div className="h-screen w-full flex flex-col justify-center	items-center">
    <PulseLoader speedMultiplier={.8} color="#f59e0b" />
  </div>
)

export default Loader;