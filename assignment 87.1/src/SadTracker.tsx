import { memo, type FC } from "react";
import { useSelector } from "react-redux";
import { sadCountSelector } from "./Selectors";

type SadTrackerProps = {};

const SadTracker: FC<SadTrackerProps> = () => {
    const sadCount = useSelector(sadCountSelector);
    return <div className="bg-blue-700 text-white p-2">You were sad {sadCount} times</div>;
};

export default memo(SadTracker);
