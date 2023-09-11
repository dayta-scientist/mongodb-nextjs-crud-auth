import Link from "next/link";
import { getServerSession } from "next-auth";

async function Navbar() {
  const session = await getServerSession();

  return (
    <nav className="bg-zinc-900 p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <h1 className="font-bold text-xl">NextMongo</h1>
        </Link>
        
        <ul className="flex gap-x-2">
          {session ? (
            <>
              <li className="px-3 py-1">
                <Link href="/tasks/new">New Task</Link>
              </li>
              <li className="px-3 py-1">
                <Link href="/dashboard/profile">Profile</Link>
              </li>
              <li className="px-3 py-1">
                <Link href="/">Tasks</Link>
              </li>
              
            </>
          ) : (
            <>
              <li className="px-3 py-1">
                <Link href="/dashboard/profile">Profile</Link>
              </li>
              <li className="bg-indigo-500 px-3 py-1">
                <Link href="/">Login</Link>
              </li>
              <li className="bg-indigo-700 px-3 py-1">
                <Link href="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>

      
    </nav>
  );
}

export default Navbar;


// import Link from "next/link"

//   function Navbar() {
//   return (
//     <nav className="bg-gray-950 py-5 px-5 mb-2">
      // <div className="container flex justify-between px-10 md:px-0 mx-auto">
      //   <Link href={"/"}>
      //     <h1 className="text-2xl font-bold">Next Mongo</h1>
      //   </Link>
      //   <ul>
      //     <li>
      //      <Link href={"/tasks/new"}>New Task</Link>
      //     </li>
      //   </ul>
      // </div>
//     </nav>
//   )
// }

// export default Navbar