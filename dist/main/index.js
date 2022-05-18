"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageLinkType = exports.SystemMessageType = exports.CallStatus = exports.AttachmentType = exports.ApplicationErrorCode = void 0;
var ApplicationErrorCode;
(function (ApplicationErrorCode) {
    ApplicationErrorCode["BadRequest"] = "BadRequest";
    ApplicationErrorCode["Unauthorized"] = "Unauthorized";
    ApplicationErrorCode["Forbidden"] = "Forbidden";
    ApplicationErrorCode["InternalServerError"] = "InternalServerError";
    ApplicationErrorCode["UnprocessableEntity"] = "UnprocessableEntity";
    ApplicationErrorCode["DuplicateNickname"] = "DuplicateNickname";
    ApplicationErrorCode["DuplicatePhoneNumber"] = "DuplicatePhoneNumber";
    ApplicationErrorCode["InvalidVerificationCode"] = "InvalidVerificationCode";
    ApplicationErrorCode["PhoneNumberNotConfirmed"] = "PhoneNumberNotConfirmed";
    ApplicationErrorCode["UserNotRegistered"] = "UserNotRegistered";
    ApplicationErrorCode["NicknameAlreadyTaken"] = "NicknameAlreadyTaken";
    ApplicationErrorCode["UserBlockedByInterlocutor"] = "UserBlockedByInterlocutor";
    ApplicationErrorCode["ChatNotExists"] = "ChatNotExists";
    ApplicationErrorCode["GoogleAuthEmailNotVerified"] = "GoogleAuthEmailNotVerified";
    ApplicationErrorCode["GoogleAuthIdTokenInvalid"] = "GoogleAuthIdTokenInvalid";
    ApplicationErrorCode["GoogleAuthDisabled"] = "GoogleAuthDisabled";
    ApplicationErrorCode["DuplicateEmailAddress"] = "DuplicateEmailAddress";
})(ApplicationErrorCode = exports.ApplicationErrorCode || (exports.ApplicationErrorCode = {}));
var AttachmentType;
(function (AttachmentType) {
    AttachmentType["Audio"] = "Audio";
    AttachmentType["Voice"] = "Voice";
    AttachmentType["Video"] = "Video";
    AttachmentType["Picture"] = "Picture";
    AttachmentType["Raw"] = "Raw";
})(AttachmentType = exports.AttachmentType || (exports.AttachmentType = {}));
var CallStatus;
(function (CallStatus) {
    CallStatus["Negotiating"] = "Negotiating";
    CallStatus["Active"] = "Active";
    CallStatus["Ended"] = "Ended";
    CallStatus["Cancelled"] = "Cancelled";
    CallStatus["Declined"] = "Declined";
    CallStatus["NotAnswered"] = "NotAnswered";
    CallStatus["Interrupted"] = "Interrupted";
})(CallStatus = exports.CallStatus || (exports.CallStatus = {}));
var SystemMessageType;
(function (SystemMessageType) {
    SystemMessageType["None"] = "None";
    SystemMessageType["GroupChatMemberRemoved"] = "GroupChatMemberRemoved";
    SystemMessageType["GroupChatAvatarChanged"] = "GroupChatAvatarChanged";
    SystemMessageType["GroupChatCreated"] = "GroupChatCreated";
    SystemMessageType["GroupChatMemberAdded"] = "GroupChatMemberAdded";
    SystemMessageType["GroupChatNameChanged"] = "GroupChatNameChanged";
    SystemMessageType["GroupChatAvatarRemoved"] = "GroupChatAvatarRemoved";
    SystemMessageType["GroupChatMemberLeft"] = "GroupChatMemberLeft";
    SystemMessageType["UserCreated"] = "UserCreated";
    SystemMessageType["CallEnded"] = "CallEnded";
})(SystemMessageType = exports.SystemMessageType || (exports.SystemMessageType = {}));
var MessageLinkType;
(function (MessageLinkType) {
    MessageLinkType["Reply"] = "Reply";
    MessageLinkType["Forward"] = "Forward";
})(MessageLinkType = exports.MessageLinkType || (exports.MessageLinkType = {}));
