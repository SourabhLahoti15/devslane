import "./App.css";
import HappyIncrementor from "./HappyIncrementor";
import HappyTracker from "./HappyTracker";
import SadIncrementor from "./SadIncrementor";
import SadTracker from "./SadTracker";

function App() {
    return (
        <div className="space-y-2 m-4">
            <HappyTracker />
            <SadTracker />
            <HappyIncrementor />
            <SadIncrementor />
        </div>
    );
}

export default App;
