// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { B64String } from "./B64String.js";
import type { QueryableMsg } from "./QueryableMsg.js";
import type { ReplyWS } from "./ReplyWS.js";
import type { SampleWS } from "./SampleWS.js";
import type { SessionInfo } from "./SessionInfo.js";

export type DataMsg = { "PublisherPut": { id: string, payload: B64String, attachment: B64String | null, encoding: string | null, timestamp: string | null, } } | { "PublisherDelete": { id: string, attachment: B64String | null, timestamp: string | null, } } | { "Sample": [SampleWS, string] } | { "GetReply": ReplyWS } | { "SessionInfo": SessionInfo } | { "NewTimestamp": { id: string, string_rep: string, millis_since_epoch: bigint, } } | { "Queryable": QueryableMsg };
