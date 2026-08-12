import LinkButton from './LinkButton';

type SidebarCardProps = {
  header: string;
  infoBox: {
    header: string;
    data: string;
  };
  links: string[];
};

export default function SidebarCard({ header, infoBox, links }: SidebarCardProps) {
  return (
    <div className="border border-gray-300 bg-better-white">
      <h2 className="
        py-5 text-center text-lg font-semibold
        sm:py-7 sm:text-xl
      "
      >
        {header}
      </h2>
      <div className="border-y border-gray-300 bg-gray-200 px-5 py-6">
        <h3 className="font-medium">{infoBox.header}</h3>
        <span className="
          mt-1 block text-xl font-light
          sm:mt-3 sm:text-2xl
        "
        >
          {infoBox.data}
        </span>
      </div>
      <div className="
        flex flex-col gap-4 px-5 py-4
        sm:gap-3
      "
      >
        {links.map((link, index) => {
          return (
            <LinkButton key={index} text={link} />
          );
        })}
      </div>
    </div>
  );
}
