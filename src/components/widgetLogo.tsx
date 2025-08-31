import radioZeroLogo from "../assets/images/radiozerologo.png";

export default function WidgetLogo() {
  return (
    <img 
      src={radioZeroLogo.src} 
      alt="Radio 94.5 Zero" 
      width="120" 
      height="118"
      className="w-16 p-1 h-auto xs:w-24 sm:w-28 md:w-32 lg:w-36"
    />
  );
}
