import {props} from './Types'

export default function Border({children,style}:props) {
  return (
    <div className={`${style} rounded-md bg-gray-15 px-[10px] py-2 text-white`}>
      <p>{children}</p>
    </div>
  )
}
