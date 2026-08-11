function Card({ title, children }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
            <div>{children}</div>
        </div>
    );
}

export default Card;