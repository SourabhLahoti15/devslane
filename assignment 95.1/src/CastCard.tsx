type CastCardProps = {
    name: string;
    image: string;
};

function CastCard({ name, image }: CastCardProps) {
    return (
        <div className="border border-gray-500">
            <img src={image} alt={name} />
            <p>{name}</p>
        </div>
    );
}

export default CastCard;