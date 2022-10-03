import { PageProps } from "$fresh/server.ts";
import SearchBar from "../../islands/SearchBar.tsx"
import Layout from '../../components/layouts.tsx'

export default function Ncm(props: PageProps) {
  return  (
    <Layout>   
      <SearchBar api='ncm'></SearchBar>
      <h1>{props.params.codigo}</h1> 
    </Layout>)
}
