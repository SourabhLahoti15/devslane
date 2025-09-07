import { ImSpinner9 } from "react-icons/im";

function Loading() {
  return (
    <div className="flex items-center justify-center">
      <ImSpinner9 className="text-3xl animate-spin text-black" />
    </div>
  );
}
export default Loading;
