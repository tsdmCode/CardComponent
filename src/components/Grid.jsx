export function Grid({ gtr, gtc, gap, children }) {
  let cName;

  if (gtc) {
    cName = { gridTemplateColumns: `repeat(${gtc}, 1fr)`, gap: gap + 'px' };
  } else if (gtr) {
    cName = { gridTemplateRows: `repeat(${gtr}, 1fr)`, gap: gap + 'px' };
  } else {
    cName = { gridAutoFlow: 'column', gap: gap + 'px' };
  }

  return (
    <section className="gridStyle" style={cName}>
      {children}
    </section>
  );
}
