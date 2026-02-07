import Skeleton from "../ui/Skeleton";

const SelectedCollectionSkeleton = () => {
  return (
    <header>
      <div className="selected-collection">
        {/* Background Skeleton covering the entire area */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
             <Skeleton width="100%" height="100%" borderRadius="0" />
        </div>

        <div className="selected-collection__description" style={{ zIndex: 3 }}>
          <Skeleton width="64px" height="64px" borderRadius="100%" />
          <div style={{ height: '8px' }}></div>
          <Skeleton width="66%" height="36px" />
          <div style={{ height: '8px' }}></div>
          <Skeleton width="200px" height="24px" />
          <div style={{ height: '8px' }}></div>
          <div style={{ height: '20px', width: '150px' }}>
            <Skeleton width="150px" height="24px" />
          </div>
          <div style={{ height: '20px' }}></div>
          <Skeleton width="220px" height="60px" borderRadius="12px" />
        </div>
      </div>
    </header>
  );
};

export default SelectedCollectionSkeleton;
