# $mol_harp

HARP is powerful easy to read and debug declarative normalized graph protocol for REST-full API's.

- [HARP Query](./query) - one-line graph query language.
- [HARP Reply](./reply) - normalized graph slice data output.
- [HARP Scheme](./scheme) - type-safe builder/parser/validator.

## Properties

|                                           | HARP   | OData | GraphQL
|-------------------------------------------|--------|-------|--------
| **Single line** query                     | ✅    | ✅    |❌
| Common uri **query string** compatibility | ❌    | ✅    |❌
| **Web Tools** Friendly                    | ✅    | ❌    |❌
| Data **filtering**                        | ✅    | ✅    |❌
| Limited filtering **logic**               | ✅    | ❌    |✅
| Data **sorting**                          | ✅    | ✅    |❌
| Data **limiting**                         | ✅    | ✅    |❌
| Data **aggregation**                      | ✅    | ✅    |❌
| **Metadata** query                        | ✅    | ✅    |✅
| **Normalized** response                   | ✅    | ❌    |❌
| **File name** compatible                  | ✅    | ❌    |❌

## Examples

### HARP

#### Request

```
GET /pullRequest[state=closed,merged;+repository[name;private;owner[name];_len[issue]];-updateTime;author[name];_num=20&30]
```

#### Tree Response

```tree
_query
	\pullRequest[_num=20&30;state=closed,merged;+repository[name;private;owner[name];_len[issue]];-updateTime;author[name]]
		reply
			pullRequest=first
			pullRequest=second
pullRequest
	\first
		_num 0
		state closed
		repository repo=mol
		author user=jin
		updateTime 2022-07-22
	\second
		_num 1
		state merged
		repository repo=mol
		author user=jin
		updateTime 2022-07-21
repo
	\mol
		name \mol
		private false
		owner user=jin
		_len issue 100500
user
	\jin
		name \Jin
```

### OData

#### Request

```
GET /pullRequest?$filter=state%20eq%20closed%20or%20state%20eq%20merged&$orderby=repository%20asc%2CupdateTime%20desc&$select=state%2Crepository%2Fname%2Crepository%2Fprivate%2CupdateTime&$skip=20&$top=10
```

### GraphGL

#### Request

```
POST /graphql

{
	request {
		pullRequests(
			state: [ closed, merged ],
			order: { repository: asc, updateTime: desc }
			offset: 20,
			limit: 10,
		) {
			state
			updateTime
			repository {
				name
				private
				issueCount: count( what: issue )
			}
		}
	}
}
```

#### Response

```json
{
	"request": {
		"pullRequest": {
			"first": {
				"state": "closed",
				"repository": {
					"name": "mol",
					"private": false,
					"owner": {
						"name": "Jin",
					},
					"issueCount": 100500,
				},
				"author": {
					"name": "Jin",
				},
				"updateTime": "2022-07-22",
			},
			"second": {
				"state": "merged",
				"repository": {
					"name": "mol",
					"private": false,
					"owner": {
						"name": "Jin",
					},
					"issueCount": 100500,
				},
				"author": {
					"name": "Jin",
				},
				"updateTime": "2022-07-21",
			},	
		},
	},
}
```
