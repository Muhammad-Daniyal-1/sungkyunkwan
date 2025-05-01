const HomeIcon = ({ isActive }: { isActive: boolean }) => {
    return (
        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0029 1.34619L17.3906 8.00049H16V16.0005H13V10.0005H7V16.0005H4V8.00049H2.6084L9.99609 1.34619C9.99646 1.34607 9.99798 1.34521 10 1.34521L10.0029 1.34619Z" fill={isActive ? "#11AC57" : "#B0B7CC"} stroke={isActive ? "#11AC57" : "#B0B7CC"} strokeWidth="2" />
        </svg>

    )
}

export default HomeIcon