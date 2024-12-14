export function MarketplaceLoader() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between mb-8">
        <div className="h-8 w-64 bg-gray-200 rounded animate-pulse" />
        <div className="h-10 w-24 bg-gray-200 rounded animate-pulse" />
      </div>

      {/* Grid of product skeletons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="border rounded-lg p-4 space-y-3">
            <div className="h-40 w-full bg-gray-200 rounded-md animate-pulse" />
            <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse" />
            <div className="flex justify-between items-center pt-2">
              <div className="h-6 w-1/3 bg-gray-200 rounded animate-pulse" />
              <div className="h-8 w-20 bg-gray-200 rounded-full animate-pulse" />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Skeleton */}
      <div className="flex justify-center items-center space-x-2 mt-8">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="h-8 w-8 bg-gray-200 rounded-full animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}
