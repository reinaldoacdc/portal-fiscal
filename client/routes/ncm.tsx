import { PageProps } from "$fresh/server.ts";
import SearchBar from "../islands/SearchBar.tsx"
import Layout from '../components/layouts.tsx'

export default function NcmPage(props: PageProps) {
  return  (
  <Layout>
    <h1>NcmPage</h1> 
    <SearchBar api='ncm'></SearchBar>
  </Layout>)
}
