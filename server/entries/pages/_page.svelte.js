import "clsx";
import { m as pop, p as push } from "../../chunks/index.js";
import "../../chunks/client.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<div class="size-full"><navbar><button>Go to Data Privacy Policy</button></navbar> <div class="m-4"><h1 class="text-3xl font-bold text-blue-600">Welcome to SvelteKit</h1> <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p> <button type="button" class="btn preset-filled-primary-500">Button</button></div></div>`;
  pop();
}
export {
  _page as default
};
