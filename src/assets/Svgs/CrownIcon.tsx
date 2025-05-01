const CrownIcon = ({ isActive }: { isActive: boolean }) => {
  return (
    <svg
      width="32"
      height="25"
      viewBox="0 0 32 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_16080_4341)">
        <path
          d="M16.0352 8.7168L16.0674 8.7373L22.1992 14.5303C22.6556 14.9614 23.2936 15.1382 23.9023 15.0078L24.0234 14.9775L27.9727 13.8564C28.0364 13.8383 28.0995 13.8859 28.0996 13.9521V23.4355C28.0996 23.4908 28.0552 23.5352 28 23.5352H4C3.94477 23.5352 3.90039 23.4908 3.90039 23.4355V13.96C3.90039 13.9102 3.9357 13.8703 3.98047 13.8613L4.02734 13.8633L7.9248 14.9922C8.52981 15.1673 9.17924 15.03 9.66113 14.6328L9.75586 14.5498L15.9307 8.7373C15.9595 8.71026 16.0003 8.70322 16.0352 8.7168Z"
          fill={isActive ? "#11AC57" : "#B0B7CC"}
          stroke="#000"
          strokeWidth="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16 2.74707C16.882 2.74711 17.5898 3.45733 17.5898 4.3252C17.5898 5.19314 16.8821 5.90425 16 5.9043C15.1179 5.9043 14.4102 5.19316 14.4102 4.3252C14.4102 3.4573 15.1179 2.74707 16 2.74707Z"
          fill={isActive ? "#11AC57" : "#B0B7CC"}
          stroke="#000"
          strokeWidth="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.90332 8.1416C3.78536 8.14165 4.49307 8.85186 4.49316 9.71973C4.49316 10.5877 3.78542 11.2988 2.90332 11.2988C2.02118 11.2988 1.31348 10.5877 1.31348 9.71973C1.31357 8.85183 2.02124 8.1416 2.90332 8.1416Z"
          fill={isActive ? "#11AC57" : "#B0B7CC"}
          stroke="#000"
          strokeWidth="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M29.0967 8.1416C29.9787 8.14165 30.6864 8.85186 30.6865 9.71973C30.6865 10.5877 29.9788 11.2988 29.0967 11.2988C28.2145 11.2988 27.5068 10.5877 27.5068 9.71973C27.5069 8.85183 28.2146 8.1416 29.0967 8.1416Z"
          fill={isActive ? "#11AC57" : "#B0B7CC"}
          stroke="#000"
          strokeWidth="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_16080_4341">
          <rect
            width="32"
            height="24"
            fill="white"
            transform="translate(0 0.435547)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CrownIcon;
