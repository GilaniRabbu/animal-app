interface AnimalCardProps {
  name: string;
  imageUrl: string;
}

export default function AnimalCard({ name, imageUrl }: AnimalCardProps) {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-36 h-36 mb-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>
      <span className="text-sm tracking-wider uppercase">{name}</span>
    </div>
  );
}
