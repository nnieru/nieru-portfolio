import classNames from "classnames";


type Props = {
  text: string;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  size?: string
};
export default function Pill({
  text,
  bgColor = " bg-blue-100",
  borderColor = "border-blue-300 ",
  textColor = "text-blue-500",
  size = "M"
}: Props) {
  /* default color:
         border-blue-300 
         bg-blue-100
         text-blue-500
    */
  return (
    <div className={classNames(size === 'S' ?  "py-0.5 px-2 border rounded-full": "py-1 px-4 border rounded-full", bgColor, borderColor)}>
      <p className={classNames(size === 'S' ? 'text-xs' : "",`font-light ${textColor}`)}>{text}</p>
    </div>
  );
}
