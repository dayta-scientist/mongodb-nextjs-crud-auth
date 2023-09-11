"use client";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

function ProfilePage() {
  const [sessionData, setSessionData] = useState(null);
  const { data: session, status } = useSession();

  console.log(session, status);

  if (session && sessionData === null) {
    setSessionData(session);
  }

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col gap-y-10 items-center justify-center">
      <h1 className="font-bold text-6xl">Profile</h1>

      {sessionData && (
        <div>
          <p className="text-center text-xl mt-10 text-white">Signed in as: </p>
          <p className="text-xl mt-1 text-slate-400 italic">{sessionData.user.email}</p>
        </div>
      )}

      <button
        className="bg-zinc-800 px-4 py-2 block mb-2"
        onClick={() => {
          signOut();
        }}
      >
        Signout
      </button>
    </div>
  );
}

export default ProfilePage;







