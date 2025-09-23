export interface Photo {
  id: string;
  title: string;
  description: string;
  src: string; // public/images доторх зурагны зам
}

export const photos: Photo[] = [
  {
    id: "1",
    title: "Mountain",
    description: "A beautiful mountain view.",
    src: "/images/mountain.jpg",
  },
//   {
//     id: "2",
//     title: "City",
//     description: "City skyline during sunset.",
//     src: "/images/city.jpg",
//   },
//   {
//     id: "3",
//     title: "Nature",
//     description: "Lush green forest scenery.",
//     src: "/images/nature.jpg",
//   },
];
