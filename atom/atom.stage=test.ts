/// Cached property with simple key
$mol_test( test => {
	
	class X extends $mol_object {
		@ $mol_atom()
		foo( id : number , next? : Number|String ) {
			if( next !== void 0 ) return new Number( next )
			return new Number( 123 )
		}
	}
	var x = new X

	// get
	test.equal( x.foo(0).valueOf() , 123 )
	test.equal( x.foo(0) , x.foo(0) )
	test.unique( x.foo(0) , x.foo(1) )
	
	// set
	x.foo( 0 , 321 )
	test.equal( x.foo(0).valueOf() , 321 )
	
	// reset
	x.foo( 0 , void 0 )
	test.equal( x.foo(0).valueOf() , 123 )
	
} )

/// Cached property with complex key
$mol_test( test => {
	
	class X extends $mol_object {
		@ $mol_atom()
		foo( ids : number[] ) {
			return Math.random()
		}
	}
	var x = new X
	
	test.equal( x.foo([ 0 , 1 ]) , x.foo([ 0 , 1 ]) )
	test.unique( x.foo([ 0 , 1 ]) , x.foo([ 0 , 2 ]) )
	
} )

/// Automatic state synchronization
$mol_test( test => {
	
	class X extends $mol_object {
		
		@ $mol_atom()
		foo( id : number , next? : number ) {
			if( next !== void 0 ) return next
			return 1
		}
		
		@ $mol_atom()
		bar( id : number ) {
			return this.foo( id ) + 1
		}
		
		@ $mol_atom()
		xxx( id : number ) {
			return this.bar( id ) + 1
		}
		
	}
	
	var x = new X
	test.equal( x.bar(0) , 2 )
	test.equal( x.xxx(0) , 3 )
	
	x.foo( 0 , 5 )
	test.equal( x.bar(0) , 2 )
	test.equal( x.xxx(0) , 3 )
	
	$mol_atom_sync()
	test.equal( x.bar(0) , 6 )
	test.equal( x.xxx(0) , 7 )
	
} )

/// Recursive dependency
$mol_test( test => {
	
	class X extends $mol_object {
		
		@ $mol_atom()
		foo( id : number ) {
			return this.foo( id ) + 1
		}
		
	}
	
	var x = new X
	
	try {
		x.foo( 0 )
		test.fail( 'Not tracked recursive dependency' )
	} catch( error ) {
		test.equal( error.message , 'Recursive dependency! undefined.foo(0)' )
	}
	
} )
