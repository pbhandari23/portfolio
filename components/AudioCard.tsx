export default function AudioCard({
    title,
    src,
}: { title: string; src: string }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-black/[0.02] p-4">
            <div className="mb-2 text-sm text-zinc-200">{title}</div>
            <audio
                controls
                preload="none"
                controlsList="nodownload"
                className="w-full"
                src={src}
                style={{ colorScheme: "dark" }}
            >
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}