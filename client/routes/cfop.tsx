import { PageProps } from "$fresh/server.ts";
import SearchBar from "../islands/SearchBar.tsx"
import Layout from '../components/layouts.tsx'

export default function CfopPage(props: PageProps) {
  return  (
  <Layout>
    <h1>CfopPage</h1> 
    <SearchBar api='cfop'></SearchBar>
  </Layout>)
}
