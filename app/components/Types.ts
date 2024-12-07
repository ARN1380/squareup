export interface props {
  children?: React.ReactNode,
  style?: string,
  btnStyle?:  | 'primary' | 'gradiant' | 'gradiantPlus',
  btnType?: "link" | "button",
  href?: string,
}