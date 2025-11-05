import Image from "next/image";

export default function Home() {
  return (
    <div >
      <main >
       
        <div className="flex justify-center">
            <Image
              src="/wbp.jpg"
              alt="Vercel logomark"
              width={500}
              height={500}
            />


        </div>
      </main>
    </div>
  );
}
