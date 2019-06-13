import { S as SvelteComponentDev, i as init, s as safe_not_equal, k as create_slot, e as element, t as text, c as claim_element, b as children, d as claim_text, f as detach, g as add_location, h as insert, j as append, l as get_slot_changes, o as get_slot_context } from './chunk.a7e37d11.js';

/* src/components/GradientBackground.svelte generated by Svelte v3.4.4 */

const file = "src/components/GradientBackground.svelte";

function create_fragment(ctx) {
	var div, em, t, current;

	const default_slot_1 = ctx.$$slots.default;
	const default_slot = create_slot(default_slot_1, ctx, null);

	return {
		c: function create() {
			div = element("div");

			if (!default_slot) {
				em = element("em");
				t = text("no content was provided");
			}

			if (default_slot) default_slot.c();
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			if (!default_slot) {
				em = claim_element(div_nodes, "EM", {}, false);
				var em_nodes = children(em);

				t = claim_text(em_nodes, "no content was provided");
				em_nodes.forEach(detach);
			}

			if (default_slot) default_slot.l(div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			if (!default_slot) {
				add_location(em, file, 33, 2, 696);
			}

			div.className = "gradientbackground svelte-yvxm82";
			add_location(div, file, 31, 0, 653);
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);

			if (!default_slot) {
				append(div, em);
				append(em, t);
			}

			else {
				default_slot.m(div, null);
			}

			current = true;
		},

		p: function update(changed, ctx) {
			if (default_slot && default_slot.p && changed.$$scope) {
				default_slot.p(get_slot_changes(default_slot_1, ctx, changed, null), get_slot_context(default_slot_1, ctx, null));
			}
		},

		i: function intro(local) {
			if (current) return;
			if (default_slot && default_slot.i) default_slot.i(local);
			current = true;
		},

		o: function outro(local) {
			if (default_slot && default_slot.o) default_slot.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(div);
			}

			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$props => {
		if ('$$scope' in $$props) $$invalidate('$$scope', $$scope = $$props.$$scope);
	};

	return { $$slots, $$scope };
}

class GradientBackground extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export { GradientBackground as G };