import ContentLoader from "react-content-loader";

export const ItemProductLoader = (): JSX.Element => {
  return (
    <div
      className="rounded-2xl
     flex
     justify-between
     flex-col 
     text-center 
     mx-auto 
     items-center 
     bg-white 
     border-solid 
     border-1
   border-sky-500 
     xs:w-1/2
     md:w-4/5 
     lg:w-1/1"
    >
      <ContentLoader
        speed={2}
        width={300}
        height={475}
        viewBox="0 0 300 475"
        backgroundColor="#e3e3e3"
        foregroundColor="#cccccc"
      >
        <rect x="32" y="56" rx="6" ry="6" width="241" height="223" />
        <rect x="64" y="35" rx="0" ry="0" width="165" height="11" />
        <rect x="44" y="295" rx="0" ry="0" width="224" height="24" />
        <rect x="106" y="397" rx="0" ry="0" width="109" height="27" />
        <rect x="308" y="182" rx="0" ry="0" width="1" height="0" />
      </ContentLoader>
    </div>
  );
};
