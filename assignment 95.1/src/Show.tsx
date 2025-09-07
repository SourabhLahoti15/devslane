import React, { useEffect, type FC } from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
// import CastCard from "../Components/CastCard";
// import GenrePill from "../Components/GenrePill";
import withRouter, { type WithRouterProps } from "./hoc/withRouter";
import { connect, type ConnectedProps } from "react-redux";
import type { State } from "./store";
import { ShowsMapSelector } from "./selectors/Selector";
import GenrePill from "./GenrePill";
import { LoadShowAction } from "./actions/ShowAction";
import Loading from "./Loading";

type ShowProps = ReduxProps & WithRouterProps;

const Show: FC<ShowProps> = ({ params, show, LoadShowAction }) => {
    
    useEffect(() => {
        LoadShowAction(+params.showid)
    }, [params.showid])

    if (!show) {
        return <Loading />
    }

    return (
        <div className="mt-2">
            <Link
                to="/"
                className="flex items-center justify-center px-2 py-1 w-fit border border-gray-500 rounded"
            >
                <IoArrowBack className="text-2xl " />
            </Link>
            <h2 className="text-4xl font-semibold tracking-wide">
                {show.name}
            </h2>
            <div className="flex space-x-3 my-2 bg-gray-300 p-2 rounded-sm">
                {show.genres.map((genre) => (
                    <GenrePill name={genre} key={genre} />
                ))}
            </div>
            <div className="mt-2 flex">
                <img
                    src={show.image?.medium || show.image?.original}
                    alt=""
                    className="object-cover object-center w-full rounded-t-md h-72"
                />
                <div className="ml-2">
                    {/* <p>{show.summary}</p> */}
                    <p dangerouslySetInnerHTML={{__html: show.summary || ""}}></p>
                    <p className="mt-2 text-lg font-bold border border-gray-700 rounded-md px-2 py-1 max-w-max">
                        Rating:{" "}
                        <span className="text-gray-700">
                            {show.rating.average}/10
                        </span>
                    </p>
                </div>
            </div>

            <div className="mt-2">
                <h4 className="text-2xl font-semibold tracking-wide">Cast</h4>
                {/* <div className="flex flex-wrap">
                    <CastCard
                        avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
                        name="Henry Cavill"
                    />
                    <CastCard
                        avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
                        name="Freya Allan"
                    />
                    <CastCard
                        avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
                        name="Anya Chalotra"
                    />
                    <CastCard
                        avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
                        name="Mimi Ndiweni"
                    />
                    <CastCard
                        avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
                        name="Henry Cavill"
                    />
                    <CastCard
                        avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
                        name="Freya Allan"
                    />
                    <CastCard
                        avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
                        name="Anya Chalotra"
                    />
                    <CastCard
                        avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
                        name="Mimi Ndiweni"
                    />
                    <CastCard
                        avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
                        name="Henry Cavill"
                    />
                    <CastCard
                        avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
                        name="Freya Allan"
                    />
                    <CastCard
                        avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
                        name="Anya Chalotra"
                    />
                    <CastCard
                        avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
                        name="Mimi Ndiweni"
                    />
                </div> */}
            </div>
        </div>
    );
};

const mapStateToProps = (state: State, withRouter: WithRouterProps) => {
    return {
        show: ShowsMapSelector(state)[+withRouter.params.showid],
    };
};

const mapDispatchToProps = {
    LoadShowAction
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default withRouter(connector(Show));
