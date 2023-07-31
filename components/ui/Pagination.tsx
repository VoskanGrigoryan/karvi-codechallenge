export default function Pagination({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}: {
  totalPosts: number;
  postsPerPage: number;
  setCurrentPage: any;
  currentPage: number;
}) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((page, index) => {
        return (
          <button
            onClick={() => setCurrentPage(page)}
            key={index}
            className={`m-4 px-2 font-medium ${
              page == currentPage ? "bg-gray-300 rounded-sm text-blue-600" : ""
            }`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
