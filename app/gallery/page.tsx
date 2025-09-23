import Link from "next/link";
import Layout from "@/app/components/layout";
import styles from "@/app/about/page.module.css";
import { photos } from "@/app/data/photo";
export default function GalleryPage() {
  return (
    <Layout>
    <div>
      <h1>Gallery</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        {photos.map((photo) => (
          <div key={photo.id}>
            <Link href={`/gallery/${photo.id}`}>
              <img src={photo.src} alt={photo.title} width={200} />
              <h3>{photo.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  );
}
