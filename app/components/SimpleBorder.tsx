import {props} from './Types'

const btnTypeHandler = ({btnType}:props) => {
  if (btnType === 'button') {
    btnHandler()
  } else if (btnType === 'link') {
    linkHandler()
  }
}

function linkHandler({
  children,
  style,
  btnStyle,
  href
}: props) {
  switch (btnStyle) {   
    case 'primary' :
      return (
        <div className={`${style} border border-gray-15 bg-gray-15 bg-opacity-15 backdrop-blur-md rounded-lg text-gray-60 text-center`} >
          {children}
        </div>
      )      
    case 'gradiant' :
      return (
        <div className={`${style} border border-gray-15 bg-gray-15 bg-opacity-15 backdrop-blur-md rounded-lg text-gray-60 text-center`} >
          {children}
        </div>
      )      
    case 'gradiantPlus' :
      return (
        <div className={`${style} border border-gray-15 bg-gray-15 bg-opacity-15 backdrop-blur-md rounded-lg text-gray-60 text-center`} >
          {children}
        </div>
      )      
      default:
        return (
          <div className={`${style} border border-gray-15 bg-gray-15 bg-opacity-15 backdrop-blur-md rounded-lg text-gray-60 text-center`} >
            {children}
          </div>
        )      
      break;
  }
}
function btnHandler({
  children,
  style,
  btnStyle,
  href
}: props) {
  switch (btnStyle) {   
    case 'primary' :
      return (
        <div className={`${style} border border-gray-15 bg-gray-15 bg-opacity-15 backdrop-blur-md rounded-lg text-gray-60 text-center`} >
          {children}
        </div>
      )      
    case 'gradiant' :
      return (
        <div className={`${style} border border-gray-15 bg-gray-15 bg-opacity-15 backdrop-blur-md rounded-lg text-gray-60 text-center`} >
          {children}
        </div>
      )      
    case 'gradiantPlus' :
      return (
        <div className={`${style} border border-gray-15 bg-gray-15 bg-opacity-15 backdrop-blur-md rounded-lg text-gray-60 text-center`} >
          {children}
        </div>
      )      
      default:
        return (
          <div className={`${style} border border-gray-15 bg-gray-15 bg-opacity-15 backdrop-blur-md rounded-lg text-gray-60 text-center`} >
            {children}
          </div>
        )      
      break;
  }
}
