export default function Title({ title }: { title: string }) {
    return (
        <h2 className="text-3xl font-medium text-center mt-10">
            {title}
        </h2>
    )
}