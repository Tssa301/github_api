import ContentLoader from 'react-content-loader';

const InfoLoader = () => (
  <div className="info-loader-container">
    <ContentLoader
      speed={2}
      width={400}
      height={320}
      viewBox="0 0 400 320"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="165" y="33" rx="5" ry="5" width="220" height="10" />
      <circle cx="90" cy="90" r="64" />
      <rect x="165" y="68" rx="5" ry="5" width="220" height="10" />
      <rect x="165" y="97" rx="5" ry="5" width="220" height="10" />
      <rect x="165" y="128" rx="5" ry="5" width="220" height="10" />
    </ContentLoader>
  </div>
);

export default InfoLoader;
