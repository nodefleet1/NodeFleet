
import Navbar from '../app/components/Navbar';
import Chatbot from '../app/components/Chatbot';
 


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar  />
      <section className="flex-1 flex items-center justify-center">
        <h1 className="text-3xl font-bold  "></h1>

         <Chatbot  />

      </section>
    </main>
  );
}


