namespace $ {
	export class $mol_svg_text extends $mol_svg {
		
		/**
		 * ```tree
		 * dom_name \text
		 * ```
		 */
		dom_name() {
			return "text"
		}
		
		/**
		 * ```tree
		 * pos /
		 * ```
		 */
		pos() {
			return [
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * attr *
		 * 	^
		 * 	x <= pos_x
		 * 	y <= pos_y
		 * 	text-anchor <= align
		 * ```
		 */
		attr() {
			return {
				...super.attr(),
				x: this.pos_x(),
				y: this.pos_y(),
				"text-anchor": this.align()
			}
		}
		
		/**
		 * ```tree
		 * sub / <= text
		 * ```
		 */
		sub() {
			return [
				this.text()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * pos_x \
		 * ```
		 */
		pos_x() {
			return ""
		}
		
		/**
		 * ```tree
		 * pos_y \
		 * ```
		 */
		pos_y() {
			return ""
		}
		
		/**
		 * ```tree
		 * align \middle
		 * ```
		 */
		align() {
			return "middle"
		}
		
		/**
		 * ```tree
		 * text \
		 * ```
		 */
		text() {
			return ""
		}
	}
	
}
