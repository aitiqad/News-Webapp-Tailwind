export const NewsItem = ({ title, description, src, url }) => {
    const maxTitleLength = 50;
    const maxDescriptionLength = 90;
  
    const truncatedTitle = title.length > maxTitleLength ? title.slice(0, maxTitleLength) + '..' : title;
    const truncatedDescription = description && description.length > maxDescriptionLength ? description.slice(0, maxDescriptionLength) + '..' : description;
  
    return (
      <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] max-w-80 m-3">
        <img
          class="w-full h-auto rounded-t-xl"
          src={src ? src : '/banner.png'}
          alt="Image Description"
          style={{ width: '100%', height: '200px' }} // Adjust the height and width as per your requirement
        ></img>
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            {truncatedTitle}
          </h3>
          <p class="mt-1 text-gray-500 dark:text-gray-400">
            {truncatedDescription ? truncatedDescription : "No description provide. Click below to read more"}
          </p>
          <a
            class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href={url}
          >
            Read More
          </a>
        </div>
      </div>
    );
  };
  