const CRYPTO_KEY_NAME = import.meta.env.VITE_CRYPTO_KEY_NAME
const CRYPTO_KEY_LENGTH = import.meta.env.VITE_CRYPTO_KEY_LENGTH

const useCrypto = () => {
	const encrypt = async (data: string) => {
		const encoder = new TextEncoder()
		const dataBuffer = encoder.encode(data)

		const key = await crypto.subtle.generateKey(
			{ name: CRYPTO_KEY_NAME, length: Number(CRYPTO_KEY_LENGTH) },
			true,
			['encrypt'],
		)

		const encryptedBuffer = await crypto.subtle.encrypt(
			{ name: CRYPTO_KEY_NAME, iv: crypto.getRandomValues(new Uint8Array(12)) },
			key,
			dataBuffer,
		)

		const encryptedArray = Array.from(new Uint8Array(encryptedBuffer))

		return btoa(String.fromCharCode.apply(null, encryptedArray))
	}

	const decrypt = async (data: string) => {
		const encryptedData = data

		// 암호화된 데이터가 없을 경우
		if (!encryptedData) return

		const encryptedBuffer = Uint8Array.from(atob(encryptedData), c =>
			c.charCodeAt(0),
		)

		const key = await crypto.subtle.generateKey(
			{ name: CRYPTO_KEY_NAME, length: Number(CRYPTO_KEY_LENGTH) },
			true,
			['decrypt'],
		)
		const decryptedBuffer = await crypto.subtle.decrypt(
			{ name: CRYPTO_KEY_NAME, iv: crypto.getRandomValues(new Uint8Array(12)) },
			key,
			encryptedBuffer,
		)

		const decoder = new TextDecoder()
		const decryptedData = decoder.decode(decryptedBuffer)

		return JSON.parse(decryptedData)
	}

	return { encrypt, decrypt }
}

export default useCrypto
