namespace $ {

	type join_keys< K1, K2 > =
		K1 extends string
		?
			K2 extends string
			? $mol_type_case_dot< K1, K2 >
			: never
		: never

	/**
	 * Folded nested structure key names. Endpoint specifies structures, whose keys should not be folded.
	 *
	 * 	type keys = $mol_type_fold_keys< { a: { b: { c: number }, d: string } } > // 'a' | 'a.b' | 'a.d' | 'a.b.c'
	 */
	export type $mol_type_fold_keys< T, Endpoint = never > =
		T extends object
		?
			T extends Array< any >
			? ''
			:
				T extends Promise< any >
				? ''
				:
					T extends Endpoint
					? ''
					:
						{
							[ Key in keyof T ]-?:
								Key extends string
								?
									| Key
									| join_keys<
										Key,
										$mol_type_fold_keys<
											Required< T >[ Key ],
											Endpoint
										>
									 >
								: never
						}[ keyof T ]
		: ''

	/**
	 * Pick folded nested structure key names by property type
	 *
	 * 	type string_keys = $mol_type_fold_keys_pick< { a: { b: { c: number }, d: string } }, string > // 'a.d'
	 */
	export type $mol_type_fold_keys_pick< T, Pick > =
		{
			// @ts-ignore
			[ K in $mol_type_fold_keys< T > ]:
				$mol_type_unfold< T, K > extends Pick
				? K
				: never
		}[ $mol_type_fold_keys< T > ]

	/**
	 * Omit folded nested structure key names by property type
	 *
	 * 	type not_string_keys = $mol_type_fold_keys_omit< { a: { b: { c: number }, d: string } }, string > // 'a' | 'a.b' | 'a.b.c'
	 */
	export type $mol_type_fold_keys_omit< T, Omit > =
		{
			// @ts-ignore
			[ K in $mol_type_fold_keys< T > ]:
				$mol_type_unfold< T, K > extends Omit
				? never
				: K
		}[ $mol_type_fold_keys< T > ]

}
