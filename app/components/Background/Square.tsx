export default function Square({ column, row, transparentEffectDirection, blockColor, zIndex }: { column?: string; row?: string; transparentEffectDirection?: string; blockColor?: string; zIndex?: string }) {
  return (
    <>
      <div className="absolute inset-0 w-full h-full -z-10" style={{
        backgroundSize: `${column}rem ${row}rem`,
        backgroundImage: `linear-gradient(to right, ${blockColor} 1px, transparent 1px), linear-gradient(to bottom, ${blockColor} 1px, transparent 1px)`,
        zIndex: zIndex || "-10",
      }} />
      {transparentEffectDirection == "bottomToTop" && (
        <div className="absolute inset-0 -z-[9] h-full w-full bg-gradient-to-t from-[#0f0f0f]" style={{
          zIndex: zIndex ? zIndex + 1 : "-10",
        }} />
      )}
      {transparentEffectDirection == "leftRightBottomTop" && (
        <>
          <div className="absolute inset-0 -z-[9] h-full w-full bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/[0.1]" style={{
            zIndex: zIndex ? zIndex + 1 : "-10",
          }} />
          <div className="absolute inset-0 -z-[9] h-full w-full bg-gradient-to-b from-[#0f0f0f] via-[#0f0f0f]/[0.1]" style={{
            zIndex: zIndex ? zIndex + 1 : "-10",
          }} />
          <div className="absolute inset-0 -z-[9] h-full w-full bg-gradient-to-l from-[#0f0f0f] via-[#0f0f0f]/[0.1]" style={{
            zIndex: zIndex ? zIndex + 1 : "-10",
          }} />
          <div className="absolute inset-0 -z-[9] h-full w-full bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/[0.1]" style={{
            zIndex: zIndex ? zIndex + 1 : "-10",
          }} />
        </>
      )}
    </>
  );
}