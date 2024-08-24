import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <h1 className="text-2xl font-bold">Redirect to Scannabl Landing Pages</h1>

      <Link href="/aBcDeFgHiJkLm">
        <p className="px-4 py-2 bg-blue-500 text-white rounded">
          Google (Case 1)
        </p>
      </Link>

      <Link href="/nOpQrStUvWxYz">
        <p className="px-4 py-2 bg-blue-500 text-white rounded">
          Sample PDF (Case 2)
        </p>
      </Link>

      <Link href="/qRsTuVwXyZaBc">
        <p className="px-4 py-2 bg-blue-500 text-white rounded">
          Twitter Profile (Case 3)
        </p>
      </Link>

      <Link href="/dEfGhIjKlMnOp">
        <p className="px-4 py-2 bg-blue-500 text-white rounded">
          Google Maps Location (Case 4)
        </p>
      </Link>

      <Link href="/pQrStUvWxYzAb">
        <p className="px-4 py-2 bg-blue-500 text-white rounded">
          Sample Image (Case 5)
        </p>
      </Link>

      <Link href="/cDeFgHiJkLmNo">
        <p className="px-4 py-2 bg-blue-500 text-white rounded">
          Email Example (Case 6)
        </p>
      </Link>

      <Link href="/rStUvWxYzAbCd">
        <p className="px-4 py-2 bg-blue-500 text-white rounded">
          Call Example (Case 7)
        </p>
      </Link>

      <Link href="/xYzAbCdEfGhIj">
        <p className="px-4 py-2 bg-blue-500 text-white rounded">
          SMS Example (Case 8)
        </p>
      </Link>

      <Link href="/mNoPqRsTuVwXy">
        <p className="px-4 py-2 bg-blue-500 text-white rounded">
          Bing (Case 1, Different URL)
        </p>
      </Link>
    </main>
  );
}
