interface FooterProps {
  className?: string;
}

export default function Footer(props: FooterProps) {
  return (
    <div
      className={(props.className && props.className) + " w-full bg-black h-64 "}
    >
      <div className="h-full w-full p-12 text-white text-xl">egershop 2024 hali cincin</div>
    </div>
  );
}
