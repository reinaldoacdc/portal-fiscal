import { PageProps } from "$fresh/server.ts";
import SearchBar from "../islands/SearchBar.tsx"
import Layout from '../components/layouts.tsx'

export default function CestPage(props: PageProps) {
  return  (
  <Layout>
    <h1>CestPage</h1> 
    <SearchBar api='cest'></SearchBar>
  </Layout>)
}
