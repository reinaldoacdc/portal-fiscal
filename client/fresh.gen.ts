// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[name].tsx";
import * as $1 from "./routes/api/joke.ts";
import * as $2 from "./routes/cest.tsx";
import * as $3 from "./routes/cest/[codigo].tsx";
import * as $4 from "./routes/cfop.tsx";
import * as $5 from "./routes/cfop/[codigo].tsx";
import * as $6 from "./routes/index.tsx";
import * as $7 from "./routes/ncm.tsx";
import * as $8 from "./routes/ncm/[codigo].tsx";
import * as $$0 from "./islands/Counter.tsx";
import * as $$1 from "./islands/SearchBar.tsx";

const manifest = {
  routes: {
    "./routes/[name].tsx": $0,
    "./routes/api/joke.ts": $1,
    "./routes/cest.tsx": $2,
    "./routes/cest/[codigo].tsx": $3,
    "./routes/cfop.tsx": $4,
    "./routes/cfop/[codigo].tsx": $5,
    "./routes/index.tsx": $6,
    "./routes/ncm.tsx": $7,
    "./routes/ncm/[codigo].tsx": $8,
  },
  islands: {
    "./islands/Counter.tsx": $$0,
    "./islands/SearchBar.tsx": $$1,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
