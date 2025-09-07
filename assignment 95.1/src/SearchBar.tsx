import { QueryChangeAction } from "./actions/QueryAction";
import { connect, type ConnectedProps } from "react-redux";
import { LoadingSelector, QuerySelector } from "./selectors/Selector";
import type { State } from "./store";
import Loading from "./Loading";

type SearchBarProps = ReduxProps;

function SearchBar({ query, QueryChangeAction, loading }: SearchBarProps) {
    return (
        <div className="flex items-center">
            <input
                type="text"
                value={query}
                placeholder="Search..."
                className="border-2 border-gray-500 w-full text-lg m-2 px-2 py-1 rounded-full"
                onChange={(event) => {
                    QueryChangeAction(event.target.value);
                }}
            />
            {loading && <Loading />}
        </div>
    );
}

const mapStateToProps = (state: State) => {
    return { query: QuerySelector(state), loading: LoadingSelector(state) };
};

const mapDispatchToProps = {
    QueryChangeAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(SearchBar);