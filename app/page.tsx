import Image from "next/image";
import FizzBuzz from "@/app/FizzBuzz/FizzBuzz";

export default function Home()
{
    console.log(123412);

    const test = "Hello World!";

    function testFunction()
    {
        return "Dub";
    }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          xxx {test}
          <br />
          yyy {testFunction()}
          <br />
          zzz {testFunction2()}
          <br />
          <FizzBuzz />
      </main>
    </div>
  );
}

function testFunction2()
{
    return "RBTV"
}
