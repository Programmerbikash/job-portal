import { useGetNewsesQuery } from "./redux/api/apiSlice";

const News = () => {
    const {
      data,
      isLoading,
      isSuccess,
      isError,
      error,
    } = useGetNewsesQuery();
    console.log(data)
    if (isLoading) {
      console.log("Server connected successfully!");
    } else if (isSuccess) {
      console.log('Server connected successfully!')
    } else if (isError) {
      <div>{error.toString()}</div>;
    }
    return (
      <div>
            {data?.map((n: any) => {
                <div>
                  <h1>This is a news</h1>
                  <p>{n?.title}</p>
                </div>;
        })}
      </div>
    );
};

export default News;