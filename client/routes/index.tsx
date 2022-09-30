import SearchBar from "../islands/SearchBar.tsx"
import Counter from "../islands/Counter.tsx";


export default function Home() {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <img
        src="/logo-api.png"
        class="w-32 h-32"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class="my-6">
        Welcome to Fiscal-API
      </p>

      <SearchBar api='ncm' ></SearchBar>
    </div>
  );
}
