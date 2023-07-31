import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="ml-8 mb-2">
        <Tag />
      </div>
      <div className="ml-8">
        <Card />
      </div>
    </main>
  );
}
