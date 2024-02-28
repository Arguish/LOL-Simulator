const Icon = ({
    text,
    color = 'var(--text)',
    size = 27
}: {
    text: string;
    color?: string;
    size?: number;
}): JSX.Element => {
    return (
        <span
            style={{
                color,
                padding: '3px',
                margin: '0px 8px',
                fontSize: `${size}px`
            }}
            className="material-symbols-rounded"
        >
            {text}
        </span>
    );
};

export default Icon;
