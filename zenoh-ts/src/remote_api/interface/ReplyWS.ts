// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { ReplyErrorWS } from "./ReplyErrorWS";
import type { SampleWS } from "./SampleWS";

export type ReplyWS = { query_uuid: string, result: { Ok : SampleWS } | { Err : ReplyErrorWS }, };
