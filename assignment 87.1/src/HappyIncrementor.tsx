import { memo, type FC } from "react";
import { useDispatch } from "react-redux";
import { happyButtonClicked } from "./action";

type HappyIncrementorType = {};

const HappyIncrementor: FC<HappyIncrementorType> = (props) => {
    const dispatch = useDispatch();
    function increment() {
        dispatch(happyButtonClicked); 
    }

    return (
        <div>
            <h3>Are you happy?</h3>
            <button onClick={increment} className="bg-orange-700 text-white p-2 rounded">yes</button>
        </div>
    );
};

export default memo(HappyIncrementor);
