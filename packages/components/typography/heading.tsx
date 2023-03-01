interface TextProps {
  children: string;
}
export const Heading = (props: TextProps) => {
  return (
    <h2 className="text-3xl font-base text-slate-12 mb-3 font-sans">
      {props.children}
    </h2>
  );
};
