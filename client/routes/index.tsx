import CustomSelect from "../components/CustomSelect.tsx";
import Layout from "../components/layouts.tsx";
import SearchBar from "../islands/SearchBar.tsx"

export default function Home() {
  return (
    <Layout>
      <h1 class={`text-2xl text-center`}>Welcome to Fiscal-API</h1>
      <SearchBar api='cfop'></SearchBar>
    </Layout>
  );
}
