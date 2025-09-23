import { photos } from "@/app/data/photo";
import Layout from "@/app/components/layout";

interface Params {
  params: {
    id: string;
  };
}

export default function PhotoPage({ params }: Params) {
  const photo = photos.find((p) => p.id === params.id);

  if (!photo) {
    return <p>Photo not found</p>;
  }

  return (
    <Layout>

    <div>
      <h1>{photo.title}</h1>
      <img src={photo.src} alt={photo.title} width={600} />
      <p>{photo.description}</p>
    </div>
    </Layout>

  );
}
