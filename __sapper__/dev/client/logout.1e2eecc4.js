import { S as SvelteComponentDev, i as init, s as safe_not_equal, e as element, t as text, c as claim_element, b as children, d as claim_text, f as detach, g as add_location, h as insert, j as append, n as noop, z as onMount } from './chunk.a7e37d11.js';
import { l as loggedIn } from './chunk.b142a884.js';

/* src/routes/logout.svelte generated by Svelte v3.4.4 */

const file = "src/routes/logout.svelte";

function create_fragment(ctx) {
	var div, h1, t;

	return {
		c: function create() {
			div = element("div");
			h1 = element("h1");
			t = text("Logging out!");
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {}, false);
			var div_nodes = children(div);

			h1 = claim_element(div_nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t = claim_text(h1_nodes, "Logging out!");
			h1_nodes.forEach(detach);
			div_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			h1.className = "svelte-1wbky5h";
			add_location(h1, file, 28, 0, 547);
			add_location(div, file, 27, 0, 541);
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);
			append(div, h1);
			append(h1, t);
		},

		p: noop,
		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(div);
			}
		}
	};
}

function instance($$self) {
	

    onMount(async () => {
        try {
            const auth = window.solid.auth;
            await auth.logout();
            localStorage.removeItem('solid-auth-client');
            loggedIn.update(n => false);
            window.location = '/login';
        }
        catch(err) {
            console.log('Error: ',err);
        }
    });

	return {};
}

class Logout extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Logout;
