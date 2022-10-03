import { h } from "preact";

export default function layouts({children}:any) {
  return (
    <div>
      <nav class="container flex justify-around py-8 mx-auto bg-white">
        <div>
          <h3 class="text-2xl font-medium text-blue-500">FISCAL-API</h3>
        </div>
        <div class="space-x-8">
          <a href="/ncm" >NCM</a>
          <a href="/cfop">CFOP </a>
          <a href="/cest">CEST</a>
        </div>
      </nav>
        {children}
    </div>
  )
}