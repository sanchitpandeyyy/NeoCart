export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const query = (await searchParams).query;
  console.log(query);

  return (
    <>
      <div>hello</div>
    </>
  );
}
