const SpeakerIcon = ({ isActive }: { isActive: boolean }) => {
  return (
    <svg
      width="20"
      height="17"
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="16"
        y="8"
        width="4"
        height="2"
        fill={isActive ? "#11AC57" : "#B1B7CC"}
      />
      <rect
        x="15.1765"
        y="13"
        width="4"
        height="2"
        transform="rotate(36.0338 15.1765 13)"
        fill={isActive ? "#11AC57" : "#B1B7CC"}
      />
      <rect
        x="14.0042"
        y="3.39453"
        width="4"
        height="2"
        transform="rotate(-36.9547 14.0042 3.39453)"
        fill={isActive ? "#11AC57" : "#B1B7CC"}
      />
      <path
        d="M12 12.5V5.5C12.5 6 13.5 7.4 13.5 9C13.5 10.6 12.5 12 12 12.5Z"
        fill={isActive ? "#11AC57" : "#B1B7CC"}
      />
      <path
        d="M0 8C0 6.89543 0.895431 6 2 6H6V12H2C0.89543 12 0 11.1046 0 10V8Z"
        fill={isActive ? "#11AC57" : "#B1B7CC"}
      />
      <rect
        x="3"
        y="12"
        width="2"
        height="4"
        fill={isActive ? "#11AC57" : "#B1B7CC"}
      />
      <path
        d="M11 15L6 12V6L11 3V15Z"
        fill={isActive ? "#11AC57" : "#B1B7CC"}
      />
    </svg>
  );
};

export default SpeakerIcon;
