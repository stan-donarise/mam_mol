namespace $ {
	export class $mol_plot_pane extends $mol_svg_root {
		
		/**
		 * ```tree
		 * aspect \none
		 * ```
		 */
		aspect() {
			return "none"
		}
		
		/**
		 * ```tree
		 * hue_base?val NaN
		 * ```
		 */
		@ $mol_mem
		hue_base(val?: any) {
			if ( val !== undefined ) return val as never
			return NaN
		}
		
		/**
		 * ```tree
		 * hue_shift?val 111
		 * ```
		 */
		@ $mol_mem
		hue_shift(val?: any) {
			if ( val !== undefined ) return val as never
			return 111
		}
		
		/**
		 * ```tree
		 * gap_hor 48
		 * ```
		 */
		gap_hor() {
			return 48
		}
		
		/**
		 * ```tree
		 * gap_vert 24
		 * ```
		 */
		gap_vert() {
			return 24
		}
		
		/**
		 * ```tree
		 * gap_left <= gap_hor
		 * ```
		 */
		gap_left() {
			return this.gap_hor()
		}
		
		/**
		 * ```tree
		 * gap_right <= gap_hor
		 * ```
		 */
		gap_right() {
			return this.gap_hor()
		}
		
		/**
		 * ```tree
		 * gap_top <= gap_vert
		 * ```
		 */
		gap_top() {
			return this.gap_vert()
		}
		
		/**
		 * ```tree
		 * gap_bottom <= gap_vert
		 * ```
		 */
		gap_bottom() {
			return this.gap_vert()
		}
		
		/**
		 * ```tree
		 * gap $mol_vector_2d /
		 * 	<= gap_x
		 * 	<= gap_y
		 * ```
		 */
		@ $mol_mem
		gap() {
			const obj = new this.$.$mol_vector_2d(
				this.gap_x(),
				this.gap_y()
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * shift_limit $mol_vector_2d /
		 * 	<= shift_limit_x
		 * 	<= shift_limit_y
		 * ```
		 */
		@ $mol_mem
		shift_limit() {
			const obj = new this.$.$mol_vector_2d(
				this.shift_limit_x(),
				this.shift_limit_y()
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * shift_default $mol_vector_2d /
		 * 	0
		 * 	0
		 * ```
		 */
		@ $mol_mem
		shift_default() {
			const obj = new this.$.$mol_vector_2d(
				0,
				0
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * shift?val $mol_vector_2d /
		 * 	0
		 * 	0
		 * ```
		 */
		@ $mol_mem
		shift(val?: any) {
			if ( val !== undefined ) return val as never
			const obj = new this.$.$mol_vector_2d(
				0,
				0
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * scale_limit $mol_vector_2d /
		 * 	<= scale_limit_x
		 * 	<= scale_limit_y
		 * ```
		 */
		@ $mol_mem
		scale_limit() {
			const obj = new this.$.$mol_vector_2d(
				this.scale_limit_x(),
				this.scale_limit_y()
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * scale_default $mol_vector_2d /
		 * 	0
		 * 	0
		 * ```
		 */
		@ $mol_mem
		scale_default() {
			const obj = new this.$.$mol_vector_2d(
				0,
				0
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * scale?val $mol_vector_2d /
		 * 	1
		 * 	-1
		 * ```
		 */
		@ $mol_mem
		scale(val?: any) {
			if ( val !== undefined ) return val as never
			const obj = new this.$.$mol_vector_2d(
				1,
				-1
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * scale_x?val 1
		 * ```
		 */
		@ $mol_mem
		scale_x(val?: any) {
			if ( val !== undefined ) return val as never
			return 1
		}
		
		/**
		 * ```tree
		 * scale_y?val -1
		 * ```
		 */
		@ $mol_mem
		scale_y(val?: any) {
			if ( val !== undefined ) return val as never
			return -1
		}
		
		/**
		 * ```tree
		 * size $mol_vector_2d /
		 * 	0
		 * 	0
		 * ```
		 */
		@ $mol_mem
		size() {
			const obj = new this.$.$mol_vector_2d(
				0,
				0
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * size_real $mol_vector_2d /
		 * 	1
		 * 	1
		 * ```
		 */
		@ $mol_mem
		size_real() {
			const obj = new this.$.$mol_vector_2d(
				1,
				1
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * dimensions $mol_vector_2d /
		 * 	<= dimensions_x
		 * 	<= dimensions_y
		 * ```
		 */
		@ $mol_mem
		dimensions() {
			const obj = new this.$.$mol_vector_2d(
				this.dimensions_x(),
				this.dimensions_y()
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * dimensions_viewport $mol_vector_2d /
		 * 	<= dimensions_viewport_x
		 * 	<= dimensions_viewport_y
		 * ```
		 */
		@ $mol_mem
		dimensions_viewport() {
			const obj = new this.$.$mol_vector_2d(
				this.dimensions_viewport_x(),
				this.dimensions_viewport_y()
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * sub <= graphs_sorted
		 * ```
		 */
		sub() {
			return this.graphs_sorted()
		}
		
		/**
		 * ```tree
		 * graphs_colored <= graphs_positioned
		 * ```
		 */
		graphs_colored() {
			return this.graphs_positioned()
		}
		
		/**
		 * ```tree
		 * plugins /
		 * 	^
		 * 	<= Touch
		 * ```
		 */
		plugins() {
			return [
				...super.plugins(),
				this.Touch()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * gap_x $mol_vector_range /
		 * 	<= gap_left
		 * 	<= gap_right
		 * ```
		 */
		@ $mol_mem
		gap_x() {
			const obj = new this.$.$mol_vector_range(
				this.gap_left(),
				this.gap_right()
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * gap_y $mol_vector_range /
		 * 	<= gap_bottom
		 * 	<= gap_top
		 * ```
		 */
		@ $mol_mem
		gap_y() {
			const obj = new this.$.$mol_vector_range(
				this.gap_bottom(),
				this.gap_top()
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * shift_limit_x $mol_vector_range /
		 * 	0
		 * 	0
		 * ```
		 */
		@ $mol_mem
		shift_limit_x() {
			const obj = new this.$.$mol_vector_range(
				0,
				0
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * shift_limit_y $mol_vector_range /
		 * 	0
		 * 	0
		 * ```
		 */
		@ $mol_mem
		shift_limit_y() {
			const obj = new this.$.$mol_vector_range(
				0,
				0
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * scale_limit_x $mol_vector_range /
		 * 	0
		 * 	Infinity
		 * ```
		 */
		@ $mol_mem
		scale_limit_x() {
			const obj = new this.$.$mol_vector_range(
				0,
				Infinity
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * scale_limit_y $mol_vector_range /
		 * 	0
		 * 	-Infinity
		 * ```
		 */
		@ $mol_mem
		scale_limit_y() {
			const obj = new this.$.$mol_vector_range(
				0,
				-Infinity
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * dimensions_x $mol_vector_range /
		 * 	Infinity
		 * 	-Infinity
		 * ```
		 */
		@ $mol_mem
		dimensions_x() {
			const obj = new this.$.$mol_vector_range(
				Infinity,
				-Infinity
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * dimensions_y $mol_vector_range /
		 * 	Infinity
		 * 	-Infinity
		 * ```
		 */
		@ $mol_mem
		dimensions_y() {
			const obj = new this.$.$mol_vector_range(
				Infinity,
				-Infinity
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * dimensions_viewport_x $mol_vector_range /
		 * 	Infinity
		 * 	-Infinity
		 * ```
		 */
		@ $mol_mem
		dimensions_viewport_x() {
			const obj = new this.$.$mol_vector_range(
				Infinity,
				-Infinity
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * dimensions_viewport_y $mol_vector_range /
		 * 	Infinity
		 * 	-Infinity
		 * ```
		 */
		@ $mol_mem
		dimensions_viewport_y() {
			const obj = new this.$.$mol_vector_range(
				Infinity,
				-Infinity
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * graphs_sorted /$mol_svg
		 * ```
		 */
		graphs_sorted() {
			return [
			] as readonly $mol_svg[]
		}
		
		/**
		 * ```tree
		 * graphs /$mol_plot_graph
		 * ```
		 */
		graphs() {
			return [
			] as readonly $mol_plot_graph[]
		}
		
		/**
		 * ```tree
		 * graphs_visible <= graphs
		 * ```
		 */
		graphs_visible() {
			return this.graphs()
		}
		
		/**
		 * ```tree
		 * graphs_positioned <= graphs_visible
		 * ```
		 */
		graphs_positioned() {
			return this.graphs_visible()
		}
		
		/**
		 * ```tree
		 * zoom?val 1
		 * ```
		 */
		@ $mol_mem
		zoom(val?: any) {
			if ( val !== undefined ) return val as never
			return 1
		}
		
		/**
		 * ```tree
		 * allow_draw true
		 * ```
		 */
		allow_draw() {
			return true
		}
		
		/**
		 * ```tree
		 * allow_pan true
		 * ```
		 */
		allow_pan() {
			return true
		}
		
		/**
		 * ```tree
		 * allow_zoom true
		 * ```
		 */
		allow_zoom() {
			return true
		}
		
		/**
		 * ```tree
		 * draw?event null
		 * ```
		 */
		@ $mol_mem
		draw(event?: any) {
			if ( event !== undefined ) return event as never
			return null as any
		}
		
		/**
		 * ```tree
		 * cursor_position
		 * ```
		 */
		cursor_position() {
			return this.Touch().pointer_center()
		}
		
		/**
		 * ```tree
		 * action_type
		 * ```
		 */
		action_type() {
			return this.Touch().action_type()
		}
		
		/**
		 * ```tree
		 * action_point
		 * ```
		 */
		action_point() {
			return this.Touch().action_point()
		}
		
		/**
		 * ```tree
		 * Touch $mol_touch
		 * 	zoom?val <=> zoom?val
		 * 	pan?val <=> shift?val
		 * 	pointer_center => cursor_position
		 * 	allow_draw <= allow_draw
		 * 	allow_pan <= allow_pan
		 * 	allow_zoom <= allow_zoom
		 * 	action_type => action_type
		 * 	action_point => action_point
		 * 	draw?event <=> draw?event
		 * ```
		 */
		@ $mol_mem
		Touch() {
			const obj = new this.$.$mol_touch()
			
			obj.zoom = (val?: any) => this.zoom(val)
			obj.pan = (val?: any) => this.shift(val)
			obj.allow_draw = () => this.allow_draw()
			obj.allow_pan = () => this.allow_pan()
			obj.allow_zoom = () => this.allow_zoom()
			obj.draw = (event?: any) => this.draw(event)
			
			return obj
		}
	}
	
}

