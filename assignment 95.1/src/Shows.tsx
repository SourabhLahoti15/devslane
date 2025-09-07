import ShowCard from "./ShowCard";
import { connect, type ConnectedProps } from "react-redux";
import { QuerySelector, ShowsSelector } from "./selectors/Selector";
import type { State } from "./store";

type ShowsProps = ReduxProps;

function Shows({ shows }: ShowsProps) {
    return (
        <div className="grid grid-cols-3 gap-4 max-w-6xl m-auto">
            {shows &&
                shows.map((show) => <ShowCard key={show.id} show={show} />)}
        </div>
    );
}

const mapStateToProps = (state: State) => {
    return {
        query: QuerySelector(state),
        shows: ShowsSelector(state),
    };
};

const connector = connect(mapStateToProps, undefined);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(Shows);
