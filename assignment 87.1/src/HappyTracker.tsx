import { memo, type FC } from "react";
import { useSelector } from "react-redux";
import { happyCountSelector } from "./Selectors";

type HappyTrackerProps = {};

const HappyTracker: FC<HappyTrackerProps> = (props) => {
    const happyCount = useSelector(happyCountSelector);
    return <div className="bg-orange-700 text-white p-2">You were happy {happyCount} times</div>;
};

export default memo(HappyTracker);
