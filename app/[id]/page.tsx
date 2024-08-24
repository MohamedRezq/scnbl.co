import FileOpener from "@/components/FileOpener";
import { getFileInfo } from "@/lib/getFileInfo";

export default async function Home({ params }: { params: { id: string } }) {
  const response = await getFileInfo(params?.id);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {response?.status == 404 && <p>File not found!</p>}
      {response?.status == 400 && <p>Error!</p>}
      {response?.status == 200 && (
        <FileOpener
          typeId={response?.data?.type}
          content={response?.data?.content}
        />
      )}
    </main>
  );
}
