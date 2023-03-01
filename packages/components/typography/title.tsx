interface TextProps {
  children: string;
}
export const Title = (props: TextProps) => {
  return (
    <h1 className="text-4xl font-black text-slate-12 mb-2 font-sans">
      {props.children}
    </h1>
  );
};
