interface StyledCodeProps {
  children: string;
}
export const StyledCode = (props: StyledCodeProps) => {
  return (
    <p className="text-sm font-mono capitalize">{`<${props.children}/>`}</p>
  );
};
