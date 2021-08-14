namespace $ {
	export class $mol_app_supplies_enter extends $mol_view {
		
		/**
		 * ```tree
		 * entered?val false
		 * ```
		 */
		@ $mol_mem
		entered(val?: any) {
			if ( val !== undefined ) return val as never
			return false
		}
		
		/**
		 * ```tree
		 * minimal_width 400
		 * ```
		 */
		minimal_width() {
			return 400
		}
		
		/**
		 * ```tree
		 * sub / <= form
		 * ```
		 */
		sub() {
			return [
				this.form()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * loginLabel @ \User name
		 * ```
		 */
		loginLabel() {
			return this.$.$mol_locale.text( '$mol_app_supplies_enter_loginLabel' )
		}
		
		/**
		 * ```tree
		 * login?val \
		 * ```
		 */
		@ $mol_mem
		login(val?: any) {
			if ( val !== undefined ) return val as never
			return ""
		}
		
		/**
		 * ```tree
		 * loginControl $mol_string value?val <=> login?val
		 * ```
		 */
		@ $mol_mem
		loginControl() {
			const obj = new this.$.$mol_string()
			
			obj.value = (val?: any) => this.login(val)
			
			return obj
		}
		
		/**
		 * ```tree
		 * loginField $mol_form_field
		 * 	name <= loginLabel
		 * 	control <= loginControl
		 * ```
		 */
		@ $mol_mem
		loginField() {
			const obj = new this.$.$mol_form_field()
			
			obj.name = () => this.loginLabel()
			obj.control = () => this.loginControl()
			
			return obj
		}
		
		/**
		 * ```tree
		 * passwordLabel @ \Pass word
		 * ```
		 */
		passwordLabel() {
			return this.$.$mol_locale.text( '$mol_app_supplies_enter_passwordLabel' )
		}
		
		/**
		 * ```tree
		 * password?val \
		 * ```
		 */
		@ $mol_mem
		password(val?: any) {
			if ( val !== undefined ) return val as never
			return ""
		}
		
		/**
		 * ```tree
		 * passControl $mol_string
		 * 	value?val <=> password?val
		 * 	type \password
		 * ```
		 */
		@ $mol_mem
		passControl() {
			const obj = new this.$.$mol_string()
			
			obj.value = (val?: any) => this.password(val)
			obj.type = () => "password"
			
			return obj
		}
		
		/**
		 * ```tree
		 * passwordField $mol_form_field
		 * 	name <= passwordLabel
		 * 	control <= passControl
		 * ```
		 */
		@ $mol_mem
		passwordField() {
			const obj = new this.$.$mol_form_field()
			
			obj.name = () => this.passwordLabel()
			obj.control = () => this.passControl()
			
			return obj
		}
		
		/**
		 * ```tree
		 * submitLabel @ \Log In
		 * ```
		 */
		submitLabel() {
			return this.$.$mol_locale.text( '$mol_app_supplies_enter_submitLabel' )
		}
		
		/**
		 * ```tree
		 * event_submit?val null
		 * ```
		 */
		@ $mol_mem
		event_submit(val?: any) {
			if ( val !== undefined ) return val as never
			return null as any
		}
		
		/**
		 * ```tree
		 * submit_blocked false
		 * ```
		 */
		submit_blocked() {
			return false
		}
		
		/**
		 * ```tree
		 * submit $mol_button_major
		 * 	sub / <= submitLabel
		 * 	click?val <=> event_submit?val
		 * 	disabled <= submit_blocked
		 * ```
		 */
		@ $mol_mem
		submit() {
			const obj = new this.$.$mol_button_major()
			
			obj.sub = () => [
				this.submitLabel()
			] as readonly any[]
			obj.click = (val?: any) => this.event_submit(val)
			obj.disabled = () => this.submit_blocked()
			
			return obj
		}
		
		/**
		 * ```tree
		 * form $mol_form
		 * 	form_fields /
		 * 		<= loginField
		 * 		<= passwordField
		 * 	buttons / <= submit
		 * ```
		 */
		@ $mol_mem
		form() {
			const obj = new this.$.$mol_form()
			
			obj.form_fields = () => [
				this.loginField(),
				this.passwordField()
			] as readonly any[]
			obj.buttons = () => [
				this.submit()
			] as readonly any[]
			
			return obj
		}
	}
	
}
