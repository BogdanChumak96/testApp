import ContentLoader from "react-content-loader";
type Props = {};

const FullItemLoader = (props: Props) => {
  return (
    <div
      className="rounded-2xl
        flex
        justify-between
        flex-col 
        text-center 
        // mx-auto 
        px-10
        py-20
        mt-10
        items-center 
        bg-white 
      hover:shadow-lg
        lg:w-1/2"
    >
      <ContentLoader
        speed={2}
        width={400}
        height={400}
        viewBox="0 0 450 500"
        backgroundColor="#e3e3e3"
        foregroundColor="#cccccc"
        {...props}
      >
        <rect x="27" y="57" rx="6" ry="6" width="389" height="385" />
        <rect x="134" y="31" rx="0" ry="0" width="165" height="11" />
        <rect x="61" y="453" rx="0" ry="0" width="313" height="10" />
        <rect x="171" y="471" rx="0" ry="0" width="80" height="9" />
        <rect x="308" y="182" rx="0" ry="0" width="1" height="0" />
      </ContentLoader>
    </div>
  );
};

export default FullItemLoader;
