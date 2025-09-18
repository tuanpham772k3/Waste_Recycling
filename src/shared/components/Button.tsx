type ButtonProps = {
    label: string;
    onClick: () => void;
};

const Button = ({ label, onClick }: ButtonProps) => {
    return (
        <button
            style={{
                background: "#2c7a7b",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "6px",
                cursor: "pointer",
            }}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
