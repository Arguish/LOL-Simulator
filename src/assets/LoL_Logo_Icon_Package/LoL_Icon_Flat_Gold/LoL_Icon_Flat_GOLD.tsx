const LoLIconFlatGold: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 800"
            {...props}
        >
            <defs>
                <style>{'.cls-1 { fill: #bf913b; }'}</style>
            </defs>
            <g>
                <path
                    className="cls-1"
                    d="M438.14,168A235.31,235.31,0,0,1,580.08,552.7h79.45a299,299,0,0,0,41.4-152.25c0-153.18-114.63-279.58-262.79-298.11Z"
                />
                <path
                    className="cls-1"
                    d="M208.88,631.86V537.33a235.17,235.17,0,0,1,0-273.77V169a300.44,300.44,0,0,0,0,462.83Z"
                />
            </g>
            <polygon
                className="cls-1"
                points="393.14 75 220.98 75 253.88 142.3 253.88 658.33 221.32 724.89 611.49 724.89 647.14 597.7 393.14 597.7 393.14 75"
            />
        </svg>
    );
};

export default LoLIconFlatGold;