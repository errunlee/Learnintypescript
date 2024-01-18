type StyleProps = {
  styles: React.CSSProperties;
};

function Stylee({ styles }: StyleProps) {
  return <div style={styles}>Stylee</div>;
}

export default Stylee;
