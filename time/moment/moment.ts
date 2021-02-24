namespace $ {

	export type $mol_time_moment_config = number | Date | string | {
		year? : number
		month? : number
		day? : number
		hour? : number
		minute? : number
		second? : number
		offset? : $mol_time_duration_config
	}

	export class $mol_time_moment extends $mol_time_base {

		constructor( config : $mol_time_moment_config = new Date ) {
			
			super()

			if( typeof config === 'number' ) config = new Date( config )
			
			if( typeof config === 'string' ) {
				
				const parsed = /^(?:(\d\d\d\d)(?:-?(\d\d)(?:-?(\d\d))?)?)?(?:[T ](\d\d)(?::?(\d\d)(?::?(\d\d(?:\.\d+)?))?)?(Z|[\+\-]\d\d(?::?(?:\d\d)?)?)?)?$/.exec( config )
				if( !parsed ) throw new Error( `Can not parse time moment (${ config })` )

				if( parsed[1] ) this.year = Number( parsed[1] )
				if( parsed[2] ) this.month = Number( parsed[2] ) - 1
				if( parsed[3] ) this.day =  Number( parsed[3] ) - 1
				if( parsed[4] ) this.hour = Number( parsed[4] )
				if( parsed[5] ) this.minute = Number( parsed[5] )
				if( parsed[6] ) this.second = Number( parsed[6] )
				if( parsed[7] ) this.offset = new $mol_time_duration( parsed[7] )
				
				return
			}
			
			if( config instanceof Date ) {
				
				this.year = config.getFullYear()
				this.month = config.getMonth()
				this.day = config.getDate() - 1
				this.hour = config.getHours()
				this.minute = config.getMinutes()
				this.second = config.getSeconds() + config.getMilliseconds() / 1000
				
				const offset = - config.getTimezoneOffset()
				this.offset = new $mol_time_duration({
					hour : ( offset < 0 ) ? Math.ceil( offset / 60 ) : Math.floor( offset / 60 ) ,
					minute : offset % 60
				})
				
				return
			}

			this.year = config.year
			this.month = config.month
			this.day = config.day
			this.hour = config.hour
			this.minute = config.minute
			this.second = config.second
			
			this.offset = config.offset == null ? config.offset as undefined : new $mol_time_duration( config.offset ) 

		}

		readonly year : number | undefined
		readonly month : number | undefined
		readonly day : number | undefined
		readonly hour : number | undefined
		readonly minute : number | undefined
		readonly second : number | undefined
		readonly offset : $mol_time_duration | undefined

		get weekday() {
			return ( this.native.getDay() + 6 ) % 7
		}

		_native : Date | undefined
		get native() {
			if( this._native ) return this._native
			
			const utc = this.toOffset( 'Z' )

			return this._native = new Date( Date.UTC(
				utc.year ?? 0 ,
				utc.month ?? 0 ,
				( utc.day ?? 0 ) + 1 ,
				utc.hour ?? 0 ,
				utc.minute ?? 0 ,
				utc.second != undefined ? Math.floor( utc.second ) : 0 ,
				utc.second != undefined ? Math.floor( ( utc.second - Math.floor( utc.second ) ) * 1000 ) : 0 ,
			) )
		}

		_normal : $mol_time_moment | undefined
		get normal() {
			if( this._normal ) return this._normal
			
			const moment = new $mol_time_moment( this.native )
			
			return this._normal = new $mol_time_moment({
				year : this.year === undefined ? undefined : moment.year ,
				month : this.month === undefined ? undefined : moment.month ,
				day : this.day === undefined ? undefined : moment.day ,
				hour : this.hour === undefined ? undefined : moment.hour ,
				minute : this.minute === undefined ? undefined : moment.minute ,
				second : this.second === undefined ? undefined : moment.second ,
				offset : this.offset === undefined ? undefined : moment.offset ,
			})
		}

		merge( config : $mol_time_moment_config ) {
			const moment = new $mol_time_moment( config )
			return new $mol_time_moment({
				year : moment.year === undefined ? this.year : moment.year ,
				month : moment.month === undefined ? this.month : moment.month ,
				day : moment.day === undefined ? this.day : moment.day ,
				hour : moment.hour === undefined ? this.hour : moment.hour ,
				minute : moment.minute === undefined ? this.minute : moment.minute ,
				second : moment.second === undefined ? this.second : moment.second ,
				offset : moment.offset === undefined ? this.offset : moment.offset ,
			})
		}

		shift( config : $mol_time_duration_config ) {
			const duration = new $mol_time_duration( config )
			const moment = new $mol_time_moment().merge({
				year: this.year,
				month: this.month,
				day: this.day,
				hour: this.hour ?? 0,
				minute: this.minute ?? 0,
				second: this.second ?? 0,
				offset: this.offset ?? 0
			})

			const second = moment.second! + ( duration.second ?? 0 )
			const native = new Date(
				moment.year! + ( duration.year ?? 0 ) ,
				moment.month! + ( duration.month ?? 0 ) ,
				moment.day! + 1 + ( duration.day ?? 0 ) ,
				moment.hour! + ( duration.hour ?? 0 ) ,
				moment.minute! + ( duration.minute ?? 0 ) ,
				Math.floor( second ) ,
				( second - Math.floor( second ) ) * 1000
			)

			if( isNaN( native.valueOf() ) ) throw new Error( 'Wrong time' )

			return new $mol_time_moment({
				year : this.year === undefined ? undefined : native.getFullYear(),
				month : this.month === undefined ? undefined : native.getMonth(),
				day : this.day === undefined ? undefined : native.getDate() - 1,
				hour : this.hour === undefined ? undefined : native.getHours(),
				minute : this.minute === undefined ? undefined : native.getMinutes(),
				second : this.second === undefined ? undefined : native.getSeconds() + native.getMilliseconds() / 1000,
				offset : this.offset,
			})
		}

		mask( config : $mol_time_moment_config ) {

			const mask = new $mol_time_moment( config )
			
			return new $mol_time_moment({
				year : mask.year === undefined ? undefined : this.year ,
				month : mask.month === undefined ? undefined : this.month ,
				day : mask.day === undefined ? undefined : this.day ,
				hour : mask.hour === undefined ? undefined : this.hour ,
				minute : mask.minute === undefined ? undefined : this.minute ,
				second : mask.second === undefined ? undefined : this.second ,
				offset : mask.offset === undefined ? undefined : this.offset ,
			})
			
		}

		toOffset( config : $mol_time_duration_config ) {
			if (this.hour === undefined) return this
			if (this.minute === undefined) return this
			if (this.second === undefined) return this

			const duration = new $mol_time_duration( config )
			const offset = this.offset || new $mol_time_moment().offset!
		 	const moment = this.shift( duration.summ( offset.mult( -1 ) ) )

			return moment.merge({ offset : duration })
		}

		valueOf() { return this.native.getTime() }

		toJSON() { return this.toString() }

		toString( pattern = 'YYYY-MM-DDThh:mm:ss.sssZ' ) {
			return super.toString( pattern )
		}

		/// Mnemonics:
		///  * single letter for numbers: M - month number, D - day of month.
		///  * uppercase letters for dates, lowercase for times: M - month number , m - minutes number
		///  * repeated letters for define register count: YYYY - full year, YY - shot year, MM - padded month number
		///  * words for word representation: Month - month name, WeekDay - day of week name
		///  * shortcuts: WD - short day of week, Mon - short month name.
		static patterns = {

			'YYYY' : ( moment : $mol_time_moment )=> {
				if( moment.year == null ) return ''
				return String( moment.year )
			} ,
			
			'AD' : ( moment : $mol_time_moment )=> {
				if( moment.year == null ) return ''
				return String( Math.floor( moment.year / 100 ) + 1 )
			} ,
			
			'YY' : ( moment : $mol_time_moment )=> {
				if( moment.year == null ) return ''
				return String( moment.year % 100 )
			} ,
			
			'Month' : ( pattern => ( moment : $mol_time_moment )=> {
				if( moment.month == null ) return ''
				return pattern.format( moment.native )
			} )( new Intl.DateTimeFormat( undefined , { month : 'long' } ) ) ,
			
			'DD Month' : ( pattern => ( moment : $mol_time_moment )=> {
				if( moment.month == null ) {
					if( moment.day == null ) {
						return ''
					} else {
						return $mol_time_moment.patterns[ 'DD' ]( moment )
					}
				} else {
					if( moment.day == null ) {
						return $mol_time_moment.patterns[ 'Month' ]( moment )
					} else {
						return pattern.format( moment.native )
					}
				}
			} )(
				new Intl.DateTimeFormat( undefined , { day : '2-digit' , month : 'long' } )
			) ,
			
			'D Month' : ( pattern => ( moment : $mol_time_moment )=> {
				if( moment.month == null ) {
					if( moment.day == null ) {
						return ''
					} else {
						return $mol_time_moment.patterns[ 'D' ]( moment )
					}
				} else {
					if( moment.day == null ) {
						return $mol_time_moment.patterns[ 'Month' ]( moment )
					} else {
						return pattern.format( moment.native )
					}
				}
			} )(
				new Intl.DateTimeFormat( undefined , { day : 'numeric' , month : 'long' } )
			) ,
			
			'Mon' : ( pattern => ( moment : $mol_time_moment )=> {
				if( moment.month == null ) return ''
				return pattern.format( moment.native )
			} )( new Intl.DateTimeFormat( undefined , { month : 'short' } ) ) ,
			
			'DD Mon' : ( pattern => ( moment : $mol_time_moment )=> {
				if( moment.month == null ) {
					if( moment.day == null ) {
						return ''
					} else {
						return $mol_time_moment.patterns[ 'DD' ]( moment )
					}
				} else {
					if( moment.day == null ) {
						return $mol_time_moment.patterns[ 'Mon' ]( moment )
					} else {
						return pattern.format( moment.native )
					}
				}
			} )(
				new Intl.DateTimeFormat( undefined , { day : '2-digit' , month : 'short' } )
			) ,
			
			'D Mon' : ( pattern => ( moment : $mol_time_moment )=> {
				if( moment.month == null ) {
					if( moment.day == null ) {
						return ''
					} else {
						return $mol_time_moment.patterns[ 'D' ]( moment )
					}
				} else {
					if( moment.day == null ) {
						return $mol_time_moment.patterns[ 'Mon' ]( moment )
					} else {
						return pattern.format( moment.native )
					}
				}
			} )(
				new Intl.DateTimeFormat( undefined , { day : 'numeric' , month : 'short' } )
			) ,
			
			'-MM' : ( moment : $mol_time_moment )=> {
				if( moment.month == null ) return ''
				return '-' + $mol_time_moment.patterns[ 'MM' ]( moment )
			} ,
			
			'MM' : ( moment : $mol_time_moment )=> {
				if( moment.month == null ) return ''
				const month = moment.month + 1
				return String( month ).padStart( 2, '0' )
			} ,
			
			'M' : ( moment : $mol_time_moment )=> {
				if( moment.month == null ) return ''
				return String( moment.month + 1 )
			} ,
			
			'WeekDay' : ( pattern => ( moment : $mol_time_moment )=> {
				if( moment.day == null ) return ''
				if( moment.month == null ) return ''
				if( moment.year == null ) return ''
				return pattern.format( moment.native )
			} )( new Intl.DateTimeFormat( undefined , { weekday : 'long' } ) ) ,

			'WD' : ( pattern => ( moment : $mol_time_moment )=> {
				if( moment.day == null ) return ''
				if( moment.month == null ) return ''
				if( moment.year == null ) return ''
				return pattern.format( moment.native )
			} )( new Intl.DateTimeFormat( undefined , { weekday : 'short' } ) ) ,
			
			'-DD' : ( moment : $mol_time_moment )=> {
				if( moment.day == null ) return ''
				return '-' + $mol_time_moment.patterns[ 'DD' ]( moment )
			} ,
			
			'DD' : ( moment : $mol_time_moment )=> {
				if( moment.day == null ) return ''
				const day = moment.day + 1
				return String( day ).padStart( 2, '0' )
			} ,
			
			'D' : ( moment : $mol_time_moment )=> {
				if( moment.day == null ) return ''
				return String( moment.day + 1 )
			} ,
			
			'Thh' : ( moment : $mol_time_moment )=> {
				if( moment.hour == null ) return ''
				return 'T' + $mol_time_moment.patterns[ 'hh' ]( moment )
			} ,
			
			'hh' : ( moment : $mol_time_moment )=> {
				if( moment.hour == null ) return ''
				return String( moment.hour ).padStart( 2, '0' )
			} ,
			
			'h' : ( moment : $mol_time_moment )=> {
				if( moment.hour == null ) return ''
				return String( moment.hour )
			} ,
			
			':mm' : ( moment : $mol_time_moment )=> {
				if( moment.minute == null ) return ''
				return ':' + $mol_time_moment.patterns[ 'mm' ]( moment )
			} ,
			
			'mm' : ( moment : $mol_time_moment )=> {
				if( moment.minute == null ) return ''
				return String( moment.minute ).padStart( 2, '0' )
			} ,
			
			'm' : ( moment : $mol_time_moment )=> {
				if( moment.minute == null ) return ''
				return String( moment.minute )
			},
			
			':ss' : ( moment : $mol_time_moment )=> {
				if( moment.second == null ) return ''
				return ':' + $mol_time_moment.patterns[ 'ss' ]( moment )
			},
			
			'ss' : ( moment : $mol_time_moment )=> {
				if( moment.second == null ) return ''
				const second = Math.floor( moment.second )
				return String( second ).padStart( 2, '0' )
			},
			
			's' : ( moment : $mol_time_moment )=> {
				if( moment.second == null ) return ''
				return String( Math.floor( moment.second ) )
			} ,
			
			'.sss' : ( moment : $mol_time_moment )=> {
				if( moment.second == null ) return ''
				if( moment.second - Math.floor( moment.second ) === 0 ) return ''
				return '.' + $mol_time_moment.patterns[ 'sss' ]( moment )
			},
			
			'sss' : ( moment : $mol_time_moment )=> {
				if( moment.second == null ) return ''
				const millisecond = Math.floor( ( moment.second - Math.floor( moment.second ) ) * 1000 )
				return String( millisecond ).padStart( 3, '0' )
			},
			
			'Z' : ( moment : $mol_time_moment )=> {
				const offset = moment.offset
				if( !offset ) return ''

				return offset.toString( '+hh:mm' )
			}

		}

	}

}
