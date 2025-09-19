const PostBody = ({ poster, content }) => {
  return (
    <div class="border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl">
      <div class="flex items-center justify-center overflow-hidden">
        {poster && (
          <img
            class="max-w-md"
            src={`${import.meta.env.VITE_SERVER_BASE_URL}/${poster}`}
            alt="poster"
          />
        )}
      </div>
      <p>{content ?? "No content Available"}</p>
    </div>
  );
};

export default PostBody;
