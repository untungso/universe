interface TextProps {
  children: string;
}
export const Title = (props: TextProps) => {
  return (
    <h1 className="mb-2 font-sans text-4xl font-black text-slate-12">
      {props.children}
    </h1>
  );
};
