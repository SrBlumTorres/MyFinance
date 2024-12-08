// import { VscGraph } from "react-icons/vsc";
import { MdOutlineGraphicEq } from "react-icons/md";


type LogoProps = {
  className?: string;
  size?: string;
}

function Logo(props: LogoProps) {

  const { className, size } = props;
  
  return (
      <MdOutlineGraphicEq className={className} size={size}/>
  )

}

export default Logo;