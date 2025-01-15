import GatheringPageScene from "../../components/GatheringPageScene";

export default async function EditGatheringPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <GatheringPageScene id={id} />;
}
