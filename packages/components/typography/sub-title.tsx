interface TextProps {
  children: string;
}
export const SubTitle = (props: TextProps) => {
  return (
    <h2 className="text-2xl font-black text-slate-12 mb-1 font-sans">
      {props.children}
    </h2>
  );
};
