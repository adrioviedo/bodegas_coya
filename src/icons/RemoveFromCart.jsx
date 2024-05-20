export const RemoveFromCart = ({ clase }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={clase}
    >
      <path d="M0 0h24v24H0z" stroke="none"></path>
      <path d="M4 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0"></path>
      <path d="M12.5 17H6V3H4"></path>
      <path d="m6 5 14 1-1 7H6M16 19h6"></path>
    </svg>
  )
}
