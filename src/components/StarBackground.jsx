export const StarBackground = () => {
  return (
    <div>
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
            />
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
            />
            <circle
              cx="50"
              cy="50"
              r="20"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
