import type { Show } from "./models/Show";
import { Link } from "react-router-dom";

type ShowCardProps = {
    show: Show;
};

function ShowCard({ show }: ShowCardProps) {
    return (
        <Link to={`/show/${show.id}`}>
            <div className="border border-gray-500 rounded-md">
                <img
                    src={show.image?.medium || show.image?.original}
                    alt="show img"
                    className="object-cover object-center bg-slate-400 w-full h-72 rounded-t-md"
                />
                <div>
                    <h2 className="text-3xl font-semibold line-clamp-1 min-h-[1rem]">{show.name}</h2>
                    <p className="line-clamp-4 min-h-[6rem]" dangerouslySetInnerHTML={{__html: show.summary || ""}}></p>
                </div>
            </div>
        </Link>
    );
}

export default ShowCard;
