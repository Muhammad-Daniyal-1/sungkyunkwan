const SpeakerIcon = ({ isActive }: { isActive: boolean }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_16080_8229)">
                <path d="M19 18.5996L18.998 18.6016C18.4732 18.2085 17.9186 17.7941 17.3984 17.4062C17.3997 17.4046 17.4011 17.403 17.4023 17.4014C17.921 17.7907 18.4746 18.2057 19 18.5996ZM12 16.2334L8.51465 14.1426L8.27734 14H4C3.45228 14 3 13.5477 3 13V11C3 10.4523 3.45228 10 4 10H8.27734L8.51465 9.85742L12 7.76562V16.2334Z" fill={isActive ? "#11AC57" : "#B0B7CC"} stroke={isActive ? "#11AC57" : "#B0B7CC"} strokeWidth="2" />
            </g>
            <defs>
                <clipPath id="clip0_16080_8229">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}

export default SpeakerIcon