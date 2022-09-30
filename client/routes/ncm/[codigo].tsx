import { PageProps } from "$fresh/server.ts";

export default function Ncm(props: PageProps) {
  return  (
  <div>
    <h1>{props.params.codigo}</h1> 
  </div>)
}
