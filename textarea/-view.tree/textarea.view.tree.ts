namespace $ {
	export class $mol_textarea extends $mol_view {
		
		/**
		 * ```tree
		 * attr *
		 * 	^
		 * 	mol_textarea_clickable <= clickable?val
		 * 	mol_textarea_sidebar_showed <= sidebar_showed
		 * ```
		 */
		attr() {
			return {
				...super.attr(),
				mol_textarea_clickable: this.clickable(),
				mol_textarea_sidebar_showed: this.sidebar_showed()
			}
		}
		
		/**
		 * ```tree
		 * event *
		 * 	keydown?event <=> press?event
		 * 	pointermove?event <=> hover?event
		 * ```
		 */
		event() {
			return {
				keydown: (event?: any) => this.press(event),
				pointermove: (event?: any) => this.hover(event)
			}
		}
		
		/**
		 * ```tree
		 * sub /
		 * 	<= Edit
		 * 	<= View
		 * ```
		 */
		sub() {
			return [
				this.Edit(),
				this.View()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * clickable?val false
		 * ```
		 */
		@ $mol_mem
		clickable(val?: any) {
			if ( val !== undefined ) return val as never
			return false
		}
		
		/**
		 * ```tree
		 * sidebar_showed false
		 * ```
		 */
		sidebar_showed() {
			return false
		}
		
		/**
		 * ```tree
		 * press?event null
		 * ```
		 */
		@ $mol_mem
		press(event?: any) {
			if ( event !== undefined ) return event as never
			return null as any
		}
		
		/**
		 * ```tree
		 * hover?event null
		 * ```
		 */
		@ $mol_mem
		hover(event?: any) {
			if ( event !== undefined ) return event as never
			return null as any
		}
		
		/**
		 * ```tree
		 * value?val \
		 * ```
		 */
		@ $mol_mem
		value(val?: any) {
			if ( val !== undefined ) return val as never
			return ""
		}
		
		/**
		 * ```tree
		 * hint \
		 * ```
		 */
		hint() {
			return ""
		}
		
		/**
		 * ```tree
		 * enabled true
		 * ```
		 */
		enabled() {
			return true
		}
		
		/**
		 * ```tree
		 * length_max Infinity
		 * ```
		 */
		length_max() {
			return Infinity
		}
		
		/**
		 * ```tree
		 * selection?val /number
		 * ```
		 */
		@ $mol_mem
		selection(val?: any) {
			if ( val !== undefined ) return val as never
			return [
			] as readonly number[]
		}
		
		/**
		 * ```tree
		 * Edit $mol_string
		 * 	dom_name \textarea
		 * 	value?val <=> value?val
		 * 	hint <= hint
		 * 	enabled <= enabled
		 * 	length_max <= length_max
		 * 	selection?val <=> selection?val
		 * ```
		 */
		@ $mol_mem
		Edit() {
			const obj = new this.$.$mol_string()
			
			obj.dom_name = () => "textarea"
			obj.value = (val?: any) => this.value(val)
			obj.hint = () => this.hint()
			obj.enabled = () => this.enabled()
			obj.length_max = () => this.length_max()
			obj.selection = (val?: any) => this.selection(val)
			
			return obj
		}
		
		/**
		 * ```tree
		 * row_numb!index 0
		 * ```
		 */
		row_numb(index: any) {
			return 0
		}
		
		/**
		 * ```tree
		 * highlight \
		 * ```
		 */
		highlight() {
			return ""
		}
		
		/**
		 * ```tree
		 * View $mol_text_code
		 * 	text <= value
		 * 	render_visible_only false
		 * 	row_numb!index <= row_numb!index
		 * 	sidebar_showed <= sidebar_showed
		 * 	highlight <= highlight
		 * ```
		 */
		@ $mol_mem
		View() {
			const obj = new this.$.$mol_text_code()
			
			obj.text = () => this.value()
			obj.render_visible_only = () => false
			obj.row_numb = (index: any) => this.row_numb(index)
			obj.sidebar_showed = () => this.sidebar_showed()
			obj.highlight = () => this.highlight()
			
			return obj
		}
	}
	
}
