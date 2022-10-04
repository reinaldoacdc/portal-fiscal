import Layout from '../../components/layouts.tsx'
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers<any> = {
  async GET(_, ctx) {
  
    const {codigo} = ctx.params
    const resp = await fetch(`https://reinaldoacdc-fiscal-api.deno.dev/ncm/${codigo}/cest`)
    
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const data = await resp.json()
    return ctx.render(data);
  },
};

export default function Ncm(props: PageProps) {
  return (
    <Layout>
      <h1>{props.params.codigo}</h1>

      <h3>Cest Permitidos</h3>
      {
        props.data.map( r => {
          return <li style="padding: 10px;"><a href={`/${props.api}/${r.codigo.replace(/\D/g, '')}`} style="font-style: underline;"> {r.codigo} - {r.descricao}</a></li>
        })
      }
      <h1>{props.data.name}</h1>
      <p>{props.data.login}</p>
    </Layout>
  );

}
