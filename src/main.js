import { Block } from "@contentarchitect/editor"
import View from "./view.vue"
import icon from "./icon.svg"

export default class Divider extends Block {
	static get viewComponent () {
		return View;
	}

	static get icon () {
		return icon
	}

	toHTML () {
		return `<hr />`
	}
}