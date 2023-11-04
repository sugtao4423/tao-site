import { SVGProps } from 'react'

export const SquareArrowIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    fill="none"
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="1.5em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
)
