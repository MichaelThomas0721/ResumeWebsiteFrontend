export default function Project(props) {
    return (
        <div>
            <h1 className="text-lg font-semibold">
                {props.title}
            </h1>
            <h2 className="font-light text-sm text-zinc-400">
                {props.date}
            </h2>
            <p className="text-zinc-600">
                {props.description}
            </p>
            <p className="mt-2 text-sm text-zinc-500">
                {props.technologies}
            </p>
        </div>
    );
}