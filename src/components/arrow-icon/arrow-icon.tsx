import arrow from "./arrow-icon.module.scss"

const ArrowIcon = () => (
  <div className={arrow.container}>
    <svg
      width="10px"
      height="10px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={arrow.icon}
    >
      <path
        d="M5 12h14M12 5l7 7-7 7"
        stroke="#967f5f"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export default ArrowIcon;
