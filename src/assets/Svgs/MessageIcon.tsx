const MessageIcon = ({ isActive }: { isActive: boolean }) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 1.23535H18.5C19.1582 1.23535 19.7002 1.77737 19.7002 2.43555V14.4355C19.7002 15.0937 19.1582 15.6357 18.5 15.6357H4.16895L1.2998 18.5049V2.43555C1.2998 1.77737 1.84183 1.23535 2.5 1.23535Z"
        fill={isActive ? "#1D4676" : "#1D4676"}
        fillOpacity="0.3"
        stroke="#1D4676"
        strokeWidth="1.6"
      />
    </svg>
  );
};

export default MessageIcon;
