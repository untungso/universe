interface TextProps {
  children: any;
}
export const Paragraph = (props: TextProps) => {
  return (
    <p className="font-base leading-relaxed mb-4 text-md font-sans text-justify">
      {props.children}
    </p>
  );
};
