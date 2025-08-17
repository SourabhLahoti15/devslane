import { memo, type FC } from "react";
import { useDispatch } from "react-redux";
import { sadButtonClicked } from "./action";

type SadIncrementorType = {};

const SadIncrementor: FC<SadIncrementorType> = (props) => {
    const dispatch = useDispatch();
    function increment() {
        dispatch(sadButtonClicked);
    }

    return (
        <div>
            <h3>Are you sad?</h3>
            <button onClick={increment} className="bg-blue-700 text-white p-2 rounded">yes</button>
        </div>
    );
};

export default memo(SadIncrementor);