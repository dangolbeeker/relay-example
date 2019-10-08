/**
 * @flow
 * @relayHash 5326318aefe29b54b81c7322f0c33285
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ConcreteRequest } from 'relay-runtime';
type LocationsPaginatedBidirectional_data$ref = any;
type LocationsPaginatedRefetch_data$ref = any;
type LocationsPaginated_data$ref = any;
export type HomepageQueryVariables = {|
  count: number
|};
export type HomepageQueryResponse = {|
  +$fragmentRefs: LocationsPaginatedBidirectional_data$ref & LocationsPaginatedRefetch_data$ref & LocationsPaginated_data$ref
|};
export type HomepageQuery = {|
  variables: HomepageQueryVariables,
  response: HomepageQueryResponse,
|};

/*
query HomepageQuery(
  $count: Int!
) {
  ...LocationsPaginatedBidirectional_data_1TJkD9
  ...LocationsPaginatedRefetch_data
  ...LocationsPaginated_data
}

fragment LocationsPaginatedBidirectional_data_1TJkD9 on RootQuery {
  allLocations(first: $count) {
    edges {
      node {
        id
        ...Location_location
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}

fragment LocationsPaginatedRefetch_data on RootQuery {
  incrementalPagination: allLocations(first: 20) {
    edges {
      node {
        id
        ...Location_location
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment LocationsPaginated_data on RootQuery {
  incrementalPagination2: allLocations(first: 20) {
    edges {
      node {
        id
        ...Location_location
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment Location_location on Location {
  name
  ...CountryFlag_location
}

fragment CountryFlag_location on Location {
  country {
    code
    name
  }
  code
  name
  type
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "code",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "country",
  "storageKey": null,
  "args": null,
  "concreteType": "LocationArea",
  "plural": false,
  "selections": [
    (v4/*: any*/),
    (v3/*: any*/)
  ]
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "hasNextPage",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "endCursor",
  "args": null,
  "storageKey": null
},
v9 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  }
],
v10 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "edges",
    "storageKey": null,
    "args": null,
    "concreteType": "LocationEdge",
    "plural": true,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "Location",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v5/*: any*/),
          (v4/*: any*/),
          (v6/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "cursor",
        "args": null,
        "storageKey": null
      }
    ]
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "pageInfo",
    "storageKey": null,
    "args": null,
    "concreteType": "PageInfo",
    "plural": false,
    "selections": [
      (v8/*: any*/),
      (v7/*: any*/)
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "HomepageQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "LocationsPaginatedBidirectional_data",
        "args": (v1/*: any*/)
      },
      {
        "kind": "FragmentSpread",
        "name": "LocationsPaginatedRefetch_data",
        "args": null
      },
      {
        "kind": "FragmentSpread",
        "name": "LocationsPaginated_data",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HomepageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allLocations",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "LocationConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "LocationEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Location",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v5/*: any*/),
                  (v4/*: any*/),
                  (v6/*: any*/)
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [
              (v7/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasPreviousPage",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "startCursor",
                "args": null,
                "storageKey": null
              },
              (v8/*: any*/)
            ]
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": "incrementalPagination",
        "name": "allLocations",
        "storageKey": "allLocations(first:20)",
        "args": (v9/*: any*/),
        "concreteType": "LocationConnection",
        "plural": false,
        "selections": (v10/*: any*/)
      },
      {
        "kind": "LinkedHandle",
        "alias": "incrementalPagination",
        "name": "allLocations",
        "args": (v9/*: any*/),
        "handle": "connection",
        "key": "allLocations_incrementalPagination",
        "filters": null
      },
      {
        "kind": "LinkedField",
        "alias": "incrementalPagination2",
        "name": "allLocations",
        "storageKey": "allLocations(first:20)",
        "args": (v9/*: any*/),
        "concreteType": "LocationConnection",
        "plural": false,
        "selections": (v10/*: any*/)
      },
      {
        "kind": "LinkedHandle",
        "alias": "incrementalPagination2",
        "name": "allLocations",
        "args": (v9/*: any*/),
        "handle": "connection",
        "key": "allLocations_incrementalPagination2",
        "filters": null
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "HomepageQuery",
    "id": "d870378b4424f439531e7bc3f90ae02e",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node: any).hash = 'da1e002367f01113132353727909b19c';
export default node;
