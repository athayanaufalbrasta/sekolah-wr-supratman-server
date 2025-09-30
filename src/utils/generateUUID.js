import crypto from "crypto";

function generateSecureRandomInt4() {
	const buffer = crypto.randomBytes(4);
	const unsignedInt32 = buffer.readUInt32BE(0);
	const maxInt4Positive = 2147483647; // Batas max dari signed int32

	let result = unsignedInt32 % maxInt4Positive;
	if (result === 0) {
		result = maxInt4Positive;
	}

	return result;
}

export { generateSecureRandomInt4 };
