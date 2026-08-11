function TailwindCard({ title, children }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
            <div className="text-gray-600">{children}</div>
        </div>
    );
}

export default TailwindCard;