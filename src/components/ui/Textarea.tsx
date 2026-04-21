type Props = {
  name: string;
};

function Textarea({ name }: Props) {
  return (
    <textarea
      name={name}
      placeholder="Type your subject..."
      className="
        w-full  
        md:w-1/2
        h-32
        px-4
        py-3
        bg-muted-foreground
        text-popover
        rounded-xl
        border
        border-primary
        outline-none
        resize-none
        shadow-sm
        transition
        duration-200
        focus:border-yellow-400
        focus:ring-2
        focus:ring-primary
      "
    />
  );
}

export default Textarea;
