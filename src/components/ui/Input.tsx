type Props = {
  type?: string;
  placeholder?: string;
  label?: string;
  className?: string;
  name?: string;
};

const baseInputStyle = `
  w-full
  h-11
  px-4
  bg-muted-foreground
  text-popover
  rounded-xl
  border
  border-primary
  outline-none
  transition
  duration-200
  shadow-sm
  focus:border-yellow-400
  focus:ring-2
  focus:ring-primary
`;

function Input({ type = "text", placeholder, label, className ,name }: Props) {
  return (
    <div className="flex flex-col gap-2 w-full md:w-1/2">
      {label && (
        <label className="text-sm font-medium  uppercase tracking-wide">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        className={`${baseInputStyle} ${className ?? ""}`}
        name={name}
        required
      />
    </div>
  );
}

export default Input;
