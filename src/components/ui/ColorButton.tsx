type Props = {
  text: string;
  onClick: () => void;
};

export default function ColorButton({ text, onClick }: Props) {
  return (
    <div className="p-[0.15rem] rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300">
      <button
        className="bg-white rounded-md text-base p-[0.3rem] hover:opacity-80 transition-opacity"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
