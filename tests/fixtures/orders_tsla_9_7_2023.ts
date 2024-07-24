let orders = [
    {
        "symbol": "TSLA",
        "orderID": 11608560015,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 3,
            "filledQuantity": 3,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "ETMM",
            "stopPrice": 245.11,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 3
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608560015,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:33:59+0000",
            "closeTime": "2023-09-07T13:36:59+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59303855674,
                    "executionType": "FILL",
                    "quantity": 3,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 3,
                            "mismarkedQuantity": 0,
                            "price": 245.15,
                            "time": "2023-09-07T13:36:59+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608560016,
                    "cancelable": false,
                    "editable": false,
                    "status": "FILLED",
                    "enteredTime": "2023-09-07T13:33:59+0000",
                    "closeTime": "2023-09-07T13:42:39+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 3,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "JNST",
                            "price": 263.71,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 3
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560018,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T13:33:59+0000",
                            "closeTime": "2023-09-07T13:42:39+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "MARKET",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 3,
                            "filledQuantity": 3,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "NITE",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 3
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609217129,
                            "cancelable": false,
                            "editable": false,
                            "status": "FILLED",
                            "enteredTime": "2023-09-07T13:42:39+0000",
                            "closeTime": "2023-09-07T13:42:39+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "orderActivityCollection": [
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59305428914,
                                    "executionType": "FILL",
                                    "quantity": 3,
                                    "orderRemainingQuantity": 0,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 3,
                                            "mismarkedQuantity": 0,
                                            "price": 248.69,
                                            "time": "2023-09-07T13:42:39+0000"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 3,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "SOHO",
                            "stopPrice": 243.25,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 3
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560017,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:33:59+0000",
                            "closeTime": "2023-09-07T13:42:39+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 3,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.11
    },
    {
        "symbol": "TSLA",
        "orderID": 11608560011,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 10,
            "filledQuantity": 10,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "JNST",
            "stopPrice": 245.11,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 10
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608560011,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:33:59+0000",
            "closeTime": "2023-09-07T13:36:57+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59303855462,
                    "executionType": "FILL",
                    "quantity": 10,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 10,
                            "mismarkedQuantity": 10,
                            "price": 245.1,
                            "time": "2023-09-07T13:36:57+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608560012,
                    "cancelable": false,
                    "editable": false,
                    "status": "REJECTED",
                    "enteredTime": "2023-09-07T13:33:59+0000",
                    "closeTime": "2023-09-07T13:36:57+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 10,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 254.41,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 10
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560014,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:33:59+0000",
                            "closeTime": "2023-09-07T13:36:57+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders."
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 10,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 243.25,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 10
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560013,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:33:59+0000",
                            "closeTime": "2023-09-07T13:36:57+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders."
                        }
                    ],
                    "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders.; Order Rejected due to Order: 11608560014"
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 10,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.11
    },
    {
        "symbol": "TSLA",
        "orderID": 11608560006,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 10,
            "filledQuantity": 10,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "NITE",
            "stopPrice": 245.11,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 10
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608560006,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:33:59+0000",
            "closeTime": "2023-09-07T13:36:58+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59303855572,
                    "executionType": "FILL",
                    "quantity": 10,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 10,
                            "mismarkedQuantity": 0,
                            "price": 245.1399,
                            "time": "2023-09-07T13:36:58+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608560007,
                    "cancelable": false,
                    "editable": false,
                    "status": "FILLED",
                    "enteredTime": "2023-09-07T13:33:59+0000",
                    "closeTime": "2023-09-07T13:58:36+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 10,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "ETMM",
                            "stopPrice": 244.55,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 10
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609218388,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:58:22+0000",
                            "closeTime": "2023-09-07T13:58:36+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 10,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "SOHO",
                            "price": 245.69,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 10
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609218254,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T13:56:15+0000",
                            "closeTime": "2023-09-07T13:56:24+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 10,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "CDRG",
                            "price": 246.44,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 10
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609218264,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T13:56:23+0000",
                            "closeTime": "2023-09-07T13:56:37+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 10,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "SOHO",
                            "stopPrice": 243.25,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 10
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560008,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T13:33:59+0000",
                            "closeTime": "2023-09-07T13:58:22+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 10,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "SOHO",
                            "price": 252.55,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 10
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560009,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T13:33:59+0000",
                            "closeTime": "2023-09-07T13:56:15+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 10,
                            "filledQuantity": 10,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "JNST",
                            "price": 245.69,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 10
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609218283,
                            "cancelable": false,
                            "editable": false,
                            "status": "FILLED",
                            "enteredTime": "2023-09-07T13:56:37+0000",
                            "closeTime": "2023-09-07T13:58:36+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "orderActivityCollection": [
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59307459110,
                                    "executionType": "FILL",
                                    "quantity": 10,
                                    "orderRemainingQuantity": 0,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 10,
                                            "mismarkedQuantity": 0,
                                            "price": 245.69,
                                            "time": "2023-09-07T13:58:36+0000"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 10,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.11
    },
    {
        "symbol": "TSLA",
        "orderID": 11608560002,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 10,
            "filledQuantity": 10,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "UBSS",
            "stopPrice": 245.11,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 10
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608560002,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:33:59+0000",
            "closeTime": "2023-09-07T13:36:57+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59303855449,
                    "executionType": "FILL",
                    "quantity": 10,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 10,
                            "mismarkedQuantity": 10,
                            "price": 245.139,
                            "time": "2023-09-07T13:36:57+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608560003,
                    "cancelable": false,
                    "editable": false,
                    "status": "REJECTED",
                    "enteredTime": "2023-09-07T13:33:59+0000",
                    "closeTime": "2023-09-07T13:36:57+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 10,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 243.25,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 10
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560004,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:33:59+0000",
                            "closeTime": "2023-09-07T13:36:57+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders."
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 10,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 250.69,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 10
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560005,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:33:59+0000",
                            "closeTime": "2023-09-07T13:36:57+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders.; Order Rejected due to Order: 11608560004"
                        }
                    ],
                    "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders.; Order Rejected due to Order: 11608560004"
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 10,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.11
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559982,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 10,
            "filledQuantity": 10,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "SOHO",
            "stopPrice": 245.11,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 10
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559982,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:33:58+0000",
            "closeTime": "2023-09-07T13:36:58+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59303855658,
                    "executionType": "FILL",
                    "quantity": 10,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 10,
                            "mismarkedQuantity": 0,
                            "price": 245.14,
                            "time": "2023-09-07T13:36:58+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559983,
                    "cancelable": false,
                    "editable": false,
                    "status": "FILLED",
                    "enteredTime": "2023-09-07T13:33:58+0000",
                    "closeTime": "2023-09-07T13:37:27+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 10,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "NITE",
                            "stopPrice": 243.25,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 10
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559984,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:33:58+0000",
                            "closeTime": "2023-09-07T13:37:27+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 10,
                            "filledQuantity": 10,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "JNST",
                            "price": 246.6,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 10
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559985,
                            "cancelable": false,
                            "editable": false,
                            "status": "FILLED",
                            "enteredTime": "2023-09-07T13:33:58+0000",
                            "closeTime": "2023-09-07T13:37:26+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "orderActivityCollection": [
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59303856115,
                                    "executionType": "FILL",
                                    "quantity": 10,
                                    "orderRemainingQuantity": 0,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 10,
                                            "mismarkedQuantity": 0,
                                            "price": 246.6,
                                            "time": "2023-09-07T13:37:26+0000"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 10,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.11
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559471,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 28,
            "filledQuantity": 0,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "JNST",
            "stopPrice": 243.76,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "SELL_SHORT",
                    "positionEffect": "OPENING",
                    "quantity": 28
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559471,
            "cancelable": false,
            "editable": false,
            "status": "CANCELED",
            "enteredTime": "2023-09-07T13:31:16+0000",
            "closeTime": "2023-09-07T13:31:28+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559472,
                    "cancelable": false,
                    "editable": false,
                    "status": "CANCELED",
                    "enteredTime": "2023-09-07T13:31:16+0000",
                    "closeTime": "2023-09-07T13:31:27+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 241.06,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559474,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:31:16+0000",
                            "closeTime": "2023-09-07T13:31:27+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 245.11,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559473,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:31:16+0000",
                            "closeTime": "2023-09-07T13:31:27+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 28,
        "isBuy": false,
        "positionEffectIsOpen": true,
        "price": 243.76
    },
    {
        "symbol": "TSLA",
        "orderID": 11610045570,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "MARKET",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 90,
            "filledQuantity": 90,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "CDRG",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "SELL",
                    "positionEffect": "CLOSING",
                    "quantity": 90
                }
            ],
            "orderStrategyType": "SINGLE",
            "orderId": 11610045570,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T14:13:10+0000",
            "closeTime": "2023-09-07T14:13:11+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59309548801,
                    "executionType": "FILL",
                    "quantity": 90,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 90,
                            "mismarkedQuantity": 0,
                            "price": 246.6248,
                            "time": "2023-09-07T14:13:11+0000"
                        }
                    ]
                }
            ]
        },
        "orderType": "MARKET",
        "quantity": 90,
        "isBuy": false,
        "positionEffectIsOpen": false,
        "price": 0
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559467,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 28,
            "filledQuantity": 0,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "NITE",
            "stopPrice": 243.76,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "SELL_SHORT",
                    "positionEffect": "OPENING",
                    "quantity": 28
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559467,
            "cancelable": false,
            "editable": false,
            "status": "CANCELED",
            "enteredTime": "2023-09-07T13:31:16+0000",
            "closeTime": "2023-09-07T13:31:28+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559468,
                    "cancelable": false,
                    "editable": false,
                    "status": "CANCELED",
                    "enteredTime": "2023-09-07T13:31:16+0000",
                    "closeTime": "2023-09-07T13:31:27+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 241.19,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559470,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:31:16+0000",
                            "closeTime": "2023-09-07T13:31:27+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 245.11,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559469,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:31:16+0000",
                            "closeTime": "2023-09-07T13:31:27+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 28,
        "isBuy": false,
        "positionEffectIsOpen": true,
        "price": 243.76
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559977,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 10,
            "filledQuantity": 10,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "JNST",
            "stopPrice": 245.11,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 10
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559977,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:33:58+0000",
            "closeTime": "2023-09-07T13:36:56+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59303855410,
                    "executionType": "FILL",
                    "quantity": 10,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 10,
                            "mismarkedQuantity": 10,
                            "price": 245.1,
                            "time": "2023-09-07T13:36:56+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559978,
                    "cancelable": false,
                    "editable": false,
                    "status": "REJECTED",
                    "enteredTime": "2023-09-07T13:33:58+0000",
                    "closeTime": "2023-09-07T13:36:56+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 10,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 243.25,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 10
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559979,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:33:58+0000",
                            "closeTime": "2023-09-07T13:36:56+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders."
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 10,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 247.9,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 10
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559980,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:33:58+0000",
                            "closeTime": "2023-09-07T13:36:56+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders.; Order Rejected due to Order: 11608559979"
                        }
                    ],
                    "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders.; Order Rejected due to Order: 11608559979"
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 10,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.11
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559463,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 28,
            "filledQuantity": 0,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "SOHO",
            "stopPrice": 243.76,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "SELL_SHORT",
                    "positionEffect": "OPENING",
                    "quantity": 28
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559463,
            "cancelable": false,
            "editable": false,
            "status": "CANCELED",
            "enteredTime": "2023-09-07T13:31:16+0000",
            "closeTime": "2023-09-07T13:31:28+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559464,
                    "cancelable": false,
                    "editable": false,
                    "status": "CANCELED",
                    "enteredTime": "2023-09-07T13:31:16+0000",
                    "closeTime": "2023-09-07T13:31:27+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 242.61,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559466,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:31:16+0000",
                            "closeTime": "2023-09-07T13:31:27+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 245.11,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559465,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:31:16+0000",
                            "closeTime": "2023-09-07T13:31:27+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 28,
        "isBuy": false,
        "positionEffectIsOpen": true,
        "price": 243.76
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559973,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 10,
            "filledQuantity": 10,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "NITE",
            "stopPrice": 245.11,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 10
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559973,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:33:58+0000",
            "closeTime": "2023-09-07T13:36:56+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59303855384,
                    "executionType": "FILL",
                    "quantity": 10,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 10,
                            "mismarkedQuantity": 10,
                            "price": 245.1399,
                            "time": "2023-09-07T13:36:56+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559974,
                    "cancelable": false,
                    "editable": false,
                    "status": "REJECTED",
                    "enteredTime": "2023-09-07T13:33:58+0000",
                    "closeTime": "2023-09-07T13:36:56+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 10,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 243.25,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 10
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559975,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:33:58+0000",
                            "closeTime": "2023-09-07T13:36:56+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders."
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 10,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 246.78,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 10
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559976,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:33:58+0000",
                            "closeTime": "2023-09-07T13:36:56+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders.; Order Rejected due to Order: 11608559975"
                        }
                    ],
                    "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders.; Order Rejected due to Order: 11608559975"
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 10,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.11
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559459,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 28,
            "filledQuantity": 0,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "ETMM",
            "stopPrice": 243.76,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "SELL_SHORT",
                    "positionEffect": "OPENING",
                    "quantity": 28
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559459,
            "cancelable": false,
            "editable": false,
            "status": "CANCELED",
            "enteredTime": "2023-09-07T13:31:16+0000",
            "closeTime": "2023-09-07T13:31:28+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559460,
                    "cancelable": false,
                    "editable": false,
                    "status": "CANCELED",
                    "enteredTime": "2023-09-07T13:31:16+0000",
                    "closeTime": "2023-09-07T13:31:28+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 241.73,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559462,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:31:16+0000",
                            "closeTime": "2023-09-07T13:31:28+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 245.11,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559461,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:31:16+0000",
                            "closeTime": "2023-09-07T13:31:28+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 28,
        "isBuy": false,
        "positionEffectIsOpen": true,
        "price": 243.76
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559998,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 10,
            "filledQuantity": 10,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "SOHO",
            "stopPrice": 245.11,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 10
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559998,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:33:59+0000",
            "closeTime": "2023-09-07T13:36:56+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59303855363,
                    "executionType": "FILL",
                    "quantity": 10,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 10,
                            "mismarkedQuantity": 10,
                            "price": 245.14,
                            "time": "2023-09-07T13:36:56+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559999,
                    "cancelable": false,
                    "editable": false,
                    "status": "REJECTED",
                    "enteredTime": "2023-09-07T13:33:59+0000",
                    "closeTime": "2023-09-07T13:36:56+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 10,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 243.25,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 10
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560000,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:33:59+0000",
                            "closeTime": "2023-09-07T13:36:56+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders."
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 10,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 248.83,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 10
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560001,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:33:59+0000",
                            "closeTime": "2023-09-07T13:36:56+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders.; Order Rejected due to Order: 11608560000"
                        }
                    ],
                    "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders.; Order Rejected due to Order: 11608560000"
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 10,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.11
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559487,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 28,
            "filledQuantity": 0,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "JNST",
            "stopPrice": 243.76,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "SELL_SHORT",
                    "positionEffect": "OPENING",
                    "quantity": 28
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559487,
            "cancelable": false,
            "editable": false,
            "status": "CANCELED",
            "enteredTime": "2023-09-07T13:31:17+0000",
            "closeTime": "2023-09-07T13:31:28+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559488,
                    "cancelable": false,
                    "editable": false,
                    "status": "CANCELED",
                    "enteredTime": "2023-09-07T13:31:17+0000",
                    "closeTime": "2023-09-07T13:31:27+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 242.54,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559490,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:31:17+0000",
                            "closeTime": "2023-09-07T13:31:27+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 245.11,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559489,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:31:17+0000",
                            "closeTime": "2023-09-07T13:31:27+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 28,
        "isBuy": false,
        "positionEffectIsOpen": true,
        "price": 243.76
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559994,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 10,
            "filledQuantity": 10,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "JNST",
            "stopPrice": 245.11,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 10
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559994,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:33:59+0000",
            "closeTime": "2023-09-07T13:36:57+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59303855460,
                    "executionType": "FILL",
                    "quantity": 10,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 10,
                            "mismarkedQuantity": 10,
                            "price": 245.1,
                            "time": "2023-09-07T13:36:57+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559995,
                    "cancelable": false,
                    "editable": false,
                    "status": "REJECTED",
                    "enteredTime": "2023-09-07T13:33:59+0000",
                    "closeTime": "2023-09-07T13:36:57+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 10,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 243.25,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 10
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559996,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:33:59+0000",
                            "closeTime": "2023-09-07T13:36:57+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders."
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 10,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 246.69,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 10
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559997,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:33:59+0000",
                            "closeTime": "2023-09-07T13:36:57+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders.; Order Rejected due to Order: 11608559996"
                        }
                    ],
                    "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders.; Order Rejected due to Order: 11608559996"
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 10,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.11
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559483,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 23,
            "filledQuantity": 0,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "NITE",
            "stopPrice": 243.76,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "SELL_SHORT",
                    "positionEffect": "OPENING",
                    "quantity": 23
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559483,
            "cancelable": false,
            "editable": false,
            "status": "CANCELED",
            "enteredTime": "2023-09-07T13:31:17+0000",
            "closeTime": "2023-09-07T13:31:28+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559484,
                    "cancelable": false,
                    "editable": false,
                    "status": "CANCELED",
                    "enteredTime": "2023-09-07T13:31:17+0000",
                    "closeTime": "2023-09-07T13:31:27+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 23,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 230.26,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 23
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559486,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:31:17+0000",
                            "closeTime": "2023-09-07T13:31:27+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 23,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 245.11,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 23
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559485,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:31:17+0000",
                            "closeTime": "2023-09-07T13:31:27+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 23,
        "isBuy": false,
        "positionEffectIsOpen": true,
        "price": 243.76
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559990,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 10,
            "filledQuantity": 10,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "NITE",
            "stopPrice": 245.11,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 10
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559990,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:33:59+0000",
            "closeTime": "2023-09-07T13:36:58+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59303855647,
                    "executionType": "FILL",
                    "quantity": 10,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 10,
                            "mismarkedQuantity": 0,
                            "price": 245.105,
                            "time": "2023-09-07T13:36:58+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559991,
                    "cancelable": false,
                    "editable": false,
                    "status": "FILLED",
                    "enteredTime": "2023-09-07T13:33:59+0000",
                    "closeTime": "2023-09-07T13:39:34+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "MARKET",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 10,
                            "filledQuantity": 10,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "CDRG",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 10
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560811,
                            "cancelable": false,
                            "editable": false,
                            "status": "FILLED",
                            "enteredTime": "2023-09-07T13:39:34+0000",
                            "closeTime": "2023-09-07T13:39:34+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "orderActivityCollection": [
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59303857323,
                                    "executionType": "FILL",
                                    "quantity": 10,
                                    "orderRemainingQuantity": 0,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 10,
                                            "mismarkedQuantity": 0,
                                            "price": 248.1821,
                                            "time": "2023-09-07T13:39:34+0000"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 10,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "JNST",
                            "stopPrice": 243.25,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 10
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559992,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:33:59+0000",
                            "closeTime": "2023-09-07T13:39:34+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 10,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "CDRG",
                            "price": 248.46,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 10
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559993,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T13:33:59+0000",
                            "closeTime": "2023-09-07T13:39:34+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 10,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.11
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559479,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 28,
            "filledQuantity": 0,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "SOHO",
            "stopPrice": 243.76,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "SELL_SHORT",
                    "positionEffect": "OPENING",
                    "quantity": 28
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559479,
            "cancelable": false,
            "editable": false,
            "status": "CANCELED",
            "enteredTime": "2023-09-07T13:31:17+0000",
            "closeTime": "2023-09-07T13:31:28+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559480,
                    "cancelable": false,
                    "editable": false,
                    "status": "CANCELED",
                    "enteredTime": "2023-09-07T13:31:17+0000",
                    "closeTime": "2023-09-07T13:31:28+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 238.36,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559482,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:31:17+0000",
                            "closeTime": "2023-09-07T13:31:28+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 245.11,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559481,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:31:17+0000",
                            "closeTime": "2023-09-07T13:31:28+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 28,
        "isBuy": false,
        "positionEffectIsOpen": true,
        "price": 243.76
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559986,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 10,
            "filledQuantity": 10,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "ETMM",
            "stopPrice": 245.11,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 10
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559986,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:33:58+0000",
            "closeTime": "2023-09-07T13:36:58+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59303855619,
                    "executionType": "FILL",
                    "quantity": 10,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 10,
                            "mismarkedQuantity": 0,
                            "price": 245.17,
                            "time": "2023-09-07T13:36:58+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559987,
                    "cancelable": false,
                    "editable": false,
                    "status": "FILLED",
                    "enteredTime": "2023-09-07T13:33:58+0000",
                    "closeTime": "2023-09-07T13:51:27+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 10,
                            "filledQuantity": 10,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "EDGX",
                            "price": 246.87,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 10
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609217844,
                            "cancelable": false,
                            "editable": false,
                            "status": "FILLED",
                            "enteredTime": "2023-09-07T13:51:10+0000",
                            "closeTime": "2023-09-07T13:51:27+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "orderActivityCollection": [
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59305431968,
                                    "executionType": "FILL",
                                    "quantity": 10,
                                    "orderRemainingQuantity": 0,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 10,
                                            "mismarkedQuantity": 0,
                                            "price": 246.87,
                                            "time": "2023-09-07T13:51:27+0000"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 10,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "JNST",
                            "price": 249.12,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 10
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609217340,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T13:44:47+0000",
                            "closeTime": "2023-09-07T13:45:09+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 10,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "CDRG",
                            "price": 249.47,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 10
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609217037,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T13:41:45+0000",
                            "closeTime": "2023-09-07T13:44:47+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 10,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "CDRG",
                            "price": 248.74,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 10
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609217365,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T13:45:08+0000",
                            "closeTime": "2023-09-07T13:51:10+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 10,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "NITE",
                            "stopPrice": 243.25,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 10
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559988,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:33:58+0000",
                            "closeTime": "2023-09-07T13:51:27+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 10,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "JNST",
                            "price": 248.64,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 10
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559989,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T13:33:58+0000",
                            "closeTime": "2023-09-07T13:41:46+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 10,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.11
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559475,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 28,
            "filledQuantity": 0,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "ETMM",
            "stopPrice": 243.76,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "SELL_SHORT",
                    "positionEffect": "OPENING",
                    "quantity": 28
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559475,
            "cancelable": false,
            "editable": false,
            "status": "CANCELED",
            "enteredTime": "2023-09-07T13:31:17+0000",
            "closeTime": "2023-09-07T13:31:28+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559476,
                    "cancelable": false,
                    "editable": false,
                    "status": "CANCELED",
                    "enteredTime": "2023-09-07T13:31:17+0000",
                    "closeTime": "2023-09-07T13:31:28+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 239.71,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559478,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:31:17+0000",
                            "closeTime": "2023-09-07T13:31:28+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 245.11,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559477,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:31:17+0000",
                            "closeTime": "2023-09-07T13:31:28+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 28,
        "isBuy": false,
        "positionEffectIsOpen": true,
        "price": 243.76
    },
    {
        "symbol": "TSLA",
        "orderID": 11608560459,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 3,
            "filledQuantity": 3,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "ETMM",
            "stopPrice": 245.11,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 3
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608560459,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:36:54+0000",
            "closeTime": "2023-09-07T13:36:58+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59303855591,
                    "executionType": "FILL",
                    "quantity": 3,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 3,
                            "mismarkedQuantity": 0,
                            "price": 245.15,
                            "time": "2023-09-07T13:36:58+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608560460,
                    "cancelable": false,
                    "editable": false,
                    "status": "FILLED",
                    "enteredTime": "2023-09-07T13:36:54+0000",
                    "closeTime": "2023-09-07T13:41:45+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 3,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "SOHO",
                            "price": 252.55,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 3
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560462,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T13:36:54+0000",
                            "closeTime": "2023-09-07T13:41:14+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 3,
                            "filledQuantity": 3,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "JNST",
                            "price": 248.38,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 3
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560992,
                            "cancelable": false,
                            "editable": false,
                            "status": "FILLED",
                            "enteredTime": "2023-09-07T13:41:14+0000",
                            "closeTime": "2023-09-07T13:41:45+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "orderActivityCollection": [
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59305428411,
                                    "executionType": "FILL",
                                    "quantity": 3,
                                    "orderRemainingQuantity": 0,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 3,
                                            "mismarkedQuantity": 0,
                                            "price": 248.38,
                                            "time": "2023-09-07T13:41:45+0000"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 3,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "JNST",
                            "stopPrice": 243.25,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 3
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560461,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:36:54+0000",
                            "closeTime": "2023-09-07T13:41:45+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 3,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.11
    },
    {
        "symbol": "TSLA",
        "orderID": 11608560455,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 3,
            "filledQuantity": 3,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "NITE",
            "stopPrice": 245.11,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 3
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608560455,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:36:54+0000",
            "closeTime": "2023-09-07T13:36:57+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59303855507,
                    "executionType": "FILL",
                    "quantity": 3,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 3,
                            "mismarkedQuantity": 3,
                            "price": 245.1399,
                            "time": "2023-09-07T13:36:57+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608560456,
                    "cancelable": false,
                    "editable": false,
                    "status": "REJECTED",
                    "enteredTime": "2023-09-07T13:36:54+0000",
                    "closeTime": "2023-09-07T13:36:57+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 3,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 250.69,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 3
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560458,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:36:54+0000",
                            "closeTime": "2023-09-07T13:36:57+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders."
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 3,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 243.25,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 3
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560457,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:36:54+0000",
                            "closeTime": "2023-09-07T13:36:57+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders."
                        }
                    ],
                    "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders.; Order Rejected due to Order: 11608560458"
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 3,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.11
    },
    {
        "symbol": "TSLA",
        "orderID": 11608560451,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 3,
            "filledQuantity": 3,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "SOHO",
            "stopPrice": 245.11,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 3
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608560451,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:36:54+0000",
            "closeTime": "2023-09-07T13:36:59+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59303855758,
                    "executionType": "FILL",
                    "quantity": 3,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 3,
                            "mismarkedQuantity": 0,
                            "price": 245.14,
                            "time": "2023-09-07T13:36:59+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608560452,
                    "cancelable": false,
                    "editable": false,
                    "status": "FILLED",
                    "enteredTime": "2023-09-07T13:36:54+0000",
                    "closeTime": "2023-09-07T13:41:59+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 3,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "JNST",
                            "price": 248.83,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 3
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560454,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T13:36:54+0000",
                            "closeTime": "2023-09-07T13:41:58+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "MARKET",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 3,
                            "filledQuantity": 3,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "NITE",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 3
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609217048,
                            "cancelable": false,
                            "editable": false,
                            "status": "FILLED",
                            "enteredTime": "2023-09-07T13:41:58+0000",
                            "closeTime": "2023-09-07T13:41:58+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "orderActivityCollection": [
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59305428502,
                                    "executionType": "FILL",
                                    "quantity": 3,
                                    "orderRemainingQuantity": 0,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 3,
                                            "mismarkedQuantity": 0,
                                            "price": 248.325,
                                            "time": "2023-09-07T13:41:58+0000"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 3,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "NITE",
                            "stopPrice": 243.25,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 3
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560453,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:36:54+0000",
                            "closeTime": "2023-09-07T13:41:59+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 3,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.11
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559455,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 28,
            "filledQuantity": 0,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "NITE",
            "stopPrice": 243.76,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "SELL_SHORT",
                    "positionEffect": "OPENING",
                    "quantity": 28
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559455,
            "cancelable": false,
            "editable": false,
            "status": "CANCELED",
            "enteredTime": "2023-09-07T13:31:16+0000",
            "closeTime": "2023-09-07T13:31:28+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559456,
                    "cancelable": false,
                    "editable": false,
                    "status": "CANCELED",
                    "enteredTime": "2023-09-07T13:31:16+0000",
                    "closeTime": "2023-09-07T13:31:28+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 241.33,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559458,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:31:16+0000",
                            "closeTime": "2023-09-07T13:31:28+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 245.11,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559457,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:31:16+0000",
                            "closeTime": "2023-09-07T13:31:28+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 28,
        "isBuy": false,
        "positionEffectIsOpen": true,
        "price": 243.76
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559451,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 28,
            "filledQuantity": 0,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "JNST",
            "stopPrice": 243.76,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "SELL_SHORT",
                    "positionEffect": "OPENING",
                    "quantity": 28
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559451,
            "cancelable": false,
            "editable": false,
            "status": "CANCELED",
            "enteredTime": "2023-09-07T13:31:16+0000",
            "closeTime": "2023-09-07T13:31:28+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559452,
                    "cancelable": false,
                    "editable": false,
                    "status": "CANCELED",
                    "enteredTime": "2023-09-07T13:31:16+0000",
                    "closeTime": "2023-09-07T13:31:28+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 242.68,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559454,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:31:16+0000",
                            "closeTime": "2023-09-07T13:31:28+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 245.11,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559453,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:31:16+0000",
                            "closeTime": "2023-09-07T13:31:28+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 28,
        "isBuy": false,
        "positionEffectIsOpen": true,
        "price": 243.76
    },
    {
        "symbol": "TSLA",
        "orderID": 11609218868,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "MARKET",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 28,
            "filledQuantity": 28,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "ETMM",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 28
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11609218868,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T14:04:10+0000",
            "closeTime": "2023-09-07T14:04:10+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59307461034,
                    "executionType": "FILL",
                    "quantity": 28,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 28,
                            "mismarkedQuantity": 0,
                            "price": 244.2363,
                            "time": "2023-09-07T14:04:10+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11609218869,
                    "cancelable": false,
                    "editable": false,
                    "status": "FILLED",
                    "enteredTime": "2023-09-07T14:04:10+0000",
                    "closeTime": "2023-09-07T14:11:30+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "CDRG",
                            "price": 244.85,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609218933,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T14:05:13+0000",
                            "closeTime": "2023-09-07T14:05:51+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "NITE",
                            "stopPrice": 243.26,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609218870,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T14:04:10+0000",
                            "closeTime": "2023-09-07T14:04:44+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "CDRG",
                            "price": 244.5,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609218871,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T14:04:10+0000",
                            "closeTime": "2023-09-07T14:04:21+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "JNST",
                            "price": 246.5,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11610045189,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T14:07:35+0000",
                            "closeTime": "2023-09-07T14:11:08+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 28,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "JNST",
                            "price": 246.68,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11610045413,
                            "cancelable": false,
                            "editable": false,
                            "status": "FILLED",
                            "enteredTime": "2023-09-07T14:11:22+0000",
                            "closeTime": "2023-09-07T14:11:30+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "orderActivityCollection": [
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59309548301,
                                    "executionType": "FILL",
                                    "quantity": 28,
                                    "orderRemainingQuantity": 0,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 28,
                                            "mismarkedQuantity": 0,
                                            "price": 246.68,
                                            "time": "2023-09-07T14:11:30+0000"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "NITE",
                            "price": 246.84,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11610045386,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T14:11:08+0000",
                            "closeTime": "2023-09-07T14:11:22+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "UBSS",
                            "price": 244.62,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609218879,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T14:04:21+0000",
                            "closeTime": "2023-09-07T14:04:24+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "JNST",
                            "stopPrice": 244.7,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11610045421,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T14:11:25+0000",
                            "closeTime": "2023-09-07T14:11:30+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "EDGX",
                            "price": 245.27,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11610045036,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T14:05:51+0000",
                            "closeTime": "2023-09-07T14:06:45+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "SOHO",
                            "price": 244.71,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609218885,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T14:04:24+0000",
                            "closeTime": "2023-09-07T14:05:13+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "NITE",
                            "stopPrice": 243.74,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609218913,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T14:04:44+0000",
                            "closeTime": "2023-09-07T14:10:54+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "NITE",
                            "price": 245.87,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11610045143,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T14:06:44+0000",
                            "closeTime": "2023-09-07T14:07:35+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "JNST",
                            "stopPrice": 246.12,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11610045400,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T14:11:14+0000",
                            "closeTime": "2023-09-07T14:11:16+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "SOHO",
                            "stopPrice": 244.76,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11610045368,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T14:10:54+0000",
                            "closeTime": "2023-09-07T14:11:14+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "SOHO",
                            "stopPrice": 246.09,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11610045405,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T14:11:16+0000",
                            "closeTime": "2023-09-07T14:11:25+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "MARKET",
        "quantity": 28,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 0
    },
    {
        "symbol": "TSLA",
        "orderID": 11608560429,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 3,
            "filledQuantity": 3,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "JNST",
            "stopPrice": 245.11,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 3
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608560429,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:36:54+0000",
            "closeTime": "2023-09-07T13:36:57+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59303855518,
                    "executionType": "FILL",
                    "quantity": 3,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 3,
                            "mismarkedQuantity": 3,
                            "price": 245.1,
                            "time": "2023-09-07T13:36:57+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608560430,
                    "cancelable": false,
                    "editable": false,
                    "status": "REJECTED",
                    "enteredTime": "2023-09-07T13:36:54+0000",
                    "closeTime": "2023-09-07T13:36:57+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 3,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 243.25,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 3
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560431,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:36:54+0000",
                            "closeTime": "2023-09-07T13:36:57+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders."
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 3,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 246.69,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 3
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560432,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:36:54+0000",
                            "closeTime": "2023-09-07T13:36:57+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders.; Order Rejected due to Order: 11608560431"
                        }
                    ],
                    "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders.; Order Rejected due to Order: 11608560431"
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 3,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.11
    },
    {
        "symbol": "TSLA",
        "orderID": 11608560425,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 3,
            "filledQuantity": 3,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "SOHO",
            "stopPrice": 245.11,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 3
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608560425,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:36:54+0000",
            "closeTime": "2023-09-07T13:36:56+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59303855426,
                    "executionType": "FILL",
                    "quantity": 3,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 3,
                            "mismarkedQuantity": 3,
                            "price": 245.14,
                            "time": "2023-09-07T13:36:56+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608560426,
                    "cancelable": false,
                    "editable": false,
                    "status": "REJECTED",
                    "enteredTime": "2023-09-07T13:36:54+0000",
                    "closeTime": "2023-09-07T13:36:57+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 3,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 243.25,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 3
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560427,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:36:54+0000",
                            "closeTime": "2023-09-07T13:36:57+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders."
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 3,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 246.6,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 3
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560428,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:36:54+0000",
                            "closeTime": "2023-09-07T13:36:57+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders.; Order Rejected due to Order: 11608560427"
                        }
                    ],
                    "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders.; Order Rejected due to Order: 11608560427"
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 3,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.11
    },
    {
        "symbol": "TSLA",
        "orderID": 11609218872,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "MARKET",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 28,
            "filledQuantity": 28,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "CDRG",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 28
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11609218872,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T14:04:12+0000",
            "closeTime": "2023-09-07T14:04:12+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59307461057,
                    "executionType": "FILL",
                    "quantity": 28,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 28,
                            "mismarkedQuantity": 0,
                            "price": 244.2778,
                            "time": "2023-09-07T14:04:12+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11609218873,
                    "cancelable": false,
                    "editable": false,
                    "status": "FILLED",
                    "enteredTime": "2023-09-07T14:04:12+0000",
                    "closeTime": "2023-09-07T14:05:10+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "ETMM",
                            "stopPrice": 243.26,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609218874,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T14:04:12+0000",
                            "closeTime": "2023-09-07T14:04:44+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "JNST",
                            "stopPrice": 243.74,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609218915,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T14:04:44+0000",
                            "closeTime": "2023-09-07T14:05:10+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 28,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "JNST",
                            "price": 244.5,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609218875,
                            "cancelable": false,
                            "editable": false,
                            "status": "FILLED",
                            "enteredTime": "2023-09-07T14:04:12+0000",
                            "closeTime": "2023-09-07T14:05:10+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "orderActivityCollection": [
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59307461339,
                                    "executionType": "FILL",
                                    "quantity": 28,
                                    "orderRemainingQuantity": 0,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 28,
                                            "mismarkedQuantity": 0,
                                            "price": 244.5,
                                            "time": "2023-09-07T14:05:10+0000"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "orderType": "MARKET",
        "quantity": 28,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 0
    },
    {
        "symbol": "TSLA",
        "orderID": 11608560445,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 3,
            "filledQuantity": 3,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "JNST",
            "stopPrice": 245.11,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 3
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608560445,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:36:54+0000",
            "closeTime": "2023-09-07T13:36:58+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59303855550,
                    "executionType": "FILL",
                    "quantity": 2,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 2,
                            "mismarkedQuantity": 0,
                            "price": 245.13,
                            "time": "2023-09-07T13:36:58+0000"
                        }
                    ]
                },
                {
                    "activityType": "EXECUTION",
                    "activityId": 59303855531,
                    "executionType": "FILL",
                    "quantity": 1,
                    "orderRemainingQuantity": 2,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 1,
                            "mismarkedQuantity": 1,
                            "price": 245.1,
                            "time": "2023-09-07T13:36:57+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608560446,
                    "cancelable": false,
                    "editable": false,
                    "status": "FILLED",
                    "enteredTime": "2023-09-07T13:36:54+0000",
                    "closeTime": "2023-09-07T13:38:53+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 3,
                            "filledQuantity": 3,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "MEMX",
                            "price": 247.36,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 3
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560551,
                            "cancelable": false,
                            "editable": false,
                            "status": "FILLED",
                            "enteredTime": "2023-09-07T13:37:34+0000",
                            "closeTime": "2023-09-07T13:38:52+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "orderActivityCollection": [
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59303856929,
                                    "executionType": "FILL",
                                    "quantity": 3,
                                    "orderRemainingQuantity": 0,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 3,
                                            "mismarkedQuantity": 0,
                                            "price": 247.36,
                                            "time": "2023-09-07T13:38:52+0000"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 3,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "JNST",
                            "stopPrice": 243.25,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 3
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560447,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:36:54+0000",
                            "closeTime": "2023-09-07T13:38:53+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 3,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "SOHO",
                            "price": 246.78,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 3
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560448,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T13:36:54+0000",
                            "closeTime": "2023-09-07T13:37:34+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 3,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.11
    },
    {
        "symbol": "TSLA",
        "orderID": 11608560441,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 3,
            "filledQuantity": 3,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "ETMM",
            "stopPrice": 245.11,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 3
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608560441,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:36:54+0000",
            "closeTime": "2023-09-07T13:36:59+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59303855744,
                    "executionType": "FILL",
                    "quantity": 3,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 3,
                            "mismarkedQuantity": 0,
                            "price": 245.14,
                            "time": "2023-09-07T13:36:59+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608560442,
                    "cancelable": false,
                    "editable": false,
                    "status": "FILLED",
                    "enteredTime": "2023-09-07T13:36:54+0000",
                    "closeTime": "2023-09-07T13:39:08+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 3,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "JNST",
                            "stopPrice": 243.25,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 3
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560443,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:36:54+0000",
                            "closeTime": "2023-09-07T13:39:08+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 3,
                            "filledQuantity": 3,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "NITE",
                            "price": 247.9,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 3
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560444,
                            "cancelable": false,
                            "editable": false,
                            "status": "FILLED",
                            "enteredTime": "2023-09-07T13:36:54+0000",
                            "closeTime": "2023-09-07T13:39:08+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "orderActivityCollection": [
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59303857069,
                                    "executionType": "FILL",
                                    "quantity": 3,
                                    "orderRemainingQuantity": 0,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 3,
                                            "mismarkedQuantity": 0,
                                            "price": 247.9,
                                            "time": "2023-09-07T13:39:08+0000"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 3,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.11
    },
    {
        "symbol": "TSLA",
        "orderID": 11608560437,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 3,
            "filledQuantity": 3,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "NITE",
            "stopPrice": 245.11,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 3
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608560437,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:36:54+0000",
            "closeTime": "2023-09-07T13:36:58+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59303855637,
                    "executionType": "FILL",
                    "quantity": 3,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 3,
                            "mismarkedQuantity": 0,
                            "price": 245.105,
                            "time": "2023-09-07T13:36:58+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608560438,
                    "cancelable": false,
                    "editable": false,
                    "status": "FILLED",
                    "enteredTime": "2023-09-07T13:36:54+0000",
                    "closeTime": "2023-09-07T13:41:09+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "MARKET",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 3,
                            "filledQuantity": 3,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "ETMM",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 3
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560982,
                            "cancelable": false,
                            "editable": false,
                            "status": "FILLED",
                            "enteredTime": "2023-09-07T13:41:09+0000",
                            "closeTime": "2023-09-07T13:41:09+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "orderActivityCollection": [
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59305428121,
                                    "executionType": "FILL",
                                    "quantity": 3,
                                    "orderRemainingQuantity": 0,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 3,
                                            "mismarkedQuantity": 0,
                                            "price": 247.9524,
                                            "time": "2023-09-07T13:41:09+0000"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 3,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "ETMM",
                            "stopPrice": 243.25,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 3
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560439,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:36:54+0000",
                            "closeTime": "2023-09-07T13:41:09+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 3,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "UBSS",
                            "price": 248.4,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 3
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560964,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T13:41:00+0000",
                            "closeTime": "2023-09-07T13:41:09+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 3,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "SOHO",
                            "price": 248.2,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 3
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560890,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T13:40:08+0000",
                            "closeTime": "2023-09-07T13:41:00+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 3,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "JNST",
                            "price": 248.4,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 3
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560856,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T13:39:56+0000",
                            "closeTime": "2023-09-07T13:40:08+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 3,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "JNST",
                            "price": 248.64,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 3
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560440,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T13:36:54+0000",
                            "closeTime": "2023-09-07T13:39:56+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 3,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.11
    },
    {
        "symbol": "TSLA",
        "orderID": 11608560433,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 3,
            "filledQuantity": 3,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "UBSS",
            "stopPrice": 245.11,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 3
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608560433,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:36:54+0000",
            "closeTime": "2023-09-07T13:37:00+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59303855773,
                    "executionType": "FILL",
                    "quantity": 3,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 3,
                            "mismarkedQuantity": 0,
                            "price": 245.139,
                            "time": "2023-09-07T13:37:00+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608560434,
                    "cancelable": false,
                    "editable": false,
                    "status": "FILLED",
                    "enteredTime": "2023-09-07T13:36:54+0000",
                    "closeTime": "2023-09-07T13:39:27+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 3,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "ETMM",
                            "stopPrice": 243.25,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 3
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560435,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:36:54+0000",
                            "closeTime": "2023-09-07T13:39:27+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "MARKET",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 3,
                            "filledQuantity": 3,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "CDRG",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 3
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560796,
                            "cancelable": false,
                            "editable": false,
                            "status": "FILLED",
                            "enteredTime": "2023-09-07T13:39:26+0000",
                            "closeTime": "2023-09-07T13:39:27+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "orderActivityCollection": [
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59303857230,
                                    "executionType": "FILL",
                                    "quantity": 3,
                                    "orderRemainingQuantity": 0,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 3,
                                            "mismarkedQuantity": 0,
                                            "price": 248.0325,
                                            "time": "2023-09-07T13:39:27+0000"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 3,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "CDRG",
                            "price": 248.46,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 3
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560436,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T13:36:54+0000",
                            "closeTime": "2023-09-07T13:39:26+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 3,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.11
    },
    {
        "symbol": "TSLA",
        "orderID": 11609217780,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "MARKET",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 28,
            "filledQuantity": 28,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "JNST",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 28
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11609217780,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:50:23+0000",
            "closeTime": "2023-09-07T13:50:24+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59305431587,
                    "executionType": "FILL",
                    "quantity": 28,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 28,
                            "mismarkedQuantity": 0,
                            "price": 246.49,
                            "time": "2023-09-07T13:50:24+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11609217781,
                    "cancelable": false,
                    "editable": false,
                    "status": "FILLED",
                    "enteredTime": "2023-09-07T13:50:23+0000",
                    "closeTime": "2023-09-07T14:03:02+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "CDRG",
                            "price": 246.5,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609218502,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T14:00:05+0000",
                            "closeTime": "2023-09-07T14:00:30+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "NITE",
                            "stopPrice": 243.26,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609217782,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T13:50:23+0000",
                            "closeTime": "2023-09-07T14:01:39+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "CDRG",
                            "price": 248.74,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609217783,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T13:50:23+0000",
                            "closeTime": "2023-09-07T13:59:37+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "JNST",
                            "price": 246.85,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609218482,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T13:59:42+0000",
                            "closeTime": "2023-09-07T14:00:05+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 28,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "JNST",
                            "stopPrice": 244.51,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609218674,
                            "cancelable": false,
                            "editable": false,
                            "status": "FILLED",
                            "enteredTime": "2023-09-07T14:01:39+0000",
                            "closeTime": "2023-09-07T14:03:02+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "orderActivityCollection": [
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59307460660,
                                    "executionType": "FILL",
                                    "quantity": 28,
                                    "orderRemainingQuantity": 0,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 28,
                                            "mismarkedQuantity": 0,
                                            "price": 244.5,
                                            "time": "2023-09-07T14:03:02+0000"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "CDRG",
                            "price": 246.7,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609218542,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T14:00:30+0000",
                            "closeTime": "2023-09-07T14:03:02+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "JNST",
                            "price": 246.5,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609218473,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T13:59:37+0000",
                            "closeTime": "2023-09-07T13:59:42+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "MARKET",
        "quantity": 28,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 0
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559340,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 30,
            "filledQuantity": 0,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "SOHO",
            "stopPrice": 245.54,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 30
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559340,
            "cancelable": false,
            "editable": false,
            "status": "CANCELED",
            "enteredTime": "2023-09-07T13:30:31+0000",
            "closeTime": "2023-09-07T13:30:46+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559341,
                    "cancelable": false,
                    "editable": false,
                    "status": "CANCELED",
                    "enteredTime": "2023-09-07T13:30:31+0000",
                    "closeTime": "2023-09-07T13:30:46+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 30,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 244.3,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 30
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559342,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:30:31+0000",
                            "closeTime": "2023-09-07T13:30:46+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 30,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 247.4,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 30
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559343,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:30:31+0000",
                            "closeTime": "2023-09-07T13:30:46+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 30,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.54
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559336,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 30,
            "filledQuantity": 0,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "ETMM",
            "stopPrice": 245.54,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 30
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559336,
            "cancelable": false,
            "editable": false,
            "status": "CANCELED",
            "enteredTime": "2023-09-07T13:30:31+0000",
            "closeTime": "2023-09-07T13:30:46+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559337,
                    "cancelable": false,
                    "editable": false,
                    "status": "CANCELED",
                    "enteredTime": "2023-09-07T13:30:31+0000",
                    "closeTime": "2023-09-07T13:30:45+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 30,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 244.3,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 30
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559338,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:30:31+0000",
                            "closeTime": "2023-09-07T13:30:45+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 30,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 246.66,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 30
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559339,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:30:31+0000",
                            "closeTime": "2023-09-07T13:30:45+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 30,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.54
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559332,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 30,
            "filledQuantity": 0,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "NITE",
            "stopPrice": 245.54,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 30
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559332,
            "cancelable": false,
            "editable": false,
            "status": "CANCELED",
            "enteredTime": "2023-09-07T13:30:31+0000",
            "closeTime": "2023-09-07T13:30:46+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559333,
                    "cancelable": false,
                    "editable": false,
                    "status": "CANCELED",
                    "enteredTime": "2023-09-07T13:30:31+0000",
                    "closeTime": "2023-09-07T13:30:46+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 30,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 244.3,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 30
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559334,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:30:31+0000",
                            "closeTime": "2023-09-07T13:30:46+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 30,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 248.02,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 30
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559335,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:30:31+0000",
                            "closeTime": "2023-09-07T13:30:46+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 30,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.54
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559328,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 30,
            "filledQuantity": 0,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "JNST",
            "stopPrice": 245.54,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 30
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559328,
            "cancelable": false,
            "editable": false,
            "status": "CANCELED",
            "enteredTime": "2023-09-07T13:30:31+0000",
            "closeTime": "2023-09-07T13:30:46+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559329,
                    "cancelable": false,
                    "editable": false,
                    "status": "CANCELED",
                    "enteredTime": "2023-09-07T13:30:31+0000",
                    "closeTime": "2023-09-07T13:30:45+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 30,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 244.3,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 30
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559330,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:30:31+0000",
                            "closeTime": "2023-09-07T13:30:45+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 30,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 247.77,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 30
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559331,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:30:31+0000",
                            "closeTime": "2023-09-07T13:30:45+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 30,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.54
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559352,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 30,
            "filledQuantity": 0,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "UBSS",
            "stopPrice": 245.54,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 30
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559352,
            "cancelable": false,
            "editable": false,
            "status": "CANCELED",
            "enteredTime": "2023-09-07T13:30:31+0000",
            "closeTime": "2023-09-07T13:30:46+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559353,
                    "cancelable": false,
                    "editable": false,
                    "status": "CANCELED",
                    "enteredTime": "2023-09-07T13:30:31+0000",
                    "closeTime": "2023-09-07T13:30:45+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 30,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 244.3,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 30
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559354,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:30:31+0000",
                            "closeTime": "2023-09-07T13:30:45+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 30,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 250.5,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 30
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559355,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:30:31+0000",
                            "closeTime": "2023-09-07T13:30:45+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 30,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.54
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559348,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 29,
            "filledQuantity": 0,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "JNST",
            "stopPrice": 245.54,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 29
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559348,
            "cancelable": false,
            "editable": false,
            "status": "CANCELED",
            "enteredTime": "2023-09-07T13:30:31+0000",
            "closeTime": "2023-09-07T13:30:46+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559349,
                    "cancelable": false,
                    "editable": false,
                    "status": "CANCELED",
                    "enteredTime": "2023-09-07T13:30:31+0000",
                    "closeTime": "2023-09-07T13:30:45+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 29,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 244.3,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 29
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559350,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:30:31+0000",
                            "closeTime": "2023-09-07T13:30:45+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 29,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 257.94,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 29
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559351,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:30:31+0000",
                            "closeTime": "2023-09-07T13:30:45+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 29,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.54
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559344,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 30,
            "filledQuantity": 0,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "NITE",
            "stopPrice": 245.54,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 30
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559344,
            "cancelable": false,
            "editable": false,
            "status": "CANCELED",
            "enteredTime": "2023-09-07T13:30:31+0000",
            "closeTime": "2023-09-07T13:30:46+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559345,
                    "cancelable": false,
                    "editable": false,
                    "status": "CANCELED",
                    "enteredTime": "2023-09-07T13:30:31+0000",
                    "closeTime": "2023-09-07T13:30:46+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 30,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 244.3,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 30
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559346,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:30:31+0000",
                            "closeTime": "2023-09-07T13:30:46+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 30,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 249.26,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 30
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559347,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:30:31+0000",
                            "closeTime": "2023-09-07T13:30:46+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 30,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.54
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559322,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 30,
            "filledQuantity": 0,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "SOHO",
            "stopPrice": 245.54,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 30
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559322,
            "cancelable": false,
            "editable": false,
            "status": "CANCELED",
            "enteredTime": "2023-09-07T13:30:31+0000",
            "closeTime": "2023-09-07T13:30:46+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559323,
                    "cancelable": false,
                    "editable": false,
                    "status": "CANCELED",
                    "enteredTime": "2023-09-07T13:30:31+0000",
                    "closeTime": "2023-09-07T13:30:46+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 30,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 244.3,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 30
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559324,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:30:31+0000",
                            "closeTime": "2023-09-07T13:30:46+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 30,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 246.59,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 30
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559325,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:30:31+0000",
                            "closeTime": "2023-09-07T13:30:46+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 30,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.54
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559318,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 30,
            "filledQuantity": 0,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "ETMM",
            "stopPrice": 245.54,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 30
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559318,
            "cancelable": false,
            "editable": false,
            "status": "CANCELED",
            "enteredTime": "2023-09-07T13:30:31+0000",
            "closeTime": "2023-09-07T13:30:46+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559319,
                    "cancelable": false,
                    "editable": false,
                    "status": "CANCELED",
                    "enteredTime": "2023-09-07T13:30:31+0000",
                    "closeTime": "2023-09-07T13:30:46+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 30,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 244.3,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 30
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559320,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:30:31+0000",
                            "closeTime": "2023-09-07T13:30:46+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 30,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 247.9,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 30
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559321,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:30:31+0000",
                            "closeTime": "2023-09-07T13:30:46+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 30,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.54
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559314,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 30,
            "filledQuantity": 0,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "NITE",
            "stopPrice": 245.54,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 30
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559314,
            "cancelable": false,
            "editable": false,
            "status": "CANCELED",
            "enteredTime": "2023-09-07T13:30:31+0000",
            "closeTime": "2023-09-07T13:30:46+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559315,
                    "cancelable": false,
                    "editable": false,
                    "status": "CANCELED",
                    "enteredTime": "2023-09-07T13:30:31+0000",
                    "closeTime": "2023-09-07T13:30:46+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 30,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 244.3,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 30
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559316,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:30:31+0000",
                            "closeTime": "2023-09-07T13:30:46+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 30,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 246.53,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 30
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559317,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:30:31+0000",
                            "closeTime": "2023-09-07T13:30:46+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 30,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.54
    },
    {
        "symbol": "TSLA",
        "orderID": 11608560237,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 5,
            "filledQuantity": 5,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "SOHO",
            "stopPrice": 245.11,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 5
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608560237,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:35:11+0000",
            "closeTime": "2023-09-07T13:36:59+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59303855728,
                    "executionType": "FILL",
                    "quantity": 5,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 5,
                            "mismarkedQuantity": 0,
                            "price": 245.14,
                            "time": "2023-09-07T13:36:59+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608560238,
                    "cancelable": false,
                    "editable": false,
                    "status": "FILLED",
                    "enteredTime": "2023-09-07T13:35:11+0000",
                    "closeTime": "2023-09-07T13:44:34+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 5,
                            "filledQuantity": 5,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "JNST",
                            "price": 248.25,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 5
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609217309,
                            "cancelable": false,
                            "editable": false,
                            "status": "FILLED",
                            "enteredTime": "2023-09-07T13:44:32+0000",
                            "closeTime": "2023-09-07T13:44:34+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "orderActivityCollection": [
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59305429607,
                                    "executionType": "FILL",
                                    "quantity": 5,
                                    "orderRemainingQuantity": 0,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 5,
                                            "mismarkedQuantity": 0,
                                            "price": 248.25,
                                            "time": "2023-09-07T13:44:34+0000"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 5,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "SOHO",
                            "stopPrice": 243.25,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 5
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560239,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:35:11+0000",
                            "closeTime": "2023-09-07T13:44:34+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 5,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "SOHO",
                            "price": 252.55,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 5
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560240,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T13:35:11+0000",
                            "closeTime": "2023-09-07T13:44:32+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 5,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.11
    },
    {
        "symbol": "TSLA",
        "orderID": 11608560233,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 5,
            "filledQuantity": 5,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "JNST",
            "stopPrice": 245.11,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 5
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608560233,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:35:11+0000",
            "closeTime": "2023-09-07T13:36:57+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59303855489,
                    "executionType": "FILL",
                    "quantity": 5,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 5,
                            "mismarkedQuantity": 5,
                            "price": 245.1,
                            "time": "2023-09-07T13:36:57+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608560234,
                    "cancelable": false,
                    "editable": false,
                    "status": "REJECTED",
                    "enteredTime": "2023-09-07T13:35:11+0000",
                    "closeTime": "2023-09-07T13:36:57+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 5,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 243.25,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 5
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560235,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:35:11+0000",
                            "closeTime": "2023-09-07T13:36:57+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders."
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 5,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 250.69,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 5
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560236,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:35:11+0000",
                            "closeTime": "2023-09-07T13:36:57+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders.; Order Rejected due to Order: 11608560235"
                        }
                    ],
                    "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders.; Order Rejected due to Order: 11608560235"
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 5,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.11
    },
    {
        "symbol": "TSLA",
        "orderID": 11608560229,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 5,
            "filledQuantity": 5,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "ETMM",
            "stopPrice": 245.11,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 5
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608560229,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:35:11+0000",
            "closeTime": "2023-09-07T13:36:58+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59303855560,
                    "executionType": "FILL",
                    "quantity": 5,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 5,
                            "mismarkedQuantity": 0,
                            "price": 245.14,
                            "time": "2023-09-07T13:36:58+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608560230,
                    "cancelable": false,
                    "editable": false,
                    "status": "FILLED",
                    "enteredTime": "2023-09-07T13:35:11+0000",
                    "closeTime": "2023-09-07T13:42:25+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 5,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "SOHO",
                            "price": 248.64,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 5
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609217061,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T13:42:05+0000",
                            "closeTime": "2023-09-07T13:42:25+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 5,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "NITE",
                            "stopPrice": 243.25,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 5
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560231,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T13:35:11+0000",
                            "closeTime": "2023-09-07T13:42:17+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 5,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "SOHO",
                            "stopPrice": 248.16,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 5
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609217086,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:42:17+0000",
                            "closeTime": "2023-09-07T13:42:25+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "MARKET",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 5,
                            "filledQuantity": 5,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "CDRG",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 5
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609217097,
                            "cancelable": false,
                            "editable": false,
                            "status": "FILLED",
                            "enteredTime": "2023-09-07T13:42:24+0000",
                            "closeTime": "2023-09-07T13:42:25+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "orderActivityCollection": [
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59305428763,
                                    "executionType": "FILL",
                                    "quantity": 1,
                                    "orderRemainingQuantity": 0,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 1,
                                            "mismarkedQuantity": 0,
                                            "price": 248.3434,
                                            "time": "2023-09-07T13:42:25+0000"
                                        }
                                    ]
                                },
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59305428757,
                                    "executionType": "FILL",
                                    "quantity": 4,
                                    "orderRemainingQuantity": 1,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 4,
                                            "mismarkedQuantity": 0,
                                            "price": 248.3434,
                                            "time": "2023-09-07T13:42:25+0000"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 5,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "JNST",
                            "price": 248.83,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 5
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560232,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T13:35:11+0000",
                            "closeTime": "2023-09-07T13:42:06+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 5,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.11
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559712,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 23,
            "filledQuantity": 23,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "NITE",
            "stopPrice": 243.76,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "SELL_SHORT",
                    "positionEffect": "OPENING",
                    "quantity": 23
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559712,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:32:17+0000",
            "closeTime": "2023-09-07T13:32:26+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59302092347,
                    "executionType": "FILL",
                    "quantity": 23,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 23,
                            "mismarkedQuantity": 0,
                            "price": 243.77,
                            "time": "2023-09-07T13:32:26+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559713,
                    "cancelable": false,
                    "editable": false,
                    "status": "FILLED",
                    "enteredTime": "2023-09-07T13:32:17+0000",
                    "closeTime": "2023-09-07T13:32:41+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 23,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "SOHO",
                            "stopPrice": 245.11,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 23
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559714,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:32:17+0000",
                            "closeTime": "2023-09-07T13:32:41+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "MARKET",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 23,
                            "filledQuantity": 23,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "ETMM",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 23
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559778,
                            "cancelable": false,
                            "editable": false,
                            "status": "FILLED",
                            "enteredTime": "2023-09-07T13:32:40+0000",
                            "closeTime": "2023-09-07T13:32:41+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "orderActivityCollection": [
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59302092652,
                                    "executionType": "FILL",
                                    "quantity": 23,
                                    "orderRemainingQuantity": 0,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 23,
                                            "mismarkedQuantity": 0,
                                            "price": 244.31,
                                            "time": "2023-09-07T13:32:41+0000"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 23,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "CDRG",
                            "price": 230.26,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 23
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559715,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T13:32:17+0000",
                            "closeTime": "2023-09-07T13:32:40+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 23,
        "isBuy": false,
        "positionEffectIsOpen": true,
        "price": 243.76
    },
    {
        "symbol": "TSLA",
        "orderID": 11608560224,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 5,
            "filledQuantity": 5,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "NITE",
            "stopPrice": 245.11,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 5
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608560224,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:35:11+0000",
            "closeTime": "2023-09-07T13:36:58+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59303855603,
                    "executionType": "FILL",
                    "quantity": 5,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 5,
                            "mismarkedQuantity": 0,
                            "price": 245.105,
                            "time": "2023-09-07T13:36:58+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608560225,
                    "cancelable": false,
                    "editable": false,
                    "status": "FILLED",
                    "enteredTime": "2023-09-07T13:35:11+0000",
                    "closeTime": "2023-09-07T13:37:33+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 5,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "UBSS",
                            "stopPrice": 243.25,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 5
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560226,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:35:11+0000",
                            "closeTime": "2023-09-07T13:37:33+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 5,
                            "filledQuantity": 5,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "SOHO",
                            "price": 246.69,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 5
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560227,
                            "cancelable": false,
                            "editable": false,
                            "status": "FILLED",
                            "enteredTime": "2023-09-07T13:35:11+0000",
                            "closeTime": "2023-09-07T13:37:32+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "orderActivityCollection": [
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59303856161,
                                    "executionType": "FILL",
                                    "quantity": 5,
                                    "orderRemainingQuantity": 0,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 5,
                                            "mismarkedQuantity": 0,
                                            "price": 246.69,
                                            "time": "2023-09-07T13:37:32+0000"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 5,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.11
    },
    {
        "symbol": "TSLA",
        "orderID": 11608560245,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 1,
            "filledQuantity": 1,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "JNST",
            "stopPrice": 245.11,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 1
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608560245,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:35:12+0000",
            "closeTime": "2023-09-07T13:36:57+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59303855498,
                    "executionType": "FILL",
                    "quantity": 1,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 1,
                            "mismarkedQuantity": 1,
                            "price": 245.1,
                            "time": "2023-09-07T13:36:57+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608560246,
                    "cancelable": false,
                    "editable": false,
                    "status": "REJECTED",
                    "enteredTime": "2023-09-07T13:35:12+0000",
                    "closeTime": "2023-09-07T13:36:57+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 1,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 243.25,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 1
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560247,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:35:12+0000",
                            "closeTime": "2023-09-07T13:36:57+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders."
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 1,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 263.71,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 1
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560248,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:35:12+0000",
                            "closeTime": "2023-09-07T13:36:57+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders.; Order Rejected due to Order: 11608560247"
                        }
                    ],
                    "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders.; Order Rejected due to Order: 11608560247"
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 1,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.11
    },
    {
        "symbol": "TSLA",
        "orderID": 11608560241,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 5,
            "filledQuantity": 5,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "NITE",
            "stopPrice": 245.11,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 5
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608560241,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:35:11+0000",
            "closeTime": "2023-09-07T13:36:57+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59303855478,
                    "executionType": "FILL",
                    "quantity": 5,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 5,
                            "mismarkedQuantity": 5,
                            "price": 245.105,
                            "time": "2023-09-07T13:36:57+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608560242,
                    "cancelable": false,
                    "editable": false,
                    "status": "REJECTED",
                    "enteredTime": "2023-09-07T13:35:11+0000",
                    "closeTime": "2023-09-07T13:36:57+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 5,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 243.25,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 5
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560243,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:35:11+0000",
                            "closeTime": "2023-09-07T13:36:57+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders."
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 5,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 254.41,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 5
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560244,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:35:11+0000",
                            "closeTime": "2023-09-07T13:36:57+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders.; Order Rejected due to Order: 11608560243"
                        }
                    ],
                    "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders.; Order Rejected due to Order: 11608560243"
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 5,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.11
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559692,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 28,
            "filledQuantity": 28,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "SOHO",
            "stopPrice": 243.76,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "SELL_SHORT",
                    "positionEffect": "OPENING",
                    "quantity": 28
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559692,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:32:17+0000",
            "closeTime": "2023-09-07T13:32:26+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59302092345,
                    "executionType": "FILL",
                    "quantity": 28,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 28,
                            "mismarkedQuantity": 0,
                            "price": 243.75,
                            "time": "2023-09-07T13:32:26+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559693,
                    "cancelable": false,
                    "editable": false,
                    "status": "FILLED",
                    "enteredTime": "2023-09-07T13:32:17+0000",
                    "closeTime": "2023-09-07T13:37:00+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 28,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "ETMM",
                            "stopPrice": 245.11,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559694,
                            "cancelable": false,
                            "editable": false,
                            "status": "FILLED",
                            "enteredTime": "2023-09-07T13:32:17+0000",
                            "closeTime": "2023-09-07T13:36:57+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "orderActivityCollection": [
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59303855533,
                                    "executionType": "FILL",
                                    "quantity": 28,
                                    "orderRemainingQuantity": 0,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 28,
                                            "mismarkedQuantity": 0,
                                            "price": 245.14,
                                            "time": "2023-09-07T13:36:57+0000"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "JNST",
                            "price": 242.54,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559695,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:32:17+0000",
                            "closeTime": "2023-09-07T13:37:00+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 28,
        "isBuy": false,
        "positionEffectIsOpen": true,
        "price": 243.76
    },
    {
        "symbol": "TSLA",
        "orderID": 11608560204,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 5,
            "filledQuantity": 5,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "SOHO",
            "stopPrice": 245.11,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 5
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608560204,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:35:11+0000",
            "closeTime": "2023-09-07T13:36:59+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59303855696,
                    "executionType": "FILL",
                    "quantity": 5,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 5,
                            "mismarkedQuantity": 0,
                            "price": 245.14,
                            "time": "2023-09-07T13:36:59+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608560205,
                    "cancelable": false,
                    "editable": false,
                    "status": "FILLED",
                    "enteredTime": "2023-09-07T13:35:11+0000",
                    "closeTime": "2023-09-07T13:37:42+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 5,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "JNST",
                            "stopPrice": 243.25,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 5
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560206,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:35:11+0000",
                            "closeTime": "2023-09-07T13:37:42+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 5,
                            "filledQuantity": 5,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "CDRG",
                            "price": 246.78,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 5
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560207,
                            "cancelable": false,
                            "editable": false,
                            "status": "FILLED",
                            "enteredTime": "2023-09-07T13:35:11+0000",
                            "closeTime": "2023-09-07T13:37:41+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "orderActivityCollection": [
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59303856308,
                                    "executionType": "FILL",
                                    "quantity": 5,
                                    "orderRemainingQuantity": 0,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 5,
                                            "mismarkedQuantity": 0,
                                            "price": 246.78,
                                            "time": "2023-09-07T13:37:41+0000"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 5,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.11
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559688,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 28,
            "filledQuantity": 28,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "ETMM",
            "stopPrice": 243.76,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "SELL_SHORT",
                    "positionEffect": "OPENING",
                    "quantity": 28
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559688,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:32:17+0000",
            "closeTime": "2023-09-07T13:32:26+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59302092375,
                    "executionType": "FILL",
                    "quantity": 25,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 25,
                            "mismarkedQuantity": 0,
                            "price": 243.75,
                            "time": "2023-09-07T13:32:26+0000"
                        }
                    ]
                },
                {
                    "activityType": "EXECUTION",
                    "activityId": 59302092312,
                    "executionType": "FILL",
                    "quantity": 3,
                    "orderRemainingQuantity": 25,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 3,
                            "mismarkedQuantity": 0,
                            "price": 243.75,
                            "time": "2023-09-07T13:32:26+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559689,
                    "cancelable": false,
                    "editable": false,
                    "status": "FILLED",
                    "enteredTime": "2023-09-07T13:32:17+0000",
                    "closeTime": "2023-09-07T13:36:57+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 28,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "NITE",
                            "stopPrice": 245.11,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559690,
                            "cancelable": false,
                            "editable": false,
                            "status": "FILLED",
                            "enteredTime": "2023-09-07T13:32:17+0000",
                            "closeTime": "2023-09-07T13:36:56+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "orderActivityCollection": [
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59303855420,
                                    "executionType": "FILL",
                                    "quantity": 28,
                                    "orderRemainingQuantity": 0,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 28,
                                            "mismarkedQuantity": 0,
                                            "price": 245.105,
                                            "time": "2023-09-07T13:36:56+0000"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "SOHO",
                            "price": 242.61,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559691,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:32:17+0000",
                            "closeTime": "2023-09-07T13:36:57+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 28,
        "isBuy": false,
        "positionEffectIsOpen": true,
        "price": 243.76
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559684,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 28,
            "filledQuantity": 28,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "JNST",
            "stopPrice": 243.76,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "SELL_SHORT",
                    "positionEffect": "OPENING",
                    "quantity": 28
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559684,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:32:17+0000",
            "closeTime": "2023-09-07T13:32:26+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59302092419,
                    "executionType": "FILL",
                    "quantity": 26,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 26,
                            "mismarkedQuantity": 0,
                            "price": 243.7517,
                            "time": "2023-09-07T13:32:26+0000"
                        }
                    ]
                },
                {
                    "activityType": "EXECUTION",
                    "activityId": 59302092337,
                    "executionType": "FILL",
                    "quantity": 2,
                    "orderRemainingQuantity": 26,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 2,
                            "mismarkedQuantity": 0,
                            "price": 243.77,
                            "time": "2023-09-07T13:32:26+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559685,
                    "cancelable": false,
                    "editable": false,
                    "status": "FILLED",
                    "enteredTime": "2023-09-07T13:32:17+0000",
                    "closeTime": "2023-09-07T13:37:00+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 28,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "NITE",
                            "stopPrice": 245.11,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559686,
                            "cancelable": false,
                            "editable": false,
                            "status": "FILLED",
                            "enteredTime": "2023-09-07T13:32:17+0000",
                            "closeTime": "2023-09-07T13:36:58+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "orderActivityCollection": [
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59303855584,
                                    "executionType": "FILL",
                                    "quantity": 28,
                                    "orderRemainingQuantity": 0,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 28,
                                            "mismarkedQuantity": 28,
                                            "price": 245.105,
                                            "time": "2023-09-07T13:36:58+0000"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "SOHO",
                            "price": 241.19,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559687,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:32:17+0000",
                            "closeTime": "2023-09-07T13:37:00+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 28,
        "isBuy": false,
        "positionEffectIsOpen": true,
        "price": 243.76
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559680,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 28,
            "filledQuantity": 28,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "NITE",
            "stopPrice": 243.76,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "SELL_SHORT",
                    "positionEffect": "OPENING",
                    "quantity": 28
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559680,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:32:17+0000",
            "closeTime": "2023-09-07T13:32:26+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59302092404,
                    "executionType": "FILL",
                    "quantity": 28,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 28,
                            "mismarkedQuantity": 0,
                            "price": 243.77,
                            "time": "2023-09-07T13:32:26+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559681,
                    "cancelable": false,
                    "editable": false,
                    "status": "FILLED",
                    "enteredTime": "2023-09-07T13:32:17+0000",
                    "closeTime": "2023-09-07T13:37:00+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 28,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "ETMM",
                            "stopPrice": 245.11,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559682,
                            "cancelable": false,
                            "editable": false,
                            "status": "FILLED",
                            "enteredTime": "2023-09-07T13:32:17+0000",
                            "closeTime": "2023-09-07T13:36:59+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "orderActivityCollection": [
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59303855711,
                                    "executionType": "FILL",
                                    "quantity": 28,
                                    "orderRemainingQuantity": 0,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 28,
                                            "mismarkedQuantity": 28,
                                            "price": 245.17,
                                            "time": "2023-09-07T13:36:59+0000"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "NITE",
                            "price": 241.73,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559683,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:32:17+0000",
                            "closeTime": "2023-09-07T13:37:00+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 28,
        "isBuy": false,
        "positionEffectIsOpen": true,
        "price": 243.76
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559708,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 28,
            "filledQuantity": 28,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "SOHO",
            "stopPrice": 243.76,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "SELL_SHORT",
                    "positionEffect": "OPENING",
                    "quantity": 28
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559708,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:32:17+0000",
            "closeTime": "2023-09-07T13:32:25+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59302092286,
                    "executionType": "FILL",
                    "quantity": 28,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 28,
                            "mismarkedQuantity": 0,
                            "price": 243.75,
                            "time": "2023-09-07T13:32:25+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559709,
                    "cancelable": false,
                    "editable": false,
                    "status": "FILLED",
                    "enteredTime": "2023-09-07T13:32:17+0000",
                    "closeTime": "2023-09-07T13:36:59+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 28,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "JNST",
                            "stopPrice": 245.11,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559710,
                            "cancelable": false,
                            "editable": false,
                            "status": "FILLED",
                            "enteredTime": "2023-09-07T13:32:17+0000",
                            "closeTime": "2023-09-07T13:36:56+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "orderActivityCollection": [
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59303855372,
                                    "executionType": "FILL",
                                    "quantity": 28,
                                    "orderRemainingQuantity": 0,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 28,
                                            "mismarkedQuantity": 0,
                                            "price": 245.1,
                                            "time": "2023-09-07T13:36:56+0000"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "JNST",
                            "price": 238.36,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559711,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:32:17+0000",
                            "closeTime": "2023-09-07T13:36:59+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 28,
        "isBuy": false,
        "positionEffectIsOpen": true,
        "price": 243.76
    },
    {
        "symbol": "TSLA",
        "orderID": 11608560220,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 5,
            "filledQuantity": 5,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "SOHO",
            "stopPrice": 245.11,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 5
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608560220,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:35:11+0000",
            "closeTime": "2023-09-07T13:36:56+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59303855386,
                    "executionType": "FILL",
                    "quantity": 5,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 5,
                            "mismarkedQuantity": 5,
                            "price": 245.14,
                            "time": "2023-09-07T13:36:56+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608560221,
                    "cancelable": false,
                    "editable": false,
                    "status": "REJECTED",
                    "enteredTime": "2023-09-07T13:35:11+0000",
                    "closeTime": "2023-09-07T13:36:56+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 5,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 243.25,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 5
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560222,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:35:11+0000",
                            "closeTime": "2023-09-07T13:36:56+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders."
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 5,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 248.46,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 5
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560223,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:35:11+0000",
                            "closeTime": "2023-09-07T13:36:56+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders.; Order Rejected due to Order: 11608560222"
                        }
                    ],
                    "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders.; Order Rejected due to Order: 11608560222"
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 5,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.11
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559704,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 28,
            "filledQuantity": 28,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "ETMM",
            "stopPrice": 243.76,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "SELL_SHORT",
                    "positionEffect": "OPENING",
                    "quantity": 28
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559704,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:32:17+0000",
            "closeTime": "2023-09-07T13:32:26+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59302092326,
                    "executionType": "FILL",
                    "quantity": 25,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 25,
                            "mismarkedQuantity": 0,
                            "price": 243.75,
                            "time": "2023-09-07T13:32:26+0000"
                        }
                    ]
                },
                {
                    "activityType": "EXECUTION",
                    "activityId": 59302092298,
                    "executionType": "FILL",
                    "quantity": 3,
                    "orderRemainingQuantity": 25,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 3,
                            "mismarkedQuantity": 0,
                            "price": 243.75,
                            "time": "2023-09-07T13:32:26+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559705,
                    "cancelable": false,
                    "editable": false,
                    "status": "FILLED",
                    "enteredTime": "2023-09-07T13:32:17+0000",
                    "closeTime": "2023-09-07T13:37:00+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 28,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "JNST",
                            "stopPrice": 245.11,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559706,
                            "cancelable": false,
                            "editable": false,
                            "status": "FILLED",
                            "enteredTime": "2023-09-07T13:32:17+0000",
                            "closeTime": "2023-09-07T13:36:56+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "orderActivityCollection": [
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59303855374,
                                    "executionType": "FILL",
                                    "quantity": 28,
                                    "orderRemainingQuantity": 0,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 28,
                                            "mismarkedQuantity": 0,
                                            "price": 245.1,
                                            "time": "2023-09-07T13:36:56+0000"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "JNST",
                            "price": 239.71,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559707,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:32:17+0000",
                            "closeTime": "2023-09-07T13:37:00+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 28,
        "isBuy": false,
        "positionEffectIsOpen": true,
        "price": 243.76
    },
    {
        "symbol": "TSLA",
        "orderID": 11608560216,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 5,
            "filledQuantity": 5,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "JNST",
            "stopPrice": 245.11,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 5
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608560216,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:35:11+0000",
            "closeTime": "2023-09-07T13:36:57+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59303855440,
                    "executionType": "FILL",
                    "quantity": 5,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 5,
                            "mismarkedQuantity": 5,
                            "price": 245.1,
                            "time": "2023-09-07T13:36:57+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608560217,
                    "cancelable": false,
                    "editable": false,
                    "status": "REJECTED",
                    "enteredTime": "2023-09-07T13:35:11+0000",
                    "closeTime": "2023-09-07T13:36:57+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 5,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 243.25,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 5
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560218,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:35:11+0000",
                            "closeTime": "2023-09-07T13:36:57+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders."
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 5,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 248.64,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 5
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560219,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:35:11+0000",
                            "closeTime": "2023-09-07T13:36:57+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders.; Order Rejected due to Order: 11608560218"
                        }
                    ],
                    "statusDescription": "This order may result in an oversold/overbought position in your account.  Please check your position quantity and/or open orders.; Order Rejected due to Order: 11608560218"
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 5,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.11
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559700,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 28,
            "filledQuantity": 28,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "JNST",
            "stopPrice": 243.76,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "SELL_SHORT",
                    "positionEffect": "OPENING",
                    "quantity": 28
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559700,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:32:17+0000",
            "closeTime": "2023-09-07T13:32:26+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59302092389,
                    "executionType": "FILL",
                    "quantity": 28,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 28,
                            "mismarkedQuantity": 0,
                            "price": 243.7513,
                            "time": "2023-09-07T13:32:26+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559701,
                    "cancelable": false,
                    "editable": false,
                    "status": "FILLED",
                    "enteredTime": "2023-09-07T13:32:17+0000",
                    "closeTime": "2023-09-07T13:37:00+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 28,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "JNST",
                            "stopPrice": 245.11,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559702,
                            "cancelable": false,
                            "editable": false,
                            "status": "FILLED",
                            "enteredTime": "2023-09-07T13:32:17+0000",
                            "closeTime": "2023-09-07T13:36:57+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "orderActivityCollection": [
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59303855436,
                                    "executionType": "FILL",
                                    "quantity": 25,
                                    "orderRemainingQuantity": 0,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 25,
                                            "mismarkedQuantity": 0,
                                            "price": 245.1,
                                            "time": "2023-09-07T13:36:57+0000"
                                        }
                                    ]
                                },
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59303855404,
                                    "executionType": "FILL",
                                    "quantity": 3,
                                    "orderRemainingQuantity": 25,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 3,
                                            "mismarkedQuantity": 0,
                                            "price": 245.1,
                                            "time": "2023-09-07T13:36:56+0000"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "UBSS",
                            "price": 241.06,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559703,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:32:17+0000",
                            "closeTime": "2023-09-07T13:37:00+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 28,
        "isBuy": false,
        "positionEffectIsOpen": true,
        "price": 243.76
    },
    {
        "symbol": "TSLA",
        "orderID": 11608560212,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 5,
            "filledQuantity": 5,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "NITE",
            "stopPrice": 245.11,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 5
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608560212,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:35:11+0000",
            "closeTime": "2023-09-07T13:36:59+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59303855686,
                    "executionType": "FILL",
                    "quantity": 5,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 5,
                            "mismarkedQuantity": 0,
                            "price": 245.105,
                            "time": "2023-09-07T13:36:59+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608560213,
                    "cancelable": false,
                    "editable": false,
                    "status": "FILLED",
                    "enteredTime": "2023-09-07T13:35:11+0000",
                    "closeTime": "2023-09-07T13:39:08+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 5,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "ETMM",
                            "stopPrice": 243.25,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 5
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560214,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:35:11+0000",
                            "closeTime": "2023-09-07T13:39:08+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 5,
                            "filledQuantity": 5,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "UBSS",
                            "price": 247.9,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 5
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560215,
                            "cancelable": false,
                            "editable": false,
                            "status": "FILLED",
                            "enteredTime": "2023-09-07T13:35:11+0000",
                            "closeTime": "2023-09-07T13:39:08+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "orderActivityCollection": [
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59303857075,
                                    "executionType": "FILL",
                                    "quantity": 5,
                                    "orderRemainingQuantity": 0,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 5,
                                            "mismarkedQuantity": 0,
                                            "price": 247.9,
                                            "time": "2023-09-07T13:39:08+0000"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 5,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.11
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559696,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 28,
            "filledQuantity": 28,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "NITE",
            "stopPrice": 243.76,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "SELL_SHORT",
                    "positionEffect": "OPENING",
                    "quantity": 28
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559696,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:32:17+0000",
            "closeTime": "2023-09-07T13:32:26+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59302092316,
                    "executionType": "FILL",
                    "quantity": 28,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 28,
                            "mismarkedQuantity": 0,
                            "price": 243.77,
                            "time": "2023-09-07T13:32:26+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559697,
                    "cancelable": false,
                    "editable": false,
                    "status": "FILLED",
                    "enteredTime": "2023-09-07T13:32:17+0000",
                    "closeTime": "2023-09-07T13:37:00+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 28,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "NITE",
                            "stopPrice": 245.11,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559698,
                            "cancelable": false,
                            "editable": false,
                            "status": "FILLED",
                            "enteredTime": "2023-09-07T13:32:17+0000",
                            "closeTime": "2023-09-07T13:36:57+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "orderActivityCollection": [
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59303855539,
                                    "executionType": "FILL",
                                    "quantity": 28,
                                    "orderRemainingQuantity": 0,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 28,
                                            "mismarkedQuantity": 7,
                                            "price": 245.105,
                                            "time": "2023-09-07T13:36:57+0000"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "UBSS",
                            "price": 241.33,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559699,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:32:17+0000",
                            "closeTime": "2023-09-07T13:37:00+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 28,
        "isBuy": false,
        "positionEffectIsOpen": true,
        "price": 243.76
    },
    {
        "symbol": "TSLA",
        "orderID": 11608560208,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 5,
            "filledQuantity": 5,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "ETMM",
            "stopPrice": 245.11,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 5
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608560208,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:35:11+0000",
            "closeTime": "2023-09-07T13:36:59+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59303855717,
                    "executionType": "FILL",
                    "quantity": 5,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 5,
                            "mismarkedQuantity": 0,
                            "price": 245.14,
                            "time": "2023-09-07T13:36:59+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608560209,
                    "cancelable": false,
                    "editable": false,
                    "status": "FILLED",
                    "enteredTime": "2023-09-07T13:35:11+0000",
                    "closeTime": "2023-09-07T13:37:26+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 5,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "NITE",
                            "stopPrice": 243.25,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 5
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560210,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:35:11+0000",
                            "closeTime": "2023-09-07T13:37:26+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 5,
                            "filledQuantity": 5,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "SOHO",
                            "price": 246.6,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 5
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608560211,
                            "cancelable": false,
                            "editable": false,
                            "status": "FILLED",
                            "enteredTime": "2023-09-07T13:35:11+0000",
                            "closeTime": "2023-09-07T13:37:26+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "orderActivityCollection": [
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59303856089,
                                    "executionType": "FILL",
                                    "quantity": 5,
                                    "orderRemainingQuantity": 0,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 5,
                                            "mismarkedQuantity": 0,
                                            "price": 246.6,
                                            "time": "2023-09-07T13:37:26+0000"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 5,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 245.11
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559662,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "LIMIT",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 1239,
            "filledQuantity": 0,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "AutoRoute",
            "price": 245.14,
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "SELL_SHORT",
                    "positionEffect": "OPENING",
                    "quantity": 1239
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559662,
            "cancelable": false,
            "editable": false,
            "status": "REJECTED",
            "enteredTime": "2023-09-07T13:32:14+0000",
            "closeTime": "2023-09-07T13:32:14+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559663,
                    "cancelable": false,
                    "editable": false,
                    "status": "REJECTED",
                    "enteredTime": "2023-09-07T13:32:14+0000",
                    "closeTime": "2023-09-07T13:32:14+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 1239,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 245.11,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 1239
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559664,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:32:14+0000",
                            "closeTime": "2023-09-07T13:32:14+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order exceeds the day trade buying power.; Order Rejected due to Order: 11608559662"
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 1239,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 245.26,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 1239
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559665,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:32:14+0000",
                            "closeTime": "2023-09-07T13:32:14+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order exceeds the day trade buying power.; Order Rejected due to Order: 11608559662"
                        }
                    ],
                    "statusDescription": "This order exceeds the day trade buying power.; Order Rejected due to Order: 11608559662"
                }
            ],
            "statusDescription": "This order exceeds the day trade buying power."
        },
        "orderType": "LIMIT",
        "quantity": 1239,
        "isBuy": false,
        "positionEffectIsOpen": true,
        "price": 245.14
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559658,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "LIMIT",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 1239,
            "filledQuantity": 0,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "AutoRoute",
            "price": 245.14,
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "SELL_SHORT",
                    "positionEffect": "OPENING",
                    "quantity": 1239
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559658,
            "cancelable": false,
            "editable": false,
            "status": "REJECTED",
            "enteredTime": "2023-09-07T13:32:14+0000",
            "closeTime": "2023-09-07T13:32:14+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559659,
                    "cancelable": false,
                    "editable": false,
                    "status": "REJECTED",
                    "enteredTime": "2023-09-07T13:32:14+0000",
                    "closeTime": "2023-09-07T13:32:14+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 1239,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 245.11,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 1239
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559660,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:32:14+0000",
                            "closeTime": "2023-09-07T13:32:14+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order exceeds the day trade buying power.; Order Rejected due to Order: 11608559658"
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 1239,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 245.2,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 1239
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559661,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:32:14+0000",
                            "closeTime": "2023-09-07T13:32:14+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order exceeds the day trade buying power.; Order Rejected due to Order: 11608559658"
                        }
                    ],
                    "statusDescription": "This order exceeds the day trade buying power.; Order Rejected due to Order: 11608559658"
                }
            ],
            "statusDescription": "This order exceeds the day trade buying power."
        },
        "orderType": "LIMIT",
        "quantity": 1239,
        "isBuy": false,
        "positionEffectIsOpen": true,
        "price": 245.14
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559654,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "LIMIT",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 1239,
            "filledQuantity": 0,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "AutoRoute",
            "price": 245.14,
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "SELL_SHORT",
                    "positionEffect": "OPENING",
                    "quantity": 1239
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559654,
            "cancelable": false,
            "editable": false,
            "status": "REJECTED",
            "enteredTime": "2023-09-07T13:32:14+0000",
            "closeTime": "2023-09-07T13:32:14+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559655,
                    "cancelable": false,
                    "editable": false,
                    "status": "REJECTED",
                    "enteredTime": "2023-09-07T13:32:14+0000",
                    "closeTime": "2023-09-07T13:32:14+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 1239,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 245.11,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 1239
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559656,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:32:14+0000",
                            "closeTime": "2023-09-07T13:32:14+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order exceeds the day trade buying power.; Order Rejected due to Order: 11608559654"
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 1239,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 245.17,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 1239
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559657,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:32:14+0000",
                            "closeTime": "2023-09-07T13:32:14+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order exceeds the day trade buying power.; Order Rejected due to Order: 11608559654"
                        }
                    ],
                    "statusDescription": "This order exceeds the day trade buying power.; Order Rejected due to Order: 11608559654"
                }
            ],
            "statusDescription": "This order exceeds the day trade buying power."
        },
        "orderType": "LIMIT",
        "quantity": 1239,
        "isBuy": false,
        "positionEffectIsOpen": true,
        "price": 245.14
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559650,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "LIMIT",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 1239,
            "filledQuantity": 0,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "AutoRoute",
            "price": 245.14,
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "SELL_SHORT",
                    "positionEffect": "OPENING",
                    "quantity": 1239
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559650,
            "cancelable": false,
            "editable": false,
            "status": "REJECTED",
            "enteredTime": "2023-09-07T13:32:14+0000",
            "closeTime": "2023-09-07T13:32:14+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559651,
                    "cancelable": false,
                    "editable": false,
                    "status": "REJECTED",
                    "enteredTime": "2023-09-07T13:32:14+0000",
                    "closeTime": "2023-09-07T13:32:14+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 1239,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 245.11,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 1239
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559652,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:32:14+0000",
                            "closeTime": "2023-09-07T13:32:14+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order exceeds the day trade buying power.; Order Rejected due to Order: 11608559650"
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 1239,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 245.2,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 1239
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559653,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:32:14+0000",
                            "closeTime": "2023-09-07T13:32:14+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order exceeds the day trade buying power.; Order Rejected due to Order: 11608559650"
                        }
                    ],
                    "statusDescription": "This order exceeds the day trade buying power.; Order Rejected due to Order: 11608559650"
                }
            ],
            "statusDescription": "This order exceeds the day trade buying power."
        },
        "orderType": "LIMIT",
        "quantity": 1239,
        "isBuy": false,
        "positionEffectIsOpen": true,
        "price": 245.14
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559676,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "STOP",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 28,
            "filledQuantity": 28,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "CDRG",
            "stopPrice": 243.76,
            "stopType": "STANDARD",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "SELL_SHORT",
                    "positionEffect": "OPENING",
                    "quantity": 28
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559676,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:32:17+0000",
            "closeTime": "2023-09-07T13:32:26+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59302092301,
                    "executionType": "FILL",
                    "quantity": 28,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 28,
                            "mismarkedQuantity": 0,
                            "price": 243.7504,
                            "time": "2023-09-07T13:32:26+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559677,
                    "cancelable": false,
                    "editable": false,
                    "status": "FILLED",
                    "enteredTime": "2023-09-07T13:32:17+0000",
                    "closeTime": "2023-09-07T13:37:00+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 28,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "UBSS",
                            "stopPrice": 245.11,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559678,
                            "cancelable": false,
                            "editable": false,
                            "status": "FILLED",
                            "enteredTime": "2023-09-07T13:32:17+0000",
                            "closeTime": "2023-09-07T13:36:58+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "orderActivityCollection": [
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59303855617,
                                    "executionType": "FILL",
                                    "quantity": 28,
                                    "orderRemainingQuantity": 0,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 28,
                                            "mismarkedQuantity": 28,
                                            "price": 245.139,
                                            "time": "2023-09-07T13:36:58+0000"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "SOHO",
                            "price": 242.68,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559679,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:32:17+0000",
                            "closeTime": "2023-09-07T13:37:00+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "STOP",
        "quantity": 28,
        "isBuy": false,
        "positionEffectIsOpen": true,
        "price": 243.76
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559670,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "LIMIT",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 1234,
            "filledQuantity": 0,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "AutoRoute",
            "price": 245.14,
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "SELL_SHORT",
                    "positionEffect": "OPENING",
                    "quantity": 1234
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559670,
            "cancelable": false,
            "editable": false,
            "status": "REJECTED",
            "enteredTime": "2023-09-07T13:32:14+0000",
            "closeTime": "2023-09-07T13:32:14+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559671,
                    "cancelable": false,
                    "editable": false,
                    "status": "REJECTED",
                    "enteredTime": "2023-09-07T13:32:14+0000",
                    "closeTime": "2023-09-07T13:32:14+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 1234,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 245.11,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 1234
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559672,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:32:14+0000",
                            "closeTime": "2023-09-07T13:32:14+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order exceeds the day trade buying power.; Order Rejected due to Order: 11608559670"
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 1234,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 245.44,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 1234
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559673,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:32:14+0000",
                            "closeTime": "2023-09-07T13:32:14+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order exceeds the day trade buying power.; Order Rejected due to Order: 11608559670"
                        }
                    ],
                    "statusDescription": "This order exceeds the day trade buying power.; Order Rejected due to Order: 11608559670"
                }
            ],
            "statusDescription": "This order exceeds the day trade buying power."
        },
        "orderType": "LIMIT",
        "quantity": 1234,
        "isBuy": false,
        "positionEffectIsOpen": true,
        "price": 245.14
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559666,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "LIMIT",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 1239,
            "filledQuantity": 0,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "AutoRoute",
            "price": 245.14,
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "SELL_SHORT",
                    "positionEffect": "OPENING",
                    "quantity": 1239
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559666,
            "cancelable": false,
            "editable": false,
            "status": "REJECTED",
            "enteredTime": "2023-09-07T13:32:14+0000",
            "closeTime": "2023-09-07T13:32:14+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559667,
                    "cancelable": false,
                    "editable": false,
                    "status": "REJECTED",
                    "enteredTime": "2023-09-07T13:32:14+0000",
                    "closeTime": "2023-09-07T13:32:14+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 1239,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 245.11,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 1239
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559668,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:32:14+0000",
                            "closeTime": "2023-09-07T13:32:14+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order exceeds the day trade buying power.; Order Rejected due to Order: 11608559666"
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 1239,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 245.23,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 1239
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559669,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:32:14+0000",
                            "closeTime": "2023-09-07T13:32:14+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order exceeds the day trade buying power.; Order Rejected due to Order: 11608559666"
                        }
                    ],
                    "statusDescription": "This order exceeds the day trade buying power.; Order Rejected due to Order: 11608559666"
                }
            ],
            "statusDescription": "This order exceeds the day trade buying power."
        },
        "orderType": "LIMIT",
        "quantity": 1239,
        "isBuy": false,
        "positionEffectIsOpen": true,
        "price": 245.14
    },
    {
        "symbol": "TSLA",
        "orderID": 11609218074,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "MARKET",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 28,
            "filledQuantity": 28,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "CDRG",
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "BUY",
                    "positionEffect": "OPENING",
                    "quantity": 28
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11609218074,
            "cancelable": false,
            "editable": false,
            "status": "FILLED",
            "enteredTime": "2023-09-07T13:54:05+0000",
            "closeTime": "2023-09-07T13:54:06+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "orderActivityCollection": [
                {
                    "activityType": "EXECUTION",
                    "activityId": 59305432803,
                    "executionType": "FILL",
                    "quantity": 28,
                    "orderRemainingQuantity": 0,
                    "executionLegs": [
                        {
                            "legId": 1,
                            "quantity": 28,
                            "mismarkedQuantity": 0,
                            "price": 245.19,
                            "time": "2023-09-07T13:54:06+0000"
                        }
                    ]
                }
            ],
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11609218075,
                    "cancelable": false,
                    "editable": false,
                    "status": "FILLED",
                    "enteredTime": "2023-09-07T13:54:05+0000",
                    "closeTime": "2023-09-07T14:03:02+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "UBSS",
                            "stopPrice": 243.26,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609218076,
                            "cancelable": false,
                            "editable": false,
                            "status": "REPLACED",
                            "enteredTime": "2023-09-07T13:54:05+0000",
                            "closeTime": "2023-09-07T14:01:39+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 28,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "ETMM",
                            "stopPrice": 244.51,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609218676,
                            "cancelable": false,
                            "editable": false,
                            "status": "FILLED",
                            "enteredTime": "2023-09-07T14:01:39+0000",
                            "closeTime": "2023-09-07T14:03:02+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "orderActivityCollection": [
                                {
                                    "activityType": "EXECUTION",
                                    "activityId": 59307460666,
                                    "executionType": "FILL",
                                    "quantity": 28,
                                    "orderRemainingQuantity": 0,
                                    "executionLegs": [
                                        {
                                            "legId": 1,
                                            "quantity": 28,
                                            "mismarkedQuantity": 0,
                                            "price": 244.5001,
                                            "time": "2023-09-07T14:03:02+0000"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 28,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "SOHO",
                            "price": 248.74,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "SELL",
                                    "positionEffect": "CLOSING",
                                    "quantity": 28
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11609218077,
                            "cancelable": false,
                            "editable": false,
                            "status": "CANCELED",
                            "enteredTime": "2023-09-07T13:54:05+0000",
                            "closeTime": "2023-09-07T14:03:02+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551
                        }
                    ]
                }
            ]
        },
        "orderType": "MARKET",
        "quantity": 28,
        "isBuy": true,
        "positionEffectIsOpen": true,
        "price": 0
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559646,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "LIMIT",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 1239,
            "filledQuantity": 0,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "AutoRoute",
            "price": 245.14,
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "SELL_SHORT",
                    "positionEffect": "OPENING",
                    "quantity": 1239
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559646,
            "cancelable": false,
            "editable": false,
            "status": "REJECTED",
            "enteredTime": "2023-09-07T13:32:14+0000",
            "closeTime": "2023-09-07T13:32:14+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559647,
                    "cancelable": false,
                    "editable": false,
                    "status": "REJECTED",
                    "enteredTime": "2023-09-07T13:32:14+0000",
                    "closeTime": "2023-09-07T13:32:14+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 1239,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 245.11,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 1239
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559648,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:32:14+0000",
                            "closeTime": "2023-09-07T13:32:14+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order exceeds the day trade buying power.; Order Rejected due to Order: 11608559646"
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 1239,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 245.17,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 1239
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559649,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:32:14+0000",
                            "closeTime": "2023-09-07T13:32:14+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order exceeds the day trade buying power.; Order Rejected due to Order: 11608559646"
                        }
                    ],
                    "statusDescription": "This order exceeds the day trade buying power.; Order Rejected due to Order: 11608559646"
                }
            ],
            "statusDescription": "This order exceeds the day trade buying power."
        },
        "orderType": "LIMIT",
        "quantity": 1239,
        "isBuy": false,
        "positionEffectIsOpen": true,
        "price": 245.14
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559642,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "LIMIT",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 1239,
            "filledQuantity": 0,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "AutoRoute",
            "price": 245.14,
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "SELL_SHORT",
                    "positionEffect": "OPENING",
                    "quantity": 1239
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559642,
            "cancelable": false,
            "editable": false,
            "status": "REJECTED",
            "enteredTime": "2023-09-07T13:32:14+0000",
            "closeTime": "2023-09-07T13:32:14+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559643,
                    "cancelable": false,
                    "editable": false,
                    "status": "REJECTED",
                    "enteredTime": "2023-09-07T13:32:14+0000",
                    "closeTime": "2023-09-07T13:32:14+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 1239,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 245.11,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 1239
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559644,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:32:14+0000",
                            "closeTime": "2023-09-07T13:32:14+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order exceeds the day trade buying power.; Order Rejected due to Order: 11608559642"
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 1239,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 245.16,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 1239
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559645,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:32:14+0000",
                            "closeTime": "2023-09-07T13:32:14+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order exceeds the day trade buying power.; Order Rejected due to Order: 11608559642"
                        }
                    ],
                    "statusDescription": "This order exceeds the day trade buying power.; Order Rejected due to Order: 11608559642"
                }
            ],
            "statusDescription": "This order exceeds the day trade buying power."
        },
        "orderType": "LIMIT",
        "quantity": 1239,
        "isBuy": false,
        "positionEffectIsOpen": true,
        "price": 245.14
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559638,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "LIMIT",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 1239,
            "filledQuantity": 0,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "AutoRoute",
            "price": 245.14,
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "SELL_SHORT",
                    "positionEffect": "OPENING",
                    "quantity": 1239
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559638,
            "cancelable": false,
            "editable": false,
            "status": "REJECTED",
            "enteredTime": "2023-09-07T13:32:14+0000",
            "closeTime": "2023-09-07T13:32:14+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559639,
                    "cancelable": false,
                    "editable": false,
                    "status": "REJECTED",
                    "enteredTime": "2023-09-07T13:32:14+0000",
                    "closeTime": "2023-09-07T13:32:14+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 1239,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 245.11,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 1239
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559640,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:32:14+0000",
                            "closeTime": "2023-09-07T13:32:14+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order exceeds the day trade buying power.; Order Rejected due to Order: 11608559638"
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 1239,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 245.18,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 1239
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559641,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:32:14+0000",
                            "closeTime": "2023-09-07T13:32:14+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order exceeds the day trade buying power.; Order Rejected due to Order: 11608559638"
                        }
                    ],
                    "statusDescription": "This order exceeds the day trade buying power.; Order Rejected due to Order: 11608559638"
                }
            ],
            "statusDescription": "This order exceeds the day trade buying power."
        },
        "orderType": "LIMIT",
        "quantity": 1239,
        "isBuy": false,
        "positionEffectIsOpen": true,
        "price": 245.14
    },
    {
        "symbol": "TSLA",
        "orderID": 11608559634,
        "rawOrder": {
            "session": "NORMAL",
            "duration": "GOOD_TILL_CANCEL",
            "orderType": "LIMIT",
            "cancelTime": "2024-03-05",
            "complexOrderStrategyType": "NONE",
            "quantity": 1239,
            "filledQuantity": 0,
            "remainingQuantity": 0,
            "requestedDestination": "AUTO",
            "destinationLinkName": "AutoRoute",
            "price": 245.14,
            "orderLegCollection": [
                {
                    "orderLegType": "EQUITY",
                    "legId": 1,
                    "instrument": {
                        "assetType": "EQUITY",
                        "cusip": "88160R101",
                        "symbol": "TSLA"
                    },
                    "instruction": "SELL_SHORT",
                    "positionEffect": "OPENING",
                    "quantity": 1239
                }
            ],
            "orderStrategyType": "TRIGGER",
            "orderId": 11608559634,
            "cancelable": false,
            "editable": false,
            "status": "REJECTED",
            "enteredTime": "2023-09-07T13:32:14+0000",
            "closeTime": "2023-09-07T13:32:14+0000",
            "tag": "AA_lingrong",
            "accountId": 686083551,
            "childOrderStrategies": [
                {
                    "orderStrategyType": "OCO",
                    "orderId": 11608559635,
                    "cancelable": false,
                    "editable": false,
                    "status": "REJECTED",
                    "enteredTime": "2023-09-07T13:32:14+0000",
                    "closeTime": "2023-09-07T13:32:14+0000",
                    "tag": "AA_lingrong",
                    "accountId": 686083551,
                    "childOrderStrategies": [
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "STOP",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 1239,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "stopPrice": 245.11,
                            "stopType": "STANDARD",
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 1239
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559636,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:32:14+0000",
                            "closeTime": "2023-09-07T13:32:14+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order exceeds the day trade buying power.; Order Rejected due to Order: 11608559634"
                        },
                        {
                            "session": "NORMAL",
                            "duration": "GOOD_TILL_CANCEL",
                            "orderType": "LIMIT",
                            "cancelTime": "2024-03-05",
                            "complexOrderStrategyType": "NONE",
                            "quantity": 1239,
                            "filledQuantity": 0,
                            "remainingQuantity": 0,
                            "requestedDestination": "AUTO",
                            "destinationLinkName": "AutoRoute",
                            "price": 245.19,
                            "orderLegCollection": [
                                {
                                    "orderLegType": "EQUITY",
                                    "legId": 1,
                                    "instrument": {
                                        "assetType": "EQUITY",
                                        "cusip": "88160R101",
                                        "symbol": "TSLA"
                                    },
                                    "instruction": "BUY_TO_COVER",
                                    "positionEffect": "CLOSING",
                                    "quantity": 1239
                                }
                            ],
                            "orderStrategyType": "SINGLE",
                            "orderId": 11608559637,
                            "cancelable": false,
                            "editable": false,
                            "status": "REJECTED",
                            "enteredTime": "2023-09-07T13:32:14+0000",
                            "closeTime": "2023-09-07T13:32:14+0000",
                            "tag": "AA_lingrong",
                            "accountId": 686083551,
                            "statusDescription": "This order exceeds the day trade buying power.; Order Rejected due to Order: 11608559634"
                        }
                    ],
                    "statusDescription": "This order exceeds the day trade buying power.; Order Rejected due to Order: 11608559634"
                }
            ],
            "statusDescription": "This order exceeds the day trade buying power."
        },
        "orderType": "LIMIT",
        "quantity": 1239,
        "isBuy": false,
        "positionEffectIsOpen": true,
        "price": 245.14
    }
]