import FileOpener from "@/components/FileOpener";
import { getFileInfo } from "@/lib/getFileInfo";

export default async function Home({ params }: { params: { id: string } }) {
  const response = await getFileInfo(params?.id);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FileOpener id={params?.id} />
    </main>
  );
}
