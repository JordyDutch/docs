<!-- This file is auto-generated. Do not edit! -->
<!-- Check `@lukso-network/lsp-smart-contracts/CONTRIBUTING.md#solidity-code-comments` for more information. -->

# UniversalProfile

:::info Standard Specifications

[`UniversalProfile`](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md)

:::
:::info Solidity implementation

[`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)

:::

> implementation of a LUKSO&#39;s Universal Profile based on LSP3

Implementation of the ERC725Account + LSP1 universalReceiver

## Public Methods

Public methods are accessible externally from users, allowing interaction with this function from dApps or other smart contracts.
When marked as 'public', a method can be called both externally and internally, on the other hand, when marked as 'external', a method can only be called externally.

### constructor

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#constructor)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)

:::

```solidity
constructor(address initialOwner);
```

_Deploying a UniversalProfile contract with owner set to address `initialOwner`._

Set `initialOwner` as the contract owner and the `SupportedStandards:LSP3UniversalProfile` data key in the ERC725Y data key/value store. The `constructor` also allows funding the contract on deployment.

<blockquote>

**Emitted events:**

- [`ValueReceived`](#valuereceived) event when funding the contract on deployment.
- [`OwnershipTransferred`](#ownershiptransferred) event when `initialOwner` is set as the contract [`owner`](#owner).
- [`DataChanged`](#datachanged) event when setting the [`_LSP3_SUPPORTED_STANDARDS_KEY`](#_lsp3_supported_standards_key).

</blockquote>

#### Parameters

| Name           |   Type    | Description               |
| -------------- | :-------: | ------------------------- |
| `initialOwner` | `address` | the owner of the contract |

<br/>

### fallback

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#fallback)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)

:::

```solidity
fallback() external payable;
```

<br/>

### receive

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#receive)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)

:::

```solidity
receive() external payable;
```

<br/>

### RENOUNCE_OWNERSHIP_CONFIRMATION_DELAY

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#renounce_ownership_confirmation_delay)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Function signature: `RENOUNCE_OWNERSHIP_CONFIRMATION_DELAY()`
- Function selector: `0xead3fbdf`

:::

```solidity
function RENOUNCE_OWNERSHIP_CONFIRMATION_DELAY()
  external
  view
  returns (uint256);
```

#### Returns

| Name |   Type    | Description |
| ---- | :-------: | ----------- |
| `0`  | `uint256` | -           |

<br/>

### RENOUNCE_OWNERSHIP_CONFIRMATION_PERIOD

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#renounce_ownership_confirmation_period)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Function signature: `RENOUNCE_OWNERSHIP_CONFIRMATION_PERIOD()`
- Function selector: `0x01bfba61`

:::

```solidity
function RENOUNCE_OWNERSHIP_CONFIRMATION_PERIOD()
  external
  view
  returns (uint256);
```

#### Returns

| Name |   Type    | Description |
| ---- | :-------: | ----------- |
| `0`  | `uint256` | -           |

<br/>

### acceptOwnership

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#acceptownership)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Function signature: `acceptOwnership()`
- Function selector: `0x79ba5097`

:::

```solidity
function acceptOwnership() external nonpayable;
```

_`msg.sender` is accepting ownership of contract: `address(this)`._

Transfer ownership of the contract from the current [`owner()`](#owner) to the [`pendingOwner()`](#pendingowner). Once this function is called:

- The current [`owner()`](#owner) will loose access to the functions restricted to the [`owner()`](#owner) only.

- The [`pendingOwner()`](#pendingowner) will gain access to the functions restricted to the [`owner()`](#owner) only.

<blockquote>

**Requirements:**

- Only the [`pendingOwner`](#pendingowner) can call this function.
- When notifying the previous owner via LSP1, the typeId used must be the `keccak256(...)` hash of [LSP0OwnershipTransferred_SenderNotification].
- When notifying the new owner via LSP1, the typeId used must be the `keccak256(...)` hash of [LSP0OwnershipTransferred_RecipientNotification].

</blockquote>

<br/>

### batchCalls

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#batchcalls)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Function signature: `batchCalls(bytes[])`
- Function selector: `0x6963d438`

:::

:::info

It&#39;s not possible to send value along the functions call due to the use of `delegatecall`.

:::

```solidity
function batchCalls(bytes[] data) external nonpayable returns (bytes[] results);
```

_Executing the following batch of abi-encoded function calls on the contract: `data`._

Allows a caller to batch different function calls in one call. Perform a `delegatecall` on self, to call different functions with preserving the context.

#### Parameters

| Name   |   Type    | Description                                                          |
| ------ | :-------: | -------------------------------------------------------------------- |
| `data` | `bytes[]` | An array of ABI encoded function calls to be called on the contract. |

#### Returns

| Name      |   Type    | Description                                                      |
| --------- | :-------: | ---------------------------------------------------------------- |
| `results` | `bytes[]` | An array of abi-encoded data returned by the functions executed. |

<br/>

### execute

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#execute)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Function signature: `execute(uint256,address,uint256,bytes)`
- Function selector: `0x44c028fe`

:::

```solidity
function execute(
  uint256 operationType,
  address target,
  uint256 value,
  bytes data
) external payable returns (bytes);
```

Generic executor function to:

- send native tokens to any address.

- interact with any contract by passing an abi-encoded function call in the `data` parameter.

- deploy a contract by providing its creation bytecode in the `data` parameter. Requirements:

- SHOULD only be callable by the owner of the contract set via ERC173.

- if a `value` is provided, the contract MUST have at least this amount in its balance to execute successfully.

- if the operation type is STATICCALL or DELEGATECALL, `value` SHOULD be 0.

- `target` SHOULD be address(0) when deploying a contract. Emits an [`Executed`](#executed) event, when a call is made with `operationType` 0 (CALL), 3 (STATICCALL) or 4 (DELEGATECALL) Emits a [`ContractCreated`](#contractcreated) event, when deploying a contract with `operationType` 1 (CREATE) or 2 (CREATE2)

<blockquote>

**Requirements:**

- Can be only called by the [`owner`](#owner) or by an authorised address that pass the verification check performed on the owner.
- If a `value` is provided, the contract must have at least this amount in its balance to execute successfully.
- If the operation type is `CREATE` (1) or `CREATE2` (2), `target` must be `address(0)`.
- If the operation type is `STATICCALL` (3) or `DELEGATECALL` (4), `value` transfer is disallowed and must be 0.

</blockquote>

<blockquote>

**Emitted events:**

- [`Executed`](#executed) event for each call that uses under `operationType`: `CALL` (0), `STATICCALL` (3) and `DELEGATECALL` (4).
- [`ContractCreated`](#contractcreated) event, when a contract is created under `operationType`: `CREATE` (1) and `CREATE2` (2).
- [`ValueReceived`](#valuereceived) event when receiving native tokens.

</blockquote>

#### Parameters

| Name            |   Type    | Description                                                                                           |
| --------------- | :-------: | ----------------------------------------------------------------------------------------------------- |
| `operationType` | `uint256` | The operation type used: CALL = 0; CREATE = 1; CREATE2 = 2; STATICCALL = 3; DELEGATECALL = 4          |
| `target`        | `address` | The address of the EOA or smart contract. (unused if a contract is created via operation type 1 or 2) |
| `value`         | `uint256` | The amount of native tokens to transfer (in Wei)                                                      |
| `data`          |  `bytes`  | The call data, or the creation bytecode of the contract to deploy                                     |

#### Returns

| Name |  Type   | Description |
| ---- | :-----: | ----------- |
| `0`  | `bytes` | -           |

<br/>

### executeBatch

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#executebatch)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Function signature: `executeBatch(uint256[],address[],uint256[],bytes[])`
- Function selector: `0x31858452`

:::

```solidity
function executeBatch(
  uint256[] operationsType,
  address[] targets,
  uint256[] values,
  bytes[] datas
) external payable returns (bytes[]);
```

Generic batch executor function to:

- send native tokens to any address.

- interact with any contract by passing an abi-encoded function call in the `datas` parameter.

- deploy a contract by providing its creation bytecode in the `datas` parameter. Requirements:

- The length of the parameters provided MUST be equal

- SHOULD only be callable by the owner of the contract set via ERC173.

- if a `values` is provided, the contract MUST have at least this amount in its balance to execute successfully.

- if the operation type is STATICCALL or DELEGATECALL, `values` SHOULD be 0.

- `targets` SHOULD be address(0) when deploying a contract. Emits an [`Executed`](#executed) event, when a call is made with `operationType` 0 (CALL), 3 (STATICCALL) or 4 (DELEGATECALL) Emits a [`ContractCreated`](#contractcreated) event, when deploying a contract with `operationType` 1 (CREATE) or 2 (CREATE2)

<blockquote>

**Requirements:**

- The length of the parameters provided must be equal.
- Can be only called by the [`owner`](#owner) or by an authorised address that pass the verification check performed on the owner.
- If a `value` is provided, the contract must have at least this amount in its balance to execute successfully.
- If the operation type is `CREATE` (1) or `CREATE2` (2), `target` must be `address(0)`.
- If the operation type is `STATICCALL` (3) or `DELEGATECALL` (4), `value` transfer is disallowed and must be 0.

</blockquote>

<blockquote>

**Emitted events:**

- [`Executed`](#executed) event for each call that uses under `operationType`: `CALL` (0), `STATICCALL` (3) and `DELEGATECALL` (4). (each iteration)
- [`ContractCreated`](#contractcreated) event, when a contract is created under `operationType`: `CREATE` (1) and `CREATE2` (2) (each iteration)
- [`ValueReceived`](#valuereceived) event when receiving native tokens.

</blockquote>

#### Parameters

| Name             |    Type     | Description                                                                                                 |
| ---------------- | :---------: | ----------------------------------------------------------------------------------------------------------- |
| `operationsType` | `uint256[]` | The list of operations type used: CALL = 0; CREATE = 1; CREATE2 = 2; STATICCALL = 3; DELEGATECALL = 4       |
| `targets`        | `address[]` | The list of addresses to call. `targets` will be unused if a contract is created (operation types 1 and 2). |
| `values`         | `uint256[]` | The list of native token amounts to transfer (in Wei)                                                       |
| `datas`          |  `bytes[]`  | The list of call data, or the creation bytecode of the contract to deploy                                   |

#### Returns

| Name |   Type    | Description |
| ---- | :-------: | ----------- |
| `0`  | `bytes[]` | -           |

<br/>

### getData

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#getdata)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Function signature: `getData(bytes32)`
- Function selector: `0x54f6127f`

:::

```solidity
function getData(bytes32 dataKey) external view returns (bytes dataValue);
```

_Gets singular data at a given `dataKey`_

#### Parameters

| Name      |   Type    | Description                     |
| --------- | :-------: | ------------------------------- |
| `dataKey` | `bytes32` | The key which value to retrieve |

#### Returns

| Name        |  Type   | Description                |
| ----------- | :-----: | -------------------------- |
| `dataValue` | `bytes` | The data stored at the key |

<br/>

### getDataBatch

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#getdatabatch)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Function signature: `getDataBatch(bytes32[])`
- Function selector: `0xdedff9c6`

:::

```solidity
function getDataBatch(
  bytes32[] dataKeys
) external view returns (bytes[] dataValues);
```

_Gets array of data for multiple given keys_

#### Parameters

| Name       |    Type     | Description                                |
| ---------- | :---------: | ------------------------------------------ |
| `dataKeys` | `bytes32[]` | The array of keys which values to retrieve |

#### Returns

| Name         |   Type    | Description                               |
| ------------ | :-------: | ----------------------------------------- |
| `dataValues` | `bytes[]` | The array of data stored at multiple keys |

<br/>

### isValidSignature

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#isvalidsignature)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Function signature: `isValidSignature(bytes32,bytes)`
- Function selector: `0x1626ba7e`

:::

```solidity
function isValidSignature(
  bytes32 dataHash,
  bytes signature
) external view returns (bytes4 magicValue);
```

_Achieves the goal of [EIP-1271] by validating signatures of smart contracts according to their own logic._

Handles two cases:

1. If the owner is an EOA, recovers an address from the hash and the signature provided:

- Returns the `magicValue` if the address recovered is the same as the owner, indicating that it was a valid signature.

- If the address is different, it returns the fail value indicating that the signature is not valid.

2. If the owner is a smart contract, it forwards the call of [`isValidSignature()`](#isvalidsignature) to the owner contract:

- If the contract fails or returns the fail value, the [`isValidSignature()`](#isvalidsignature) on the account returns the fail value, indicating that the signature is not valid.

- If the [`isValidSignature()`](#isvalidsignature) on the owner returned the `magicValue`, the [`isValidSignature()`](#isvalidsignature) on the account returns the `magicValue`, indicating that it's a valid signature.

#### Parameters

| Name        |   Type    | Description                                                  |
| ----------- | :-------: | ------------------------------------------------------------ |
| `dataHash`  | `bytes32` | The hash of the data to be validated.                        |
| `signature` |  `bytes`  | A signature that can validate the previous parameter (Hash). |

#### Returns

| Name         |   Type   | Description                                                       |
| ------------ | :------: | ----------------------------------------------------------------- |
| `magicValue` | `bytes4` | A `bytes4` value that indicates if the signature is valid or not. |

<br/>

### owner

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#owner)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Function signature: `owner()`
- Function selector: `0x8da5cb5b`

:::

```solidity
function owner() external view returns (address);
```

Returns the address of the current owner.

#### Returns

| Name |   Type    | Description |
| ---- | :-------: | ----------- |
| `0`  | `address` | -           |

<br/>

### pendingOwner

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#pendingowner)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Function signature: `pendingOwner()`
- Function selector: `0xe30c3978`

:::

:::info

If no ownership transfer is in progress, the pendingOwner will be `address(0).`.

:::

```solidity
function pendingOwner() external view returns (address);
```

The address that ownership of the contract is transferred to. This address may use [`acceptOwnership()`](#acceptownership) to gain ownership of the contract.

#### Returns

| Name |   Type    | Description |
| ---- | :-------: | ----------- |
| `0`  | `address` | -           |

<br/>

### renounceOwnership

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#renounceownership)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Function signature: `renounceOwnership()`
- Function selector: `0x715018a6`

:::

:::danger

Leaves the contract without an owner. Once ownership of the contract has been renounced, any functions that are restricted to be called by the owner will be permanently inaccessible, making these functions not callable anymore and unusable.

:::

```solidity
function renounceOwnership() external nonpayable;
```

_`msg.sender` is renouncing ownership of contract `address(this)`._

Renounce ownership of the contract in a 2-step process.

1. The first call will initiate the process of renouncing ownership.

2. The second call is used as a confirmation and will leave the contract without an owner.

<blockquote>

**Requirements:**

- Can be only called by the [`owner`](#owner) or by an authorised address that pass the verification check performed on the owner.

</blockquote>

<br/>

### setData

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#setdata)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Function signature: `setData(bytes32,bytes)`
- Function selector: `0x7f23690c`

:::

```solidity
function setData(bytes32 dataKey, bytes dataValue) external payable;
```

_Sets singular data for a given `dataKey`_

<blockquote>

**Requirements:**

- Can be only called by the [`owner`](#owner) or by an authorised address that pass the verification check performed on the owner.

</blockquote>

<blockquote>

**Emitted events:**

- [`ValueReceived`](#valuereceived) event when receiving native tokens.
- [`DataChanged`](#datachanged) event.

</blockquote>

#### Parameters

| Name        |   Type    | Description                                                                                                                                                                                                                                                                                                           |
| ----------- | :-------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dataKey`   | `bytes32` | The key to retrieve stored value                                                                                                                                                                                                                                                                                      |
| `dataValue` |  `bytes`  | The value to set SHOULD only be callable by the owner of the contract set via ERC173 The function is marked as payable to enable flexibility on child contracts If the function is not intended to receive value, an additional check should be implemented to check that value equal 0. Emits a {DataChanged} event. |

<br/>

### setDataBatch

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#setdatabatch)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Function signature: `setDataBatch(bytes32[],bytes[])`
- Function selector: `0x97902421`

:::

```solidity
function setDataBatch(bytes32[] dataKeys, bytes[] dataValues) external payable;
```

Sets array of data for multiple given `dataKeys` SHOULD only be callable by the owner of the contract set via ERC173 The function is marked as payable to enable flexibility on child contracts If the function is not intended to receive value, an additional check should be implemented to check that value equal

0. Emits a [`DataChanged`](#datachanged) event.

<blockquote>

**Requirements:**

- Can be only called by the [`owner`](#owner) or by an authorised address that pass the verification check performed on the owner.

</blockquote>

<blockquote>

**Emitted events:**

- [`ValueReceived`](#valuereceived) event when receiving native tokens.
- [`DataChanged`](#datachanged) event. (on each iteration of setting data)

</blockquote>

#### Parameters

| Name         |    Type     | Description                              |
| ------------ | :---------: | ---------------------------------------- |
| `dataKeys`   | `bytes32[]` | The array of data keys for values to set |
| `dataValues` |  `bytes[]`  | The array of values to set               |

<br/>

### supportsInterface

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#supportsinterface)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Function signature: `supportsInterface(bytes4)`
- Function selector: `0x01ffc9a7`

:::

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool);
```

_Checking if this contract supports the interface defined by the `bytes4` interface ID `interfaceId`._

Achieves the goal of [ERC-165] to detect supported interfaces and [LSP-17-ContractExtension] by checking if the interfaceId being queried is supported on another linked extension. If the contract doesn't support the `interfaceId`, it forwards the call to the `supportsInterface` extension according to [LSP-17-ContractExtension], and checks if the extension implements the interface defined by `interfaceId`.

#### Parameters

| Name          |   Type   | Description                                            |
| ------------- | :------: | ------------------------------------------------------ |
| `interfaceId` | `bytes4` | The interface ID to check if the contract supports it. |

#### Returns

| Name |  Type  | Description                                                                                   |
| ---- | :----: | --------------------------------------------------------------------------------------------- |
| `0`  | `bool` | `true` if this contract implements the interface defined by `interfaceId`, `false` otherwise. |

<br/>

### transferOwnership

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#transferownership)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Function signature: `transferOwnership(address)`
- Function selector: `0xf2fde38b`

:::

```solidity
function transferOwnership(address pendingNewOwner) external nonpayable;
```

_Transfer ownership initiated by `newOwner`._

Initiate the process of transferring ownership of the contract by setting the new owner as the pending owner. If the new owner is a contract that supports + implements LSP1, this will also attempt to notify the new owner that ownership has been transferred to them by calling the [`universalReceiver()`](#universalreceiver) function on the `newOwner` contract.

<blockquote>

**Requirements:**

- Can be only called by the [`owner`](#owner) or by an authorised address that pass the verification check performed on the owner.
- When notifying the new owner via LSP1, the `typeId` used must be the `keccak256(...)` hash of [LSP0OwnershipTransferStarted].
- Pending owner cannot accept ownership in the same tx via the LSP1 hook.

</blockquote>

#### Parameters

| Name              |   Type    | Description |
| ----------------- | :-------: | ----------- |
| `pendingNewOwner` | `address` | -           |

<br/>

### universalReceiver

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#universalreceiver)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Function signature: `universalReceiver(bytes32,bytes)`
- Function selector: `0x6bb56a14`

:::

```solidity
function universalReceiver(
  bytes32 typeId,
  bytes receivedData
) external payable returns (bytes returnedValues);
```

_Notifying the contract by calling its `universalReceiver` function with the following informations: typeId: `typeId`; data: `data`._

Achieves the goal of [LSP-1-UniversalReceiver] by allowing the account to be notified about incoming/outgoing transactions and enabling reactions to these actions. The reaction is achieved by having two external contracts ([LSP1UniversalReceiverDelegate]) that react on the whole transaction and on the specific typeId, respectively. The function performs the following steps:

1. Query the [ERC-725Y] storage with the data key [_LSP1_UNIVERSAL_RECEIVER_DELEGATE_KEY].

- If there is an address stored under the data key, check if this address supports the LSP1 interfaceId.

- If yes, call this address with the typeId and data (params), along with additional calldata consisting of 20 bytes of `msg.sender` and 32 bytes of `msg.value`. If not, continue the execution of the function.

2. Query the [ERC-725Y] storage with the data key [_LSP1_UNIVERSAL_RECEIVER_DELEGATE_PREFIX] + `bytes32(typeId)`. (Check [LSP-2-ERC725YJSONSchema] for encoding the data key)

- If there is an address stored under the data key, check if this address supports the LSP1 interfaceId.

- If yes, call this address with the typeId and data (params), along with additional calldata consisting of 20 bytes of `msg.sender` and 32 bytes of `msg.value`. If not, continue the execution of the function.

<blockquote>

**Emitted events:**

- [`ValueReceived`](#valuereceived) when receiving native tokens.
- [`UniversalReceiver`](#universalreceiver) event with the function parameters, call options, and the response of the UniversalReceiverDelegates (URD) contract that was called.

</blockquote>

#### Parameters

| Name           |   Type    | Description                |
| -------------- | :-------: | -------------------------- |
| `typeId`       | `bytes32` | The type of call received. |
| `receivedData` |  `bytes`  | The data received.         |

#### Returns

| Name             |  Type   | Description                                                                                             |
| ---------------- | :-----: | ------------------------------------------------------------------------------------------------------- |
| `returnedValues` | `bytes` | The ABI encoded return value of the LSP1UniversalReceiverDelegate call and the LSP1TypeIdDelegate call. |

<br/>

## Internal Methods

Any method labeled as `internal` serves as utility function within the contract. They can be used when writing solidity contracts that inherit from this contract. These methods can be extended or modified by overriding their internal behavior to suit specific needs.

Internal functions cannot be called externally, whether from other smart contracts, dApp interfaces, or backend services. Their restricted accessibility ensures that they remain exclusively available within the context of the current contract, promoting controlled and encapsulated usage of these internal utilities.

### \_checkOwner

```solidity
function _checkOwner() internal view;
```

Throws if the sender is not the owner.

<br/>

### \_setOwner

```solidity
function _setOwner(address newOwner) internal nonpayable;
```

Changes the owner if `newOwner` and oldOwner are different
This pattern is useful in inheritance.

<br/>

### \_execute

```solidity
function _execute(
  uint256 operationType,
  address target,
  uint256 value,
  bytes data
) internal nonpayable returns (bytes);
```

check the `operationType` provided and perform the associated low-level opcode.
see `IERC725X.execute(uint256,address,uint256,bytes)`.

<br/>

### \_executeBatch

```solidity
function _executeBatch(
  uint256[] operationsType,
  address[] targets,
  uint256[] values,
  bytes[] datas
) internal nonpayable returns (bytes[]);
```

same as `_execute` but for batch execution
see `IERC725X,execute(uint256[],address[],uint256[],bytes[])`

<br/>

### \_executeCall

```solidity
function _executeCall(
  address target,
  uint256 value,
  bytes data
) internal nonpayable returns (bytes result);
```

perform low-level call (operation type = 0)

#### Parameters

| Name     |   Type    | Description                           |
| -------- | :-------: | ------------------------------------- |
| `target` | `address` | The address on which call is executed |
| `value`  | `uint256` | The value to be sent with the call    |
| `data`   |  `bytes`  | The data to be sent with the call     |

#### Returns

| Name     |  Type   | Description            |
| -------- | :-----: | ---------------------- |
| `result` | `bytes` | The data from the call |

<br/>

### \_executeStaticCall

```solidity
function _executeStaticCall(
  address target,
  bytes data
) internal nonpayable returns (bytes result);
```

perform low-level staticcall (operation type = 3)

#### Parameters

| Name     |   Type    | Description                                 |
| -------- | :-------: | ------------------------------------------- |
| `target` | `address` | The address on which staticcall is executed |
| `data`   |  `bytes`  | The data to be sent with the staticcall     |

#### Returns

| Name     |  Type   | Description                           |
| -------- | :-----: | ------------------------------------- |
| `result` | `bytes` | The data returned from the staticcall |

<br/>

### \_executeDelegateCall

```solidity
function _executeDelegateCall(
  address target,
  bytes data
) internal nonpayable returns (bytes result);
```

perform low-level delegatecall (operation type = 4)

#### Parameters

| Name     |   Type    | Description                                   |
| -------- | :-------: | --------------------------------------------- |
| `target` | `address` | The address on which delegatecall is executed |
| `data`   |  `bytes`  | The data to be sent with the delegatecall     |

#### Returns

| Name     |  Type   | Description                             |
| -------- | :-----: | --------------------------------------- |
| `result` | `bytes` | The data returned from the delegatecall |

<br/>

### \_deployCreate

```solidity
function _deployCreate(
  uint256 value,
  bytes creationCode
) internal nonpayable returns (bytes newContract);
```

deploy a contract using the CREATE opcode (operation type = 1)

#### Parameters

| Name           |   Type    | Description                                                                        |
| -------------- | :-------: | ---------------------------------------------------------------------------------- |
| `value`        | `uint256` | The value to be sent to the contract created                                       |
| `creationCode` |  `bytes`  | The contract creation bytecode to deploy appended with the constructor argument(s) |

#### Returns

| Name          |  Type   | Description                                  |
| ------------- | :-----: | -------------------------------------------- |
| `newContract` | `bytes` | The address of the contract created as bytes |

<br/>

### \_deployCreate2

```solidity
function _deployCreate2(
  uint256 value,
  bytes creationCode
) internal nonpayable returns (bytes newContract);
```

deploy a contract using the CREATE2 opcode (operation type = 2)

#### Parameters

| Name           |   Type    | Description                                                                                           |
| -------------- | :-------: | ----------------------------------------------------------------------------------------------------- |
| `value`        | `uint256` | The value to be sent to the contract created                                                          |
| `creationCode` |  `bytes`  | The contract creation bytecode to deploy appended with the constructor argument(s) and a bytes32 salt |

#### Returns

| Name          |  Type   | Description                                  |
| ------------- | :-----: | -------------------------------------------- |
| `newContract` | `bytes` | The address of the contract created as bytes |

<br/>

### \_getData

```solidity
function _getData(bytes32 dataKey) internal view returns (bytes dataValue);
```

<br/>

### \_setData

```solidity
function _setData(bytes32 dataKey, bytes dataValue) internal nonpayable;
```

This function overrides the [`ERC725YCore`](#erc725ycore) internal [`_setData`](#_setdata) function to optimize gas usage by emitting only the first 256 bytes of the `dataValue`.

<blockquote>

**Emitted events:**

- [`DataChanged`](#datachanged) event with only the first 256 bytes of [`dataValue`](#datavalue).

</blockquote>

#### Parameters

| Name        |   Type    | Description                            |
| ----------- | :-------: | -------------------------------------- |
| `dataKey`   | `bytes32` | The key to store the data value under. |
| `dataValue` |  `bytes`  | The data value to be stored.           |

<br/>

### \_transferOwnership

```solidity
function _transferOwnership(address newOwner) internal nonpayable;
```

Set the pending owner of the contract and cancel any renounce ownership process that was previously started.

<blockquote>

**Requirements:**

- `newOwner` cannot be the address of the contract itself.

</blockquote>

#### Parameters

| Name       |   Type    | Description                           |
| ---------- | :-------: | ------------------------------------- |
| `newOwner` | `address` | The address of the new pending owner. |

<br/>

### \_acceptOwnership

```solidity
function _acceptOwnership() internal nonpayable;
```

Set the pending owner of the contract as the new owner.

<br/>

### \_renounceOwnership

```solidity
function _renounceOwnership() internal nonpayable;
```

Initiate or confirm the process of renouncing ownership after a specific delay of blocks have passed.

<br/>

### \_supportsInterfaceInERC165Extension

```solidity
function _supportsInterfaceInERC165Extension(
  bytes4 interfaceId
) internal view returns (bool);
```

Returns whether the interfaceId being checked is supported in the extension of the
[`supportsInterface`](#supportsinterface) selector.
To be used by extendable contracts wishing to extend the ERC165 interfaceIds originally
supported by reading whether the interfaceId queried is supported in the `supportsInterface`
extension if the extension is set, if not it returns false.

<br/>

### \_getExtension

```solidity
function _getExtension(bytes4 functionSelector) internal view returns (address);
```

Returns the extension address stored under the following data key:

- [`_LSP17_EXTENSION_PREFIX`](#_lsp17_extension_prefix) + `<bytes4>` (Check [LSP2-ERC725YJSONSchema] for encoding the data key).

- If no extension is stored, returns the address(0).

<br/>

### \_fallbackLSP17Extendable

```solidity
function _fallbackLSP17Extendable(
  bytes callData
) internal nonpayable returns (bytes);
```

Forwards the call to an extension mapped to a function selector.
Calls [`_getExtension`](#_getextension) to get the address of the extension mapped to the function selector being called on the account. If there is no extension, the `address(0)` will be returned.
Reverts if there is no extension for the function being called, except for the bytes4(0) function selector, which passes even if there is no extension for it.
If there is an extension for the function selector being called, it calls the extension with the CALL opcode, passing the `msg.data` appended with the 20 bytes of the `msg.sender` and 32 bytes of the `msg.value`

<br/>

### \_verifyCall

```solidity
function _verifyCall(
  address logicVerifier
) internal nonpayable returns (bool verifyAfter);
```

Calls [`lsp20VerifyCall`](#lsp20verifycall) function on the logicVerifier.
Reverts in case the value returned does not match the magic value (lsp20VerifyCall selector)
Returns whether a verification after the execution should happen based on the last byte of the magicValue

<br/>

### \_verifyCallResult

```solidity
function _verifyCallResult(
  address logicVerifier,
  bytes callResult
) internal nonpayable;
```

Calls [`lsp20VerifyCallResult`](#lsp20verifycallresult) function on the logicVerifier.
Reverts in case the value returned does not match the magic value (lsp20VerifyCallResult selector)

<br/>

### \_validateCall

```solidity
function _validateCall(
  bool postCall,
  bool success,
  bytes returnedData
) internal pure;
```

<br/>

### \_revertWithLSP20DefaultError

```solidity
function _revertWithLSP20DefaultError(
  bool postCall,
  bytes returnedData
) internal pure;
```

<br/>

## Events

### ContractCreated

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#contractcreated)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Event signature: `ContractCreated(uint256,address,uint256,bytes32)`
- Event topic hash: `0xa1fb700aaee2ae4a2ff6f91ce7eba292f89c2f5488b8ec4c5c5c8150692595c3`

:::

```solidity
event ContractCreated(uint256 indexed operationType, address indexed contractAddress, uint256 indexed value, bytes32 salt);
```

_Emitted when deploying a contract_

Emitted whenever a contract is created

#### Parameters

| Name                            |   Type    | Description                                                                    |
| ------------------------------- | :-------: | ------------------------------------------------------------------------------ |
| `operationType` **`indexed`**   | `uint256` | The opcode used to deploy the contract (CREATE or CREATE2)                     |
| `contractAddress` **`indexed`** | `address` | The created contract address                                                   |
| `value` **`indexed`**           | `uint256` | The amount of native tokens (in Wei) sent to fund the created contract address |
| `salt`                          | `bytes32` | -                                                                              |

<br/>

### DataChanged

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#datachanged)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Event signature: `DataChanged(bytes32,bytes)`
- Event topic hash: `0xece574603820d07bc9b91f2a932baadf4628aabcb8afba49776529c14a6104b2`

:::

```solidity
event DataChanged(bytes32 indexed dataKey, bytes dataValue);
```

_Emitted when data at a key is changed_

#### Parameters

| Name                    |   Type    | Description                          |
| ----------------------- | :-------: | ------------------------------------ |
| `dataKey` **`indexed`** | `bytes32` | The data key which data value is set |
| `dataValue`             |  `bytes`  | The data value to set                |

<br/>

### Executed

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#executed)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Event signature: `Executed(uint256,address,uint256,bytes4)`
- Event topic hash: `0x4810874456b8e6487bd861375cf6abd8e1c8bb5858c8ce36a86a04dabfac199e`

:::

```solidity
event Executed(uint256 indexed operationType, address indexed target, uint256 indexed value, bytes4 selector);
```

_Emitted when calling an address (EOA or contract)_

#### Parameters

| Name                          |   Type    | Description                                                                                      |
| ----------------------------- | :-------: | ------------------------------------------------------------------------------------------------ |
| `operationType` **`indexed`** | `uint256` | The low-level call opcode used to call the `to` address (CALL, STATICALL or DELEGATECALL)        |
| `target` **`indexed`**        | `address` | The address to call. `target` will be unused if a contract is created (operation types 1 and 2). |
| `value` **`indexed`**         | `uint256` | The amount of native tokens transferred with the call (in Wei)                                   |
| `selector`                    | `bytes4`  | The first 4 bytes (= function selector) of the data sent with the call                           |

<br/>

### OwnershipRenounced

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#ownershiprenounced)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Event signature: `OwnershipRenounced()`
- Event topic hash: `0xd1f66c3d2bc1993a86be5e3d33709d98f0442381befcedd29f578b9b2506b1ce`

:::

```solidity
event OwnershipRenounced();
```

_Successfully renounced ownership of the contract. This contract is now owned by anyone, it's owner is `address(0)`._

Emitted when the ownership of the contract has been renounced.

<br/>

### OwnershipTransferStarted

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#ownershiptransferstarted)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Event signature: `OwnershipTransferStarted(address,address)`
- Event topic hash: `0x38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e22700`

:::

```solidity
event OwnershipTransferStarted(address indexed previousOwner, address indexed newOwner);
```

_The transfer of ownership of the contract was initiated. Pending new owner set to: `newOwner`._

Emitted when [`transferOwnership(..)`](#transferownership) was called and the first step of transferring ownership completed successfully which leads to [`pendingOwner`](#pendingowner) being updated.

#### Parameters

| Name                          |   Type    | Description                        |
| ----------------------------- | :-------: | ---------------------------------- |
| `previousOwner` **`indexed`** | `address` | The address of the previous owner. |
| `newOwner` **`indexed`**      | `address` | The address of the new owner.      |

<br/>

### OwnershipTransferred

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#ownershiptransferred)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Event signature: `OwnershipTransferred(address,address)`
- Event topic hash: `0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0`

:::

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
```

#### Parameters

| Name                          |   Type    | Description |
| ----------------------------- | :-------: | ----------- |
| `previousOwner` **`indexed`** | `address` | -           |
| `newOwner` **`indexed`**      | `address` | -           |

<br/>

### RenounceOwnershipStarted

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#renounceownershipstarted)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Event signature: `RenounceOwnershipStarted()`
- Event topic hash: `0x81b7f830f1f0084db6497c486cbe6974c86488dcc4e3738eab94ab6d6b1653e7`

:::

```solidity
event RenounceOwnershipStarted();
```

_Ownership renouncement initiated._

Emitted when starting the [`renounceOwnership(..)`](#renounceownership) 2-step process.

<br/>

### UniversalReceiver

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#universalreceiver)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Event signature: `UniversalReceiver(address,uint256,bytes32,bytes,bytes)`
- Event topic hash: `0x9c3ba68eb5742b8e3961aea0afc7371a71bf433c8a67a831803b64c064a178c2`

:::

```solidity
event UniversalReceiver(address indexed from, uint256 indexed value, bytes32 indexed typeId, bytes receivedData, bytes returnedValue);
```

\*Address `from` called the `universalReceiver(...)` function while sending `value` LYX. Notification type (typeId): `typeId`

- Data received: `receivedData`.\*

Emitted when the [`universalReceiver`](#universalreceiver) function was called with a specific `typeId` and some `receivedData` s

#### Parameters

| Name                   |   Type    | Description                                                                                                                                                                             |
| ---------------------- | :-------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `from` **`indexed`**   | `address` | The address of the EOA or smart contract that called the {universalReceiver(...)} function.                                                                                             |
| `value` **`indexed`**  | `uint256` | The amount sent to the {universalReceiver(...)} function.                                                                                                                               |
| `typeId` **`indexed`** | `bytes32` | A `bytes32` unique identifier (= _"hook"_)that describe the type of notification, information or transaction received by the contract. Can be related to a specific standard or a hook. |
| `receivedData`         |  `bytes`  | Any arbitrary data that was sent to the {universalReceiver(...)} function.                                                                                                              |
| `returnedValue`        |  `bytes`  | The value returned by the {universalReceiver(...)} function.                                                                                                                            |

<br/>

### ValueReceived

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#valuereceived)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Event signature: `ValueReceived(address,uint256)`
- Event topic hash: `0x7e71433ddf847725166244795048ecf3e3f9f35628254ecbf736056664233493`

:::

```solidity
event ValueReceived(address indexed sender, uint256 indexed value);
```

_`value` native tokens received from `sender`._

Emitted when receiving native tokens.

#### Parameters

| Name                   |   Type    | Description                                                |
| ---------------------- | :-------: | ---------------------------------------------------------- |
| `sender` **`indexed`** | `address` | The address that sent some native tokens to this contract. |
| `value` **`indexed`**  | `uint256` | The amount of native tokens received.                      |

<br/>

## Errors

### CannotTransferOwnershipToSelf

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#cannottransferownershiptoself)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Error signature: `CannotTransferOwnershipToSelf()`
- Error hash: `0x43b248cd`

:::

```solidity
error CannotTransferOwnershipToSelf();
```

_Cannot transfer ownership to the address of the contract itself._

Reverts when trying to transfer ownership to the `address(this)`.

<br/>

### ERC725X_ContractDeploymentFailed

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#erc725x_contractdeploymentfailed)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Error signature: `ERC725X_ContractDeploymentFailed()`
- Error hash: `0x0b07489b`

:::

```solidity
error ERC725X_ContractDeploymentFailed();
```

reverts when contract deployment via `ERC725X.execute(...)`/`ERC725X.executeBatch(...)` failed. whether using operation type 1 (CREATE) or 2 (CREATE2).

<br/>

### ERC725X_CreateOperationsRequireEmptyRecipientAddress

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#erc725x_createoperationsrequireemptyrecipientaddress)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Error signature: `ERC725X_CreateOperationsRequireEmptyRecipientAddress()`
- Error hash: `0x3041824a`

:::

```solidity
error ERC725X_CreateOperationsRequireEmptyRecipientAddress();
```

reverts when passing a `to` address while deploying a contract va `ERC725X.execute(...)`/`ERC725X.executeBatch(...)` whether using operation type 1 (CREATE) or 2 (CREATE2).

<br/>

### ERC725X_ExecuteParametersEmptyArray

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#erc725x_executeparametersemptyarray)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Error signature: `ERC725X_ExecuteParametersEmptyArray()`
- Error hash: `0xe9ad2b5f`

:::

```solidity
error ERC725X_ExecuteParametersEmptyArray();
```

reverts when one of the array parameter provided to `executeBatch(uint256[],address[],uint256[],bytes[]) is an empty array

<br/>

### ERC725X_ExecuteParametersLengthMismatch

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#erc725x_executeparameterslengthmismatch)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Error signature: `ERC725X_ExecuteParametersLengthMismatch()`
- Error hash: `0x3ff55f4d`

:::

```solidity
error ERC725X_ExecuteParametersLengthMismatch();
```

reverts when there is not the same number of operation, to addresses, value, and data.

<br/>

### ERC725X_InsufficientBalance

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#erc725x_insufficientbalance)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Error signature: `ERC725X_InsufficientBalance(uint256,uint256)`
- Error hash: `0x0df9a8f8`

:::

```solidity
error ERC725X_InsufficientBalance(uint256 balance, uint256 value);
```

reverts when trying to send more native tokens `value` than available in current `balance`.

#### Parameters

| Name      |   Type    | Description                                                                              |
| --------- | :-------: | ---------------------------------------------------------------------------------------- |
| `balance` | `uint256` | the balance of the ERC725X contract.                                                     |
| `value`   | `uint256` | the amount of native tokens sent via `ERC725X.execute(...)`/`ERC725X.executeBatch(...)`. |

<br/>

### ERC725X_MsgValueDisallowedInDelegateCall

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#erc725x_msgvaluedisallowedindelegatecall)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Error signature: `ERC725X_MsgValueDisallowedInDelegateCall()`
- Error hash: `0x5ac83135`

:::

```solidity
error ERC725X_MsgValueDisallowedInDelegateCall();
```

the `value` parameter (= sending native tokens) is not allowed when making a delegatecall via `ERC725X.execute(...)`/`ERC725X.executeBatch(...)` because msg.value is persisting.

<br/>

### ERC725X_MsgValueDisallowedInStaticCall

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#erc725x_msgvaluedisallowedinstaticcall)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Error signature: `ERC725X_MsgValueDisallowedInStaticCall()`
- Error hash: `0x72f2bc6a`

:::

```solidity
error ERC725X_MsgValueDisallowedInStaticCall();
```

the `value` parameter (= sending native tokens) is not allowed when making a staticcall via `ERC725X.execute(...)`/`ERC725X.executeBatch(...)` because sending native tokens is a state changing operation.

<br/>

### ERC725X_NoContractBytecodeProvided

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#erc725x_nocontractbytecodeprovided)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Error signature: `ERC725X_NoContractBytecodeProvided()`
- Error hash: `0xb81cd8d9`

:::

```solidity
error ERC725X_NoContractBytecodeProvided();
```

reverts when no contract bytecode was provided as parameter when trying to deploy a contract via `ERC725X.execute(...)`/`ERC725X.executeBatch(...)`, whether using operation type 1 (CREATE) or 2 (CREATE2).

<br/>

### ERC725X_UnknownOperationType

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#erc725x_unknownoperationtype)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Error signature: `ERC725X_UnknownOperationType(uint256)`
- Error hash: `0x7583b3bc`

:::

```solidity
error ERC725X_UnknownOperationType(uint256 operationTypeProvided);
```

reverts when the `operationTypeProvided` is none of the default operation types available. (CALL = 0; CREATE = 1; CREATE2 = 2; STATICCALL = 3; DELEGATECALL = 4)

#### Parameters

| Name                    |   Type    | Description |
| ----------------------- | :-------: | ----------- |
| `operationTypeProvided` | `uint256` | -           |

<br/>

### ERC725Y_DataKeysValuesLengthMismatch

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#erc725y_datakeysvalueslengthmismatch)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Error signature: `ERC725Y_DataKeysValuesLengthMismatch()`
- Error hash: `0x3bcc8979`

:::

```solidity
error ERC725Y_DataKeysValuesLengthMismatch();
```

reverts when there is not the same number of elements in the lists of data keys and data values when calling setDataBatch.

<br/>

### LSP14MustAcceptOwnershipInSeparateTransaction

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#lsp14mustacceptownershipinseparatetransaction)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Error signature: `LSP14MustAcceptOwnershipInSeparateTransaction()`
- Error hash: `0x5758dd07`

:::

```solidity
error LSP14MustAcceptOwnershipInSeparateTransaction();
```

_Cannot accept ownership in the same transaction with [`transferOwnership(...)`](#transferownership)._

Reverts when pending owner accept ownership in the same transaction of transferring ownership.

<br/>

### LSP20CallingVerifierFailed

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#lsp20callingverifierfailed)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Error signature: `LSP20CallingVerifierFailed(bool)`
- Error hash: `0x8c6a8ae3`

:::

```solidity
error LSP20CallingVerifierFailed(bool postCall);
```

reverts when the call to the owner fail with no revert reason

#### Parameters

| Name       |  Type  | Description                                          |
| ---------- | :----: | ---------------------------------------------------- |
| `postCall` | `bool` | True if the execution call was done, False otherwise |

<br/>

### LSP20InvalidMagicValue

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#lsp20invalidmagicvalue)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Error signature: `LSP20InvalidMagicValue(bool,bytes)`
- Error hash: `0xd088ec40`

:::

```solidity
error LSP20InvalidMagicValue(bool postCall, bytes returnedData);
```

reverts when the call to the owner does not return the magic value

#### Parameters

| Name           |  Type   | Description                                          |
| -------------- | :-----: | ---------------------------------------------------- |
| `postCall`     | `bool`  | True if the execution call was done, False otherwise |
| `returnedData` | `bytes` | The data returned by the call to the logic verifier  |

<br/>

### NoExtensionFoundForFunctionSelector

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#noextensionfoundforfunctionselector)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Error signature: `NoExtensionFoundForFunctionSelector(bytes4)`
- Error hash: `0xbb370b2b`

:::

```solidity
error NoExtensionFoundForFunctionSelector(bytes4 functionSelector);
```

reverts when there is no extension for the function selector being called with

#### Parameters

| Name               |   Type   | Description |
| ------------------ | :------: | ----------- |
| `functionSelector` | `bytes4` | -           |

<br/>

### NotInRenounceOwnershipInterval

:::note References

- Specification details: [**UniversalProfile**](https://github.com/lukso-network/lips/tree/main/LSPs/LSP-3-UniversalProfile-Metadata.md#notinrenounceownershipinterval)
- Solidity implementation: [`UniversalProfile.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/develop/contracts/UniversalProfile.sol)
- Error signature: `NotInRenounceOwnershipInterval(uint256,uint256)`
- Error hash: `0x8b9bf507`

:::

```solidity
error NotInRenounceOwnershipInterval(
  uint256 renounceOwnershipStart,
  uint256 renounceOwnershipEnd
);
```

_Cannot confirm ownership renouncement yet. The ownership renouncement is allowed from: `renounceOwnershipStart` until: `renounceOwnershipEnd`._

Reverts when trying to renounce ownership before the initial confirmation delay.

#### Parameters

| Name                     |   Type    | Description                                                             |
| ------------------------ | :-------: | ----------------------------------------------------------------------- |
| `renounceOwnershipStart` | `uint256` | The start timestamp when one can confirm the renouncement of ownership. |
| `renounceOwnershipEnd`   | `uint256` | The end timestamp when one can confirm the renouncement of ownership.   |

<br/>